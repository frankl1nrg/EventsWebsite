<script setup>
  import { ref, reactive, onMounted } from 'vue';
  import { API, graphqlOperation } from 'aws-amplify';
  import { listCategories } from '../../graphql/queries';
  import { user, checkUser } from '@/services/UserService';
  import { createEvent } from '../../graphql/mutations';
  const formState = reactive({
    title: '',
    description: '',
    start_datetime: '',
    end_datetime: '',
    location: '',
    ticketAvailability: 1,
    imageURL: '',
    category: '',
    eventUserId: '',
    titleValid: true,
    descriptionValid: true,
    ticketAvailabilityValid: true
  });

  const categories = ref([]);
  
  onMounted(async () => {
    checkUser();
    console.log('User email at form submission:', user.value.attributes?.email);
    try {
      const response = await API.graphql(graphqlOperation(listCategories));
      categories.value = response.data.listCategories.items;
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  });
  
  async function handleSubmit() {
    // Convert the local datetime to an ISO 8601 string in UTC
    const startDateTime = new Date(formState.startDatetime + ':00').toISOString();
    const endDateTime = new Date(formState.endDatetime + ':00').toISOString();

    // Remove milliseconds from the ISO string as AWSDateTime doesn't accept milliseconds
    const startDateTimeAWS = startDateTime.substring(0, startDateTime.length - 5) + 'Z';
    const endDateTimeAWS = endDateTime.substring(0, endDateTime.length - 5) + 'Z';
    
    if (formState.titleValid && formState.descriptionValid && formState.ticketAvailabilityValid) {
        try {
            console.log('before user', user);
            const eventData = {
                title: formState.title,
                description: formState.description,
                start_datetime: startDateTimeAWS,
                end_datetime: endDateTimeAWS,
                location: formState.location,
                ticketAvailability: formState.ticketAvailability,
                imageURL: formState.imageURL,
                eventUserId: user.value.attributes.email,
                eventCategoryId: formState.category
            };

        const newEvent = await API.graphql(graphqlOperation(createEvent, { input: eventData }));
        console.log('Event created:', newEvent);
        resetForm();
        // If you have additional logic for success (like redirection), add it here
        } catch (error) {
        console.error('Error creating event:', error);
        // Handle error, perhaps set an error state and display a message
        }
    }
}
  
  function resetForm() {
    formState.title = '';
    formState.description = '';
    formState.start_datetime = '';
    formState.end_datetime = '';
    formState.location = '';
    formState.ticketAvailability = 1;
    formState.imageURL = '';
    formState.category = '';
  }
</script>  
<template setup>
    <form @submit.prevent="handleSubmit" class="event-form">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="formState.title" required>
        <span v-if="!formState.titleValid">Title is required.</span>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" id="description" v-model="formState.description" required>
        <span v-if="!formState.descriptionValid">Description is required.</span>
      </div>
      <div class="form-group">
        <label for="start-datetime">Start datetime</label>
        <input type="datetime-local" id="start-datetime" v-model="formState.start_datetime">
      </div>
      <div class="form-group">
        <label for="end-datetime">End datetime</label>
        <input type="datetime-local" id="end-datetime" v-model="formState.end_datetime">
      </div>
      <div class="form-group">
        <label for="location">Location</label>
        <input type="text" id="location" v-model="formState.location">
      </div>
      <div class="form-group">
        <label for="ticket-availability">Ticket availability</label>
        <input type="number" id="ticket-availability" v-model.number="formState.ticketAvailability" min="1" required>
        <span v-if="!formState.ticketAvailabilityValid">Must be an integer greater than 1.</span>
      </div>
      <div class="form-group">
        <label for="image-url">Image url</label>
        <input type="url" id="image-url" v-model="formState.imageURL" required>
      </div>
      <div class="form-label">
        <label>User: </label>
        <span>{{ user.attributes.email }} </span>
      </div>
      <div class="form-select">
        <label for="category">Category</label>
        <select id="category" v-model="formState.category">
          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
      </div>
      <div class="form-actions">
        <button type="reset" @click="resetForm">Clear</button>
      </div>
      <div class="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
</template>

<style scoped>
.event-form {
  max-width: 500px; /* Adjust width as necessary */
  margin: auto;
  padding: 1rem;
  background: #ffffff; /* Background color of the form */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Optional: add shadow for better UI */
}

.form-group {
  margin-bottom: 1rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
}

.error-message {
  color: red;
  font-size: 0.85rem;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
}

.btn-reset,
.btn-submit {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-reset {
  background-color: #f8f8f8;
}

.btn-submit {
  background-color: #007bff;
  color: white;
}

label{
  color: black;
}
</style>
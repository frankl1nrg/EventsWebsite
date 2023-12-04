<template>
    <div v-if="event" class="center">
      <div class="title">{{ event.title }}</div>
      <img :src="event.imageURL" :alt="event.title"/>
      <h2>{{ event.description }}</h2>
        <h2>{{ event.start_datetime }}</h2>
        <h2>{{ event.end_datetime }}</h2>
        <h2>{{ event.location }}</h2>
        <h2>{{ event.category }}</h2>
        <h2>Reservations Left: {{ event.ticketAvailability }}</h2>
        <button class="reservation-button" @click="createReservation">Reserve Seats</button>

      <!-- Display other event details -->
    </div>
    <div v-else>
      <p>Loading event details...</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { API, graphqlOperation } from 'aws-amplify';
  import { getEvent } from '../graphql/queries';
  import { createReservation } from '../graphql/mutations';
  import { user } from '@/services/UserService'; // Import user service
  
  export default {
    name: 'EventInfo',
    setup() {
      const route = useRoute();
      const event = ref(null);

      //turn the event.start_datetime into a date object
    
        
  
      const fetchEventDetails = async () => {
        try {
          const eventData = await API.graphql(graphqlOperation(getEvent, { id: route.params.id }));
          eventData.data.getEvent.start_datetime = new Date(eventData.data.getEvent.start_datetime);
          eventData.data.getEvent.end_datetime = new Date(eventData.data.getEvent.end_datetime);
          eventData.data.getEvent.start_datetime = eventData.data.getEvent.start_datetime.toLocaleString();
          eventData.data.getEvent.end_datetime = eventData.data.getEvent.end_datetime.toLocaleString();
          event.value = eventData.data.getEvent;
        } catch (error) {
          console.error('Error fetching event details:', error);
        }
      };

      const createReservation = async () => {
        try {
          const reservationData = await API.graphql(graphqlOperation(createReservation, {
            input: {
              reservationUserId: user.value.attributes.email,
              reservationEventId: event.value.id
            }
          }));
          console.log('Reservation data:', reservationData);
          alert('Reservation created successfully!');
        } catch (error) {
          console.error('Error creating reservation:', error);
        };
    };
  
      onMounted(fetchEventDetails);
  
      return { event, createReservation };
    }
  };
</script>
  
<style scoped>
  /* Add your styles here */

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  margin-bottom: 30px;
}
.center {
  text-align: center;
}
.title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
}
h2 {
    font-size: 20px;
    margin-bottom: 10px;
}

  </style>
  
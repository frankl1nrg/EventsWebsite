<template>
  <div v-if="isLoggedIn">
    <!-- Display user's events -->
    <div v-for="event in userEvents" :key="event.id" class="event-card-container">
      <EventCard :event="event" />
    </div>

  </div>
  <div v-else class="not-logged-in">
    <!-- Display not logged in message -->
    <img src="/notLoggedInMyEvents.png" alt="Not Logged In" class="center">
  </div>
</template>


<script>
import { ref, onMounted, watch } from 'vue';
import { setupAuthListener, user } from '@/services/UserService';
import EventCard from '../components/body/EventCard.vue';
import { API, graphqlOperation } from 'aws-amplify';
import { listEvents } from '../graphql/queries';

export default {
components: {
  EventCard,
},
setup() {
  const isLoggedIn = ref(false);
  const userEvents = ref([]);

  const fetchUserEvents = async () => {
      console.log(user.value.attributes.email);
    if (user.value && user.value.attributes.email) {
      try {
          const eventData = await API.graphql(graphqlOperation(listEvents, {
              filter: {
                  eventUserId: {
                  eq: user.value.attributes.email
                  }
              }
              }));
          userEvents.value = eventData.data.listEvents.items;
          console.log('Event data:', eventData);
      } catch (error) {
          console.error('Error fetching events:', error);
      }
    }
  };

  onMounted(async () => {
    await setupAuthListener();
    isLoggedIn.value = user.value !== null;
    if (isLoggedIn.value) {
      await fetchUserEvents();
    }
  });

  watch(user, async (newValue) => {
    if (newValue && newValue.id) {
      isLoggedIn.value = true;
      await fetchUserEvents();
    } else {
      isLoggedIn.value = false;
    }
  });

  return { isLoggedIn, userEvents };
}
};
</script>

<style>
  .center{
      display: block;
      margin: auto;
      margin-top: 30px;
      width: 50%;
      height: auto;
  }

  .event-card-container {
      display: grid;;
      flex-direction: row;
      flex-wrap: nowrap; /* Prevent wrapping onto new lines */
      overflow-x: auto; /* Add horizontal scrollbar */
      gap: 20px; /* Optional: Adds space between cards */
      margin: 20px;
      /* Additional styling as needed */
  }

</style>
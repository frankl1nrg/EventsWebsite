<template>
    <div v-if="isLoggedIn">
      <!-- Display user's events -->
      <div v-for="event in userEvents" :key="event.id" class="event-card-container">
        <EventCard :event="event" />
      </div>
    </div>
    <div v-else class="not-logged-in">
      <!-- Display not logged in message -->
      <img src="src/views/images/notLoggedInMyEvents.png" alt="Not Logged In" class="center">
    </div>
  </template>
  

<script>
import { ref, onMounted } from 'vue';
import { setupAuthListener, user } from '@/services/UserService';
import EventCard from '../components/body/EventCard.vue';
import { API, graphqlOperation } from 'aws-amplify';
import { listEvents } from '../graphql/queries';
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';

Amplify.configure(awsExports);

export default {
  components: {
    EventCard,
  },
  setup() {
    const isLoggedIn = ref(false);
    const userEvents = ref([]);

    const fetchUserEvents = async () => {
      if (user.value) {
        try {
          const eventData = await API.graphql(graphqlOperation(listEvents, {
            filter: { userId: { eq: user.value.id } }
          }));
          userEvents.value = eventData.data.listEvents.items;
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

    return { isLoggedIn, userEvents };
  }
};
</script>

<style>
    .menu{
        align-items: center;
        justify-content: center;
    }

    .input{
        background-color: rgb(255, 255, 255);
        color: black;
        padding: 5px;
        height: 30px;
        border-radius: 10px;
    }

    .loginButton{
        display: block;
        background-color: rgb(28, 40, 51);
        margin: auto;
        margin-top: 30px;
        color: white;
        height: 40px;
        width: 100px;
        border-radius: 10px;
    }

    .center{
        display: block;
        margin: auto;
        margin-top: 30px;
        width: 50%;
        height: auto;
    }
</style>
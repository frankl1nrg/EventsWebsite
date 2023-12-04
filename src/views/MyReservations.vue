<template>
    <div v-if="isLoggedIn">
      <!-- Display user's reservations -->
      <div v-for="reservation in userReservations" :key="reservation.id" class="reservation-card-container">
        <!-- Check if the event details are available before rendering EventCard -->
        <EventCard v-if="events[reservation.reservationEventId]" :event="events[reservation.reservationEventId]" />
      </div>
    </div>
    <div v-else class="not-logged-in">
      <!-- Display not logged in message -->
      <img src="/notLoggedInMyReservations.png" alt="Not Logged In" class="center">
    </div>
  </template>
  
  <script>
  import { ref, onMounted, watch } from 'vue';
  import { setupAuthListener, user } from '@/services/UserService';
  import EventCard from '../components/body/EventCard.vue';
  import { API, graphqlOperation } from 'aws-amplify';
  import { listReservations, getEvent } from '../graphql/queries';
  
  export default {
    components: {
      EventCard,
    },
    setup() {
      const isLoggedIn = ref(false);
      const userReservations = ref([]);
      const events = ref({}); // Object to store event details keyed by event ID
  
      const fetchEventDetails = async (eventId) => {
        try {
          const eventData = await API.graphql(graphqlOperation(getEvent, { id: eventId }));
          events.value[eventId] = eventData.data.getEvent;
        } catch (error) {
          console.error('Error fetching event details:', error);
        }
      };
  
      const fetchUserReservations = async () => {
        if (user.value && user.value.attributes.email) {
          try {
            const reservationData = await API.graphql(graphqlOperation(listReservations, {
              filter: {
                reservationUserId: {
                  eq: user.value.attributes.email
                }
              }
            }));
            userReservations.value = reservationData.data.listReservations.items;
            // Fetch event details for each reservation
            for (const reservation of userReservations.value) {
              await fetchEventDetails(reservation.reservationEventId);
            }
          } catch (error) {
            console.error('Error fetching reservations:', error);
          }
        }
      };
  
      onMounted(async () => {
        await setupAuthListener();
        isLoggedIn.value = user.value !== null;
        if (isLoggedIn.value) {
          await fetchUserReservations();
        }
      });
  
      watch(user, async (newValue) => {
        if (newValue && newValue.id) {
          isLoggedIn.value = true;
          await fetchUserReservations();
        } else {
          isLoggedIn.value = false;
        }
      });
  
      return { isLoggedIn, userReservations, events };
    }
  };
  </script>
  
  <style>
    /* Similar styles as in MyEvents.vue */
    .reservation-card-container {
      /* Styling for reservation cards */
    }
    .not-logged-in .center {
      /* Styling for not logged in message */
    }
    /* Other styles */
  </style>
  
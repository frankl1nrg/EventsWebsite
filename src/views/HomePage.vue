<template>
    <div class="home-page">
      <div class="main-events">
        <MainEvents :events="mainEvents" />
      </div>
      <div v-for="(categoryEvents, category) in categorizedEvents" :key="category">
        <h2>{{ category }}</h2>
        <div class="events-row">
          <EventCard
            v-for="event in categoryEvents"
            :key="event.id"
            :event="event"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import EventCard from '../components/body/EventCard.vue';
  import { API, graphqlOperation } from 'aws-amplify';
  import { listEvents } from '../graphql/queries';
  import { createEvent } from "../graphql/mutations";
  import VueSlickCarousel from 'vue-slick-carousel';
  import { Amplify } from 'aws-amplify';
  import awsExports from '../aws-exports';
  import MainEvents from '../components/body/MainEvents.vue';

  Amplify.configure(awsExports);

  export default {
    name: 'HomePage',
    components: {
      MainEvents,
      EventCard
    },
    data() {
    return {
      events: [], // Initialize events as an empty array
      mainEventIds: ["1d302d75-9951-4568-816a-76b693837b41", "b060a42a-fb2d-416c-9f4b-f786db11a4cb"], // ID of main events
      slickSettings: {
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
      }
    };
  },
  async created() {
    try {
      const eventData = await API.graphql(graphqlOperation(listEvents));
      console.log('Event data:', eventData);
      this.events = eventData.data.listEvents.items; // Populate the events array with the fetched data
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  },
  computed: {
    mainEvents() {
      // Filter main events based on mainEventIds
      return this.events.filter(event => this.mainEventIds.includes(event.id));
    },
    categorizedEvents() {
      //change the start_datetime to a date object like Sat Oct 02 2021 00:00:00
      this.events.forEach(event => {
        event.start_datetime = new Date(event.start_datetime);
      });
      //change it back to a string
      this.events.forEach(event => {
        event.start_datetime = event.start_datetime.toString();
      });
      const categories = {};
      this.events.forEach(event => {
        if (!categories[event.category]) {
          categories[event.category] = [];
        }
        categories[event.category].push(event);
      });
      return categories;
    }
  }
};
</script>
  
<style>
.events-row {
  display: flex;
  flex-wrap: nowrap; /* Prevent wrapping onto new lines */
  overflow-x: auto; /* Add horizontal scrollbar */
  gap: 20px; /* Optional: Adds space between cards */
  /* Optional: Smooth scrolling (for a better user experience) */
  margin: 20px;
  scroll-behavior: smooth;
  /* Additional styling as needed */
}

  .main-events {
    /* Add more styling as needed */
    display: flex;
    flex-wrap: wrap;
  }
</style>
  
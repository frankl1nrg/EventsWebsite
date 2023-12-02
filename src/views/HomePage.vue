<template>
    <div class="home-page">
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
  import { listEvents } from './graphql/queries';

  const eventData = await API.graphql(graphqlOperation(listEvents, {
    }));

  export default {
    name: 'HomePage',
    components: {
      EventCard
    },
    data() {
      return {
        // Dummy data structure: events categorized by their types
        events: eventData
      };
    },
    computed: {
      categorizedEvents() {
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
    flex-wrap: wrap;
    /* Add more styling as needed */
  }
  </style>
  
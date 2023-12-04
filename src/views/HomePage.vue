<template>
    <div class="home-page">
      <div class="main-events">
      <MainEvents :events="mainEvents" />
      </div>
      <div v-for="(categoryEvents, categoryId) in categorizedEvents" :key="categoryId">
      <h2>{{ getCategoryName(categoryId) }}</h2>
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
  import { listEvents, listCategories } from '../graphql/queries';
  import MainEvents from '../components/body/MainEvents.vue';


  export default {
    name: 'HomePage',
    components: {
      MainEvents,
      EventCard
    },
    data() {
    return {
      events: [], // Initialize events as an empty array
      mainEventIds: ["77db75f6-83f1-426f-9dd7-078cewewewed715ae31", "33310d38-4072-430a-9a4d-4e4fc7f4ee30", "f3721176-57da-4861-b58f-5f5d21eb8aff"], // ID of main events
      slickSettings: {
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
      }
    };
  },
  async created() {
    try {
      const categoriesData = await API.graphql(graphqlOperation(listCategories));
      console.log('Categories data:', categoriesData);
      this.categories = categoriesData.data.listCategories.items; // Populate categories array with the fetched data
    } catch (error) {
      console.error('Error fetching categories:', error);
    };
    try {
      const eventData = await API.graphql(graphqlOperation(listEvents));
      console.log('Event data:', eventData);
      this.events = eventData.data.listEvents.items; // Populate the events array with the fetched data
    } catch (error) {
      console.error('Error fetching events:', error);
    };
  },
  methods: {
    getCategoryName(categoryId) {
      if (this.categories && this.categories.length > 0) {
        const category = this.categories.find(cat => cat.id === categoryId);
        return category ? category.name : 'Unknown Category';
      }
      return 'Loading...'; // or any other placeholder text
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
      //I want to show category name instead of category id but event doesn't have category name so I need to add it from category.name
      const categories = {};
      this.events.forEach(event => {
        if (!categories[event.eventCategoryId]) {
          categories[event.eventCategoryId] = [];
        }
        categories[event.eventCategoryId].push(event);
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
  

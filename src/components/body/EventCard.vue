<template>
  <div class="event-card">
    <img :src="event.image" :alt="`${event.title} image`" class="event-image" />
    <h3 class="event-title">{{ event.title }}</h3>
    <p class="event-date">{{ event.date }}</p>
    <p class="event-location">{{ event.location }}</p>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.event-card {
  /* Add your CSS styles here */
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  text-align: center;
}

.event-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

/* Add more styles as needed */
</style>
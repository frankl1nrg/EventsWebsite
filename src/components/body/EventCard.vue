<template>
  <div class="event-card">
    <img :src="event.imageURL" :alt="`${event.title} image`" class="event-image" />
    <h3 class="event-title">{{ event.title }}</h3>
    <p class="event-date">{{ (event.start_datetime).substring(0, 15) }}</p>
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
  /* Other styles */
}

.event-image {
  width: 120px;
  height: 120px;
  border-radius: 4px;
  object-fit: cover; /* This ensures the image covers the area without distortion */
}

.event-title {
  /* Other styles */
  width: 70%;
}

/* Add more styles as needed */
</style>

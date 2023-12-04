<template>
  <div class="event-card" @click="navigateToEventInfo">
    <img :src="event.imageURL" :alt="`${event.title} image`" class="event-image" />
    <h3 class="event-title">{{ event.title }}</h3>
    <p class="event-date">{{ event.start_datetime.substring(0, 15) }}</p>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter();

    const navigateToEventInfo = () => {
      router.push({ name: 'EventInfo', params: { id: props.event.id } });
    };

    return { navigateToEventInfo };
  }
};
</script>



<style scoped>
.event-card {
  /* Other styles */
  width: 200px;
}

.event-card-button {
  /* Other styles */
  width: auto;
  height: 200px;
  display: flex;
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

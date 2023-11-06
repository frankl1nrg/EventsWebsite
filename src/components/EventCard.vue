<template>
  <div class="event-card">
    <img :src="event.image" alt="" />
    <h3>{{ event.title }}</h3>
    <!-- Include other event details -->
  </div>
</template>

<script>
export default {
  props: ['event']
}
</script>

<style>
/* Add styling for the event card */
</style>

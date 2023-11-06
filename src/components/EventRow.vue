<template>
  <div class="event-row">
    <h2>{{ category }}</h2>
    <div class="event-row__items">
      <slot></slot> <!-- This will render the EventCard components -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['category']
}
</script>

<style>
/* Add styling for the event row */
</style>

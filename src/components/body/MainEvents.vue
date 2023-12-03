<template>
    <div class="carousel">
      <button class="carousel-control left" @click="prevSlide">&lt;</button>
  
      <div class="carousel-slide" v-for="(event, index) in events" :key="event.id" v-show="index === currentSlide">
        <img :src="event.imageURL" :alt="`${event.title} image`" class="event-image" />
        <!-- Other event details -->
      </div>
  
      <button class="carousel-control right" @click="nextSlide">&gt;</button>
    </div>
</template>
  
  <script>
  export default {
    name: 'MainEvents',
    props: {
      events: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        currentSlide: 0
      };
    },
    methods: {
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.events.length;
      },
      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.events.length) % this.events.length;
      }
    }
  };
  </script>
  
<style scoped>
    .carousel {
        width: 100%;
        position: relative; /* Needed to position the buttons */
    }

    .carousel-slide {
        width: 100%;
        position: relative; /* Ensure the slide is positioned correctly */
    }

    .event-image {
        width: 100%;
        height: 400px;
        border-radius: 4px;
        object-fit: cover; /* Ensures the image covers the area without distortion */
    }
    .carousel-control {
        position: absolute;
        top: 50%; /* Center vertically */
        transform: translateY(-50%); /* Center vertically */
        background: grey; /* Grey background */
        border: none; /* Remove borders */
        font-size: 24px; /* Adjust size as needed */
        color: white; /* White color for the arrows for better visibility */
        cursor: pointer; /* Add a pointer on hover */   
        padding: 10px; /* Add padding for better visibility */
        border-width: 100%;
        transition: background-color 0.3s; /* Smooth transition for background color */
        z-index: 10; /* Ensure the buttons are above other elements */
        opacity: 0.5; /* Initial opacity */

}

.carousel-control.left {
  left: 0px; /* Adjust as needed */
  height: 100%;
}

.carousel-control.right {
  right: 0px; /* Adjust as needed */
  height: 100%;
}

.carousel-control:hover {
    background-color: black; /* Background turns black on hover */
    opacity: 0.1; /* Opacity changes on hover */
}

</style>
  
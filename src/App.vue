<script setup>
import { RouterView } from 'vue-router';
import TopBar from './components/header/TopBar.vue';

</script>

<template>
  <header id="WebsiteHeader">
    <TopBar/>
  </header>
  <body>
    <RouterView />
  </body>
  
</template>


<style>
/* Update these styles to match your event ticket website's design */
/*  */
</style>

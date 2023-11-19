<script setup>
import { RouterView } from 'vue-router';
import TopBar from '../src/components/header/TopBar.vue';

</script>

<template>
  <header id="WebsiteHeader">
    <!-- <h1 id="WebsiteTitle"><RouterLink to="/">Event Ticket Website</RouterLink></h1>
    <SearchBar id="SearchBar" @onSearch="handleSearch" />
    <nav>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <UserMenu>
        <template #toggler>
          <button @click="toggle">User Menu</button>
        </template>
        <UserMenuItems/>
      </UserMenu>
    </nav> -->
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

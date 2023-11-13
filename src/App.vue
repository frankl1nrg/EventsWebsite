<script setup>
import { RouterView } from 'vue-router';

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
  </header>
  <body>
    <RouterView />
  </body>
  
</template>


<style>
/* Update these styles to match your event ticket website's design */
/*  */
</style>

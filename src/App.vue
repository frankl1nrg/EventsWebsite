<script setup>
import { RouterLink, RouterView } from 'vue-router';
import SearchBar from './components/SearchBar.vue';
import UserMenu from './components/UserMenu.vue';
import UserMenuItems from './components/UserMenuItems.vue';

</script>

<template>
  <header id="WebsiteHeader">
    <h1 id="WebsiteTitle"><RouterLink to="/">Event Ticket Website</RouterLink></h1>
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
    </nav>
  </header>
  <RouterView />
</template>


<style scoped>
/* Update these styles to match your event ticket website's design */
header#WebsiteHeader {
  display: flex; /* Use flexbox to layout children */
  justify-content: space-between; /* Puts maximum space between children */
  padding: 10px; /* Add padding around the header contents */
  /* If you want a full-width header, make sure to set the width to 100% */
  width: 100%;
}

h1#WebsiteTitle {
  font-size: 20px; /* Adjust font size as needed */
  margin-left: 0; /* Removes default margin for h1 */
  /* If you want the title to take up more space, you can adjust the flex property */
}

/* Style your search bar with necessary adjustments */
#SearchBar {
  /* Adjust margins and padding as necessary */
  margin-left: 20px;
}

/* Navigation styles */
nav {
  display: flex; /* Align nav links in a row */
  justify-content: center; /* Center the navigation links horizontally */
  width: 100%;
  margin-left: 5%; /* Spacing from other elements */
  /* Add additional styles for your navigation */
}

nav a {
  margin-left: 10%; /* Spacing between nav links */
  justify-content: center;
  width: 100%;
  margin-right: 10%;
}

/* User menu styles */

#UserMenu {
  display: flex; 
  margin-left: 20px; /* Spacing from other elements */
}
</style>

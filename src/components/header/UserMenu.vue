<template setup>
    <div class="menu-popup">
      <button class="menu-button" @click="redirectTo('/createEvent')">Host Event</button>
      <button class="menu-button" @click="redirectTo('/myEvents')">My Events</button>
      <button class="menu-button" @click="redirectTo('/myReservations')">My Reservations</button>
    </div>
</template>
  
<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const props = defineProps({
    closePopup: Function
  });
  const redirectTo = (path) => {
    router.push(path);
    props.closePopup(); // Close the popup after navigation
  };
</script>
  
<style scoped>
  .menu-popup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #64748B; /* Adjust the color to match your design */
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .menu-button {
    background: #1E293B; /* Adjust the color to match your design */
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 10px 0;
    cursor: pointer;
  }
  
  .menu-button:hover {
    background: #334155; /* Adjust for hover state */
  }
</style>  
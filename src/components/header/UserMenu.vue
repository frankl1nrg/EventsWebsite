<template>
  <select class="top">
    <option value="profile">
      Profile
    </option>
    <option onclick="window.location.href='/createEvent'" value="newEvent">
      Create Event
    </option>
    <option onclick="window.location.href='/myEvents'" value="myEvents">
      My Events
    </option>
    <option onclick="window.location.href='/myReservations'" value="myReservations">
      My Reservations
    </option>
  </select>
</template>

<script>

</script>

<style>
  .top {
    background-color: rgb(28, 40, 51);
    color: white;
    padding: 5px;
    height: 30px;
    border-radius: 10px;
  }
</style>
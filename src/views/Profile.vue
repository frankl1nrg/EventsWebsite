<template>
    <div>
        <button class = "button" onclick="window.location.href='/createEvent'">
            New Event
        </button>
        <button class = "button" onclick="window.location.href='/myEvents'">
            My Events
        </button>
        <button class = "button" onclick="window.location.href='/myReservations'">
            My Reservations
        </button>
    </div>
</template>

<style>
    .button{
        background-color: rgb(28, 40, 51);
        color: white;
        padding: 5px;
        height: 30px;
        border-radius: 10px;
        margin-top: 25px;
    }
</style>
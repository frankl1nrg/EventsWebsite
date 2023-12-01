<template>
    <div id = "pDiv">
        <button class = "pButton" onclick="window.location.href='/createEvent'">
            New Event
        </button>
        <button class = "pButton" onclick="window.location.href='/myEvents'">
            My Events
        </button>
        <button class = "pButton" onclick="window.location.href='/myReservations'">
            My Reservations
        </button>
    </div>
</template>

<style>
    .pButton{
        background-color: rgb(28, 40, 51);
        color: white;
        padding: 5px;
        height: 50px;
        width: 150px;
        border-radius: 10px;
        margin-left: 50% - 75px;
        margin-right: 50% - 75px;
    }
    .pDiv{
        display: flex;
        align-content: center;
    }
</style>
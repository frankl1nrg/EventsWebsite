<template>
    <div class = "menu">
        <div class = "center">
            <label>
                Event Name
            </label>
            <input class = "input">
        </div>
        <div class = "center">
            <label>
                Location
            </label>
            <input class = "input">
        </div>
        <div class = "center">
            <label>
                Ticket Levels
            </label>
            <input class = "input">
        </div>
        <div class = "center">
            <label>
                Ticket Prices
            </label>
            <input class = "input">
        </div>
        <button class = "loginButton">
            Update Event
        </button>
    </div>
</template>

<style>
    .menu{
        align-items: center;
        justify-content: center;
    }

    .input{
        background-color: rgb(255, 255, 255);
        color: black;
        padding: 5px;
        height: 30px;
        border-radius: 10px;
    }

    .loginButton{
        display: block;
        background-color: rgb(28, 40, 51);
        margin: auto;
        margin-top: 30px;
        color: white;
        height: 40px;
        width: 100px;
        border-radius: 10px;
    }

    .center{
        display: block;
        margin: auto;
        margin-top: 30px;
    }
</style>
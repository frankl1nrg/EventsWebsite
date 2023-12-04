<script setup>
    import { user } from '@/services/UserService';
    import {
 EventCreateForm 
} from './ui-components';
    import '@aws-amplify/ui-vue/styles.css'
</script>

<template setup>
    <div class ="not-logged-in" v-if="!user">
        <img src="/notLoggedInCreateEvent.png" alt="not logged in" class="center">
    </div>
    <div class="create-event" v-else>
        <EventCreateForm/>
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
        width: 50%;
        height: auto;
    }
</style>
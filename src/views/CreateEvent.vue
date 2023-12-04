<template>
    <div class ="not-logged-in">
        <img src="src/views/images/notLoggedInCreateEvent.png" alt="not logged in" class="center">
    </div>
</template>

<script>
    import { setupAuthListener, user } from '@/services/UserService';
    import EventCard from '../components/body/EventCard.vue';
    import { API, graphqlOperation } from 'aws-amplify';
    import { listEvents, listCategories } from '../graphql/queries';
    import { Amplify } from 'aws-amplify';
    import awsExports from '../aws-exports';

    //make it so that logged in users can create events
</script>

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
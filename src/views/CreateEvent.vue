<script setup>
    import { user } from '@/services/UserService';
    import { EventCreateForm } from '../components/body/';
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

</style>
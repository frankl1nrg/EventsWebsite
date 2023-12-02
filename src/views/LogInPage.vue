<script setup>
  import { Authenticator } from "@aws-amplify/ui-vue";
  import "@aws-amplify/ui-vue/styles.css";

  import { Amplify } from 'aws-amplify';
  import awsconfig from '../aws-exports.js';

  Amplify.configure(awsconfig);

  import { API, graphqlOperation } from 'aws-amplify';
  import { createEvent } from "../graphql/mutations"

//   async function createNewEvent() {
//   try {
//     const newEvent = await API.graphql(graphqlOperation(createEvent, { input: {
//       userid: "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
//       description: "Lorem ipsum dolor sit amet",
//       start_datetime: "1970-01-01T12:30:23.999Z",
//       end_datetime: "1970-01-01T12:30:23.999Z",
//       location: JSON.stringify([]), // Ensure the location format matches your schema
//       ticketAvailability: 1020,
//       imageURL: "http://example.com/image.jpg",
//       title: "Event Title",
//       category: "Event Category"
//     }}));

//     console.log('Event created:', newEvent);
//   } catch (error) {
//     console.error('Error creating new event:', error);
//   }
// }

//   createNewEvent();


</script>

<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>


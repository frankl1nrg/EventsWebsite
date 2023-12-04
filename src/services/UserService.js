// UserService.js
import { Auth, Hub, API, graphqlOperation } from 'aws-amplify';
import { createUser as createUserMutation } from '@/graphql/mutations'; 
import { ref } from 'vue';

// Reactive reference to hold the user state
export const user = ref(null);

// Function to check if the user is authenticated
export const checkUser = async () => {
  try {
      const currentUser = await Auth.currentAuthenticatedUser();
      user.value = currentUser;
      console.log(user);
  } catch (error) {
      user.value = null;
  }
  };

// Function to store user in the database
export const storeUserInDB = async () => {
  try {
    const userData = await Auth.currentAuthenticatedUser();
    // Access user attributes, assuming custom attributes are used
    const input = {
      id: userData.attributes.email, // Username as ID
      email: userData.attributes.email, // Email from attributes
      name: userData.attributes.name, // Custom attribute for name
      lastName: userData.attributes.family_name // Custom attribute for last name
    };

    console.log('User data:', input);

    const newUser = await API.graphql(graphqlOperation(createUserMutation, { input }));
    console.log('User stored in DB:', newUser);
  } catch (error) {
    console.error('Error storing user in DB:', error);
  }
};

// Function to set up the listener
export const setupAuthListener = (onAuthEvent) => {
    const listener = Hub.listen('auth', (data) => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signUp') {
        // Update the user state when the user signs in or signs up
        checkUser();
        // Store the user in the database when the user signs-ins
        storeUserInDB();
        // Send hub event to the parent component when the user signs in or signs up
        onAuthEvent(data.payload.event, data.payload.data);
      }
      if (data.payload.event === 'signUp') {
        console.log('User signed up:', data.payload.data);
      }
      if (data.payload.event === 'signOut') {
        // Update the user state when the user signs out
        console.log('User signed out');
        user.value = null;
      }
    });
  
    // Return a function that can be called to remove the listener
    return () => {
      listener(); // This will remove the listener
    };
  };
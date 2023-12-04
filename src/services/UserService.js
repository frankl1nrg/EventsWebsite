// UserService.js
import { Auth, Hub, API, graphqlOperation } from 'aws-amplify';
import { createUser as createUserMutation } from '@/graphql/mutations'; 
import { ref } from 'vue';

// Reactive reference to hold the user state
export const user = ref(null);

// Function to check if the user is authenticated
const checkUser = async () => {
  try {
      const currentUser = await Auth.currentAuthenticatedUser();
      user.value = currentUser;
      console.log(user);
  } catch (error) {
      user.value = null;
  }
  };

// Call the checkUser function to initialize the user state
checkUser();

// Function to store user in the database
export const storeUserInDB = async (userData) => {
  console.log('User data:', userData);
  
  // Create the user object to be stored in the database
  // The user object should have the following properties:
  // - userid: the username of the user
  // - name: the first name of the user
  // - lastName: the last name of the user
  // - email: the email of the user
  // - password: the password of the user (optional)
  // - createdAt: the current date and time (optional)
  // - updatedAt: the current date and time (optional)
  // - isAdmin: a boolean indicating whether the user is an admin (optional)
  // - isVerified: a boolean indicating whether the user is verified (optional)
  // - isDisabled: a boolean indicating whether the user is disabled (optional)
  // - isDeleted: a boolean indicating whether the user is deleted (optional)
  // - isBanned: a boolean indicating whether the user is banned (optional)
  // - isSuspended: a boolean indicating whether the user is suspended (optional)
  // - isLocked: a boolean indicating whether the user is locked (optional)

  const input = {
    userid: userData.userSub,
    email: userData.username,
  };

  try {
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
        onAuthEvent(data.payload.event, data.payload.data);
      }
      if (data.payload.event === 'signUp') {
        // Store the user in the database when the user signs up
        console.log('User signed up:', data.payload.data);
        storeUserInDB(data.payload.data);
      }
      if (data.payload.event === 'signOut') {
        // Update the user state when the user signs out
        user.value = null;
      }
    });
  
    // Return a function that can be called to remove the listener
    return () => {
      listener(); // This will remove the listener
    };
  };
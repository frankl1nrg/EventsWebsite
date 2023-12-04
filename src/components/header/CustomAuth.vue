<script setup>
import { Authenticator } from '@aws-amplify/ui-vue'
import '@aws-amplify/ui-vue/styles.css'

// Define the sign-up form fields
const signUpFormFields = {
  signUp: {
    name: {
      label: 'First Name',
      placeholder: 'Enter your First Name',
      isRequired: true,
      order: 1
    },
    family_name: {
      label: 'Last Name',
      placeholder: 'Enter your Last Name',
      isRequired: true,
      order: 2
    }
  }
}
</script>

<template>
    <authenticator :formFields="signUpFormFields">
    </authenticator>
</template>
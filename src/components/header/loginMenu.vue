
<script setup>
  import { Authenticator } from "@aws-amplify/ui-vue";
  import "@aws-amplify/ui-vue/styles.css";
  import { ref } from 'vue';
  import { Auth } from 'aws-amplify';

  const user = ref(null);
  
  const checkUser = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      user.value = currentUser;
    } catch (error) {
      // Not signed in
      user.value = null;
    }
  };

</script>

<template>
  <div v-if="isVisible" class="modal">
    <div class="modal-content">
      <authenticator>
        <template #default="{ signOut }">
          <button @click="signOut">Sign Out</button>
        </template>
      </authenticator>
    </div>
  </div>
</template>

<style scoped>
.modal {
  display: flex;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5); /* Black with opacity */
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  /* padding: 20px; */
  border: 1px solid #888;
  width: 80%;
  max-width: 500px; /* Could be responsive */
}
/* Add more styles for animations, positioning, etc. */
</style>
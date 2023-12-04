<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';
    import { SearchBar, PopUp, UserMenu, CustomAuth } from './';
    import { useRouter } from 'vue-router';
    import { Auth } from 'aws-amplify';
    import { setupAuthListener, user } from '@/services/UserService';

    const router = useRouter();
  
    const redirectToPath = (path) => {
        router.push(path);
    };

    const popupTrigger = ref({
        loginButtonTrigger: false,
        menuButtonTrigger: false
    });

    const TogglePopup = (trigger) => {
        popupTrigger.value[trigger] = !popupTrigger.value[trigger];
    };

    function handleSignOut() {
        Auth.signOut();
        user.value = null;
    };

    let removeAuthListener;

    onMounted(() => {
    removeAuthListener = setupAuthListener((eventType) => {
        if (eventType === 'signIn') {
            TogglePopup('loginButtonTrigger');
        }
    });
    });

    onUnmounted(() => {
    if (removeAuthListener) {
        removeAuthListener();
    }
    });

</script>

<template>
  <div class="top-bar">
    
    <div class="left-top-bar">
        <div class="logo-container">
            <h1 @click="redirectToPath('/')">TicketPort</h1>
        </div>
        <div class="welcome" >
            <p v-if="user">Welcome back, {{ user.attributes.name }}!</p>
        </div>
    </div>
    <div class="center-top-bar">
        <SearchBar class="search-bar"></SearchBar>
    </div>
    <div class="right-top-bar">
        <button v-if="!user" 
            @click="() => TogglePopup('loginButtonTrigger')">Login</button>
        <div class="logged-menu" v-else>
            <button @click="() => TogglePopup('menuButtonTrigger')">Menu</button>
            <button @click="handleSignOut()">Logout</button>
        </div>

    </div> 

    <!-- Login Popup -->
    <PopUp class="loginpopup" v-if="popupTrigger.loginButtonTrigger">
        <button class="popup-close" 
            @click="() => TogglePopup('loginButtonTrigger')"
        >Close</button>
        <!-- Content for login popup -->
        <CustomAuth>
        </CustomAuth>
    </PopUp>

    <!-- Menu Popup -->
    <PopUp class="usermenu" v-if="popupTrigger.menuButtonTrigger">
        <button class="popup-close" 
                @click="() => TogglePopup('menuButtonTrigger')"
        >Close</button>
        <!-- Content for menu popup -->
        <UserMenu
            :closePopup="() => TogglePopup('menuButtonTrigger')"
        />
    </PopUp>
  </div>
</template>

<style>

.top-bar {
  background-color: rgb(61, 93, 133);
  color: white;
  align-items: center;
  height: 11vh;
  display: grid;
  grid-template-columns: auto auto auto;
}



.left-top-bar{
    flex-basis: 20%;
    margin: 0 20px;
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
}

.welcome{
    margin: 0 auto;
}

.center-top-bar{
    flex-basis: 60%;
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
}

.search-bar{
    margin: auto;
}

.right-top-bar{
    flex-basis: 10%;
    width: 100%;
    display: flex;
    height: 100%;
}

.right-top-bar button{
    margin-left: auto;
}

button:hover {
    opacity: 0.5;
}

.right-top-bar .logged-menu {
    display: flex;
    margin: 0 auto;
}

</style>

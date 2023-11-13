<template>
  <div class="user-menu">
    <slot name="toggler">
      <!-- This will only show if there's no content provided for the "toggler" slot -->
      <button @click="toggle">User Menu</button>
    </slot>
    <UserMenuItems :isOpen="isOpen" @close-menu="close" />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import UserMenuItems from './UserMenuItems.vue';

export default {
  name: 'UserMenu',
  components: {
    UserMenuItems
  },
  setup() {
    const isOpen = ref(false);

    const toggle = () => {
      isOpen.value = !isOpen.value;
    };

    const close = () => {
      isOpen.value = false;
    };

    const onClickAway = (event) => {
      if (!event.target.closest('.user-menu')) {
        close();
      }
    };

    onMounted(() => {
      window.addEventListener('click', onClickAway);
    });

    onUnmounted(() => {
      window.removeEventListener('click', onClickAway);
    });

    return {
      isOpen,
      toggle,
      close
    };
  },
};
</script>

<style scoped>
/* Your styles for UserMenu.vue */
.menu-content {
  position: absolute;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 4px;
  width: 200px; /* Adjust as necessary */
  z-index: 1000;
  display: none; /* Initially hide the dropdown */
}
</style>

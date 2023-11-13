<template>
  <ul v-show="isOpen" class="dropdown-menu">
    <li @click="selectItem('my-events')">My Events</li>
    <li @click="selectItem('host-events')">Host Events</li>
    <li @click="selectItem('my-reservations')">My Reservations</li>
  </ul>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'UserMenuItems',
  props: {
    isOpen: Boolean
  },
  setup() {
    const router = useRouter();

    const selectItem = (action) => {
      let path;
      switch (action) {
        case 'my-events':
          path = '/my-events';
          break;
        case 'host-events':
          path = '/host-events';
          break;
        case 'my-reservations':
          path = '/my-reservations';
          break;
        default:
          return;
      }

      router.push(path);
      // Emit an event to parent to close the menu
      this.$emit('close-menu');
    };

    return { selectItem };
  }
};
</script>

<style scoped>
/* Style your dropdown items here */
.dropdown-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 4px;
  width: 200px; /* Adjust as necessary */
  z-index: 1000;
  display: block; /* Initially shows the dropdown */
}

.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #f2f2f2;
}
</style>

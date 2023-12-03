<template setup>
  <div class="pop-up">
    <div class="popup-inner">
      <slot/>
    </div>
  </div>

</template>

<script setup>
</script>

<style scoped>

.pop-up {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
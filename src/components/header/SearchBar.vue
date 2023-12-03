<template>
  <div class="search-bar">
    <input
      v-model="searchTerm"
      @keyup.enter="emitSearch"
      type="text"
      placeholder="Search events..."
      class="search-input"
    />
    <button @click="emitSearch" class="search-button">
      Search
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    emitSearch() {
      this.$emit('onSearch', this.searchTerm);
      this.searchTerm = ''; // Optional: Clear the search bar after search
    },
  },
};
</script>

<style>
  div{
    color: white;
  }
  input{
    border-radius: 10px;
  }
  button{
    background-color: rgb(28, 40, 51);
    color: white;
    padding: 5px;
    height: 30px;
    border-radius: 10px;
  }
</style>

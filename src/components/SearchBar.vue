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
/* Add styling for your search bar here */
.search-bar {
  /* Style your search bar container */
}

.search-input {
  /* Style your search input field */
}

.search-button {
  /* Style your search button */
}
</style>

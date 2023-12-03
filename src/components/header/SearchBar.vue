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

 .search-bar{
  display: flex;
  justify-content: space-between;
  /* background-color: orange; */
  height: 100%;
  align-items: center;
 }

  
  input{
    border-radius: 10px;
    height: 50%;
  }
  button{
    background-color: black;
    color: white;
    height: 40%;
    border-radius: 10px;
    border: none;
    margin: auto 0;
    width: 9vw;
    min-width: fit-content;
  }
</style>

<script setup>
import SearchBar from './SearchBar.vue'
import loginMenu from './loginMenu.vue'

const redirectToPath = (path) => {
      window.location.href = path
    };

</script>

<template>
  <div class="top-bar">
    
    <div class="left">
        <div class="logo-container">
            <h3 @click="redirectToPath('/')">TicketPort</h3>
        </div>
        <div id="category-container" >
            <select>
             <option value="">Categories</option>
            </select>
        </div>
    </div>
    <div class="mid">
        <SearchBar class="search-bar"></SearchBar>
    </div>
    <div class="right">
        <button @click="isVisible = true">Login</button>
      <loginMenu
        :isVisible = true
        @update:isVisible="$event"
      />
    </div> 

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



.left{
    flex-basis: 20%;
    margin: 0 20px;
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
}

#category-container{
    margin-left:auto ;
}

.mid{
    flex-basis: 60%;
    /* background-color: blue; */
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;

}

.search-bar{
    margin: auto;
}

.right{
    flex-basis: 10%;
    width: 100%;
    display: flex;
    height: 100%;
}

.right button{
    margin-left: auto;
}

</style>

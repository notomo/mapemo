<template>
  <div class="app-wrapper">
    <header>
      <h1>mapemo</h1>
      <input @input="onInput" v-model="query" class="search-form">
    </header>
    <div class="main-wrapper">
      <div class="map-column">
        <map-area :places="this.places"></map-area>
      </div>
      <div class="list-column">
        <list-area :places="filter()"></list-area>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./app.ts"></script>

<style scoped>

.app-wrapper {
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
}

header {
  color: white;
  background-color: gray;
  flex: 4;
}

.search-form {
  width: 25%;
}

.main-wrapper {
  display: flex;
  flex: 10;
}

.map-column {
  flex: 2;
}

.list-column {
  flex: 1;
}

</style>

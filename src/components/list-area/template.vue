<template>
  <div class="list-wrapper">
    <input @input="onInput" v-model="query" class="search-form">
    <div class="list">
      <list-item
        v-for="(place, key) in this.places"
        :key="key"
        :place="place"
        :is-selected="isPlaceSelected(place)"
        @item-clicked="onItemClicked"
      ></list-item>
    </div>
    <div class="end"></div>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped>

.list-wrapper {
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
}

.search-form {
  background-color: #f0f0f0;
  flex: 0 0 40px;
}

.list {
  display: flex;
  flex-flow: column nowrap;
  overflow-y: scroll;
}

</style>

<template>
  <div>
    <template v-if="!!this.places">
      <map-area :places="this.places"></map-area>
    </template>
    <list-area :places="filtered()"></list-area>
    <input @input="onInput" v-model="query" class="search-form">
  </div>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped>
.search-form {
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>

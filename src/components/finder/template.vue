<template>
  <div class="wrapper">
      <div>
        <template v-if="!!this.places">
          <map-area :places="this.places"></map-area>
        </template>
      </div>
      <div>
        <input @input="onInput" v-model="query" class="search-form">
        <list-area :places="filtered()"></list-area>
      </div>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped>

.search-form {
  width: 100%;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.wrapper > div {
  flex: 1 0 720px;
  max-width: 720px;
  padding: 1em;
}

</style>

<template>
  <div>
    <input @input="onInput" v-model="query" class="search-form">
    <div class="list">
      <list-item
        v-for="(place, key) in filter()"
        :key="key"
        :place="place"
      ></list-item>
    </div>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped>

.search-form {
  width: 100%;
}

.list {
  overflow: auto;
  height: 483px;
}

</style>

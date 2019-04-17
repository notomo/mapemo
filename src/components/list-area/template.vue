<template>
  <div class="list">
    <list-item
      v-for="(place, key) in this.places"
      :key="key"
      :place="place"
    ></list-item>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped>

.list {
  display: flex;
  flex-flow: column nowrap;
}

</style>

<template>
  <div>
    <ul>
      <li v-for="place in this.places">{{ place.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped></style>

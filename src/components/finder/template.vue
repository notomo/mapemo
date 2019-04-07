<template>
  <div>
    <template v-if="!!this.places">
      <map-area :places="this.places"></map-area>
    </template>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped></style>

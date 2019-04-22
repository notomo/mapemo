<template>
  <div id="map-wrapper">
    <div id="map" v-on:click="echoCenter()"></div>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped>

#map-wrapper {
  height: 100vh;
  width: 100%;
}

#map {
  height: 100vh;
  width: 100%;
}

</style>

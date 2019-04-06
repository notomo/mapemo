<template>
  <div>
    <div id="map"></div>
    <template v-if="!!this.map">
      <map-marker :position='{ lat: 35.6975644, lng: 139.7633811 }' :map="this.map"></map-marker>
    </template>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped>
#map {
  width: 100%;
  height: 500px;
}
</style>

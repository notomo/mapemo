<template>
  <div id="map-wrapper">
    <div id="map" v-on:click="echoCenter()"></div>
    <template v-if="!!this.map">
      <map-marker
        v-for="(place, key) in this.places"
        :key="key"
        :map="map"
        :position="place.position"
        :visible="place.visible"
      ></map-marker>
    </template>
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

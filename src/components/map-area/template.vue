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
  position: relative;
  width: 100%;
  padding-top: 70%;
  margin: auto;
}

#map {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}

</style>

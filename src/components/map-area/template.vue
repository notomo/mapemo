<template>
  <div>
    <div id="map" v-on:click="echoCenter()"></div>
    <template v-if="!!this.map">
      <map-marker
        v-for="place in this.places"
        :key="place.name"
        :map="map"
        :position="place.position"
        :visible="place.visible"
      ></map-marker>
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

<template>
  <div id="map-wrapper">
    <div id="map" v-on:click="echoCenter()"></div>
    <template v-if="!!this.map">
      <map-marker
        v-for="place in this.places"
        :key="place.id"
        :map="map"
        :place="place"
        :visible="place.visible"
        :selected-place="selectedPlace"
        @marker-updated="onMarkerUpdated"
      ></map-marker>
    </template>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped>

#map-wrapper {
  height: 100%;
  width: 100%;
  min-height: 60vh;
}

#map {
  height: 100%;
  width: 100%;
}

</style>

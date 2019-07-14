<template>
  <div id="map-wrapper">
    <div id="map" :class="{ hidden: !this.mapLoaded, fadein: this.mapLoaded }"></div>
    <template v-if="!!this.map">
      <map-marker
        v-for="place in this.places"
        :key="place.id"
        :map="map"
        :place="place"
        :visible="place.visible"
        :is-selected="isPlaceSelected(place)"
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
  background-color: #333333;
}

.hidden {
  visibility: hidden;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fadein {
  animation: fadein 0.6s;
}

#map {
  height: 100%;
  width: 100%;
  background-color: #333333;
}
</style>

<template>
  <div class="main-wrapper">
    <div class="map-column">
      <map-area
        :places="this.places"
        :selected-place="this.selectedPlace"
        @marker-updated="setSelectedPlace"
      ></map-area>
    </div>
    <div class="list-column">
      <list-area
        :places="this.filteredPlaces"
        :selected-place="this.selectedPlace"
        @item-clicked="setSelectedPlace"
        @selected-place-changed="setSelectedPlace"
        @places-changed="setPlaces"
      ></list-area>
    </div>
  </div>
</template>

<script lang="ts" src="./app.ts"></script>

<style scoped>
.main-wrapper {
  display: flex;
  flex-flow: column nowrap;
  background-color: #333333;
  color: #f2f2f2;
}

.map-column {
  flex: 2;
  height: 60vh;
}

.list-column {
  height: 40vh;
}

@media screen and (min-width: 1280px) {
  .main-wrapper {
    flex-flow: row nowrap;
  }

  .map-column {
    height: 100vh;
    width: 60vw;
  }

  .list-column {
    height: 100vh;
    width: 40vw;
  }
}
</style>

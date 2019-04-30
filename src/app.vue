<template>
  <div class="main-wrapper">
    <div class="map-column">
      <map-area
        :places="this.places"
        :selected-place="this.selectedPlace"
        @marker-clicked="setSelectedPlace"
      ></map-area>
    </div>
    <div class="list-column">
      <list-area
        :places="this.filteredPlaces"
        :selected-place="this.selectedPlace"
        @item-clicked="setSelectedPlace"
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
}

.map-column {
  flex: 2 0 60%;
  height: 60vh;
}

.list-column {
  flex: 1;
  background-color: #a0a0a0;
  height: 40vh;
}

@media screen and (min-width: 1280px) {
  .main-wrapper {
    flex-flow: row nowrap;
  }

  .map-column {
    height: 100vh;
  }

  .list-column {
    height: 100vh;
  }
}

</style>

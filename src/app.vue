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
        @search-form-changed="onSearchFormChanged"
      ></list-area>
    </div>
  </div>
</template>

<script lang="ts" src="./app.ts"></script>

<style scoped>

.main-wrapper {
  display: flex;
}

.map-column {
  flex: 2;
}

.list-column {
  flex: 1;
  background-color: gray;
}

</style>

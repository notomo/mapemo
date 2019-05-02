import Vue from "vue";
import MapArea from "./components/map-area/template.vue";
import ListArea from "./components/list-area/template.vue";
import { Place } from "./models/place";
import { Component } from "vue-property-decorator";

@Component({
  components: { MapArea, ListArea },
})
export default class App extends Vue {
  protected places: Place[] = [];
  protected selectedPlace: Place | null = null;

  get filteredPlaces(): Place[] {
    return this.places.filter(place => place.visible);
  }

  setSelectedPlace(place: Place | null) {
    if (
      this.selectedPlace !== null &&
      place !== null &&
      this.selectedPlace.name === place.name
    ) {
      this.selectedPlace = null;
      return;
    }
    this.selectedPlace = place;
  }

  setPlaces(places: Place[]) {
    this.places = places;
    if (this.selectedPlace === null) {
      return;
    }

    const selectedName = this.selectedPlace.name;
    if (
      this.places.filter(place => place.visible && place.name === selectedName)
        .length === 0
    ) {
      this.selectedPlace = null;
    }
  }
}

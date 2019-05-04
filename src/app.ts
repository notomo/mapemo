import Vue from "vue";
import MapArea from "./components/map-area/template.vue";
import ListArea from "./components/list-area/template.vue";
import { ViewPlace } from "./models/place";
import { Component } from "vue-property-decorator";

@Component({
  components: { MapArea, ListArea },
})
export default class App extends Vue {
  protected places: ViewPlace[] = [];
  protected selectedPlace: ViewPlace | null = null;

  get filteredPlaces(): ViewPlace[] {
    return this.places.filter(place => place.visible);
  }

  setSelectedPlace(place: ViewPlace | null) {
    if (
      this.selectedPlace !== null &&
      place !== null &&
      this.selectedPlace.equals(place)
    ) {
      this.selectedPlace = null;
      return;
    }
    this.selectedPlace = place;
  }

  setPlaces(places: ViewPlace[]) {
    this.places = places;
    if (this.selectedPlace === null) {
      return;
    }

    const equals = this.selectedPlace.equals;
    if (
      this.places.filter(place => place.visible && equals(place)).length === 0
    ) {
      this.selectedPlace = null;
    }
  }
}

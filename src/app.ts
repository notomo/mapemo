import Vue from "vue";
import MapArea from "./components/map-area/template.vue";
import ListArea from "./components/list-area/template.vue";
import { Place } from "./models/place";
import { Component } from "vue-property-decorator";
import Axios from "axios";
import { firebase } from "./firebase";

@Component({
  components: { MapArea, ListArea },
})
export default class App extends Vue {
  protected allPlaces: Place[] = [];
  protected places: Place[] = [];
  protected loaded = false;
  protected selectedPlace: Place | null = null;

  async mounted() {
    const file = firebase.storage().ref("data.json");
    const url = await file.getDownloadURL();
    const response = await Axios.create().get<Place[]>(url);
    this.allPlaces = response.data;
    this.places = this.allPlaces;
    this.loaded = true;
  }

  get filteredPlaces(): Place[] {
    return this.places.filter(place => place.visible);
  }

  setSelectedPlace(place: Place) {
    if (this.selectedPlace !== null && this.selectedPlace.name === place.name) {
      this.selectedPlace = null;
      return;
    }
    this.selectedPlace = place;
  }

  onSearchFormChanged(query: string) {
    const trimmedQuery = query.trim();
    this.places = this.allPlaces.map(place => {
      place.visible = place.name.includes(trimmedQuery);
      return place;
    });
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

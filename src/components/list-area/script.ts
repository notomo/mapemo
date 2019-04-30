import Vue from "vue";
import { Place } from "../../models/place";
import ListItem from "../list-item/template.vue";
import { Component, Prop } from "vue-property-decorator";
import VueScroll from "vuescroll";
import { firebase } from "./../../firebase";
import Axios from "axios";

@Component({
  components: { ListItem, VueScroll },
})
export default class ListArea extends Vue {
  protected query = "";
  protected allPlaces: Place[] = [];

  @Prop() places!: Place[];
  @Prop() selectedPlace!: Place | null;

  onInput() {
    const trimmedQuery = this.query.trim();
    const places = this.allPlaces.map(place => {
      place.visible = place.name.includes(trimmedQuery);
      return place;
    });
    this.$emit("places-changed", places);
  }

  onItemClicked(place: Place) {
    this.$emit("item-clicked", place);
  }

  isPlaceSelected(place: Place): boolean {
    return (
      this.selectedPlace !== null && place.name === this.selectedPlace.name
    );
  }

  async mounted() {
    const file = firebase.storage().ref("data.json");
    const url = await file.getDownloadURL();
    const response = await Axios.create().get<Place[]>(url);
    const places = response.data;
    this.allPlaces = places;
    this.$emit("places-changed", places);
  }
}

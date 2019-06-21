import Vue from "vue";
import { ViewPlace, Place, ViewPlaceImpl } from "../../models/place";
import ListItem from "../list-item/template.vue";
import ListLoader from "../list-loader/template.vue";
import { Component, Prop } from "vue-property-decorator";
import VueScroll from "vuescroll";
import { firebaseApp } from "./../../firebase";
import SearchIcon from "./search.svg";

@Component({
  components: { ListItem, VueScroll, SearchIcon, ListLoader },
})
export default class ListArea extends Vue {
  protected query = "";
  protected allPlaces: ViewPlace[] = [];
  protected loaded = false;
  @Prop() places!: ViewPlace[];
  @Prop() selectedPlace!: ViewPlace | null;

  onInput() {
    const words = this.query.trim().split(/\s+/);
    const places = this.allPlaces.map(place => {
      place.visible = words.reduce(
        (acc, word) => {
          return place.name.includes(word) && acc;
        },
        true as boolean
      );
      return place;
    });
    this.$emit("places-changed", places);

    if (this.selectedPlace === null) {
      return;
    }
    for (const place of places) {
      if (!place.visible && place.equals(this.selectedPlace)) {
        this.$emit("selected-place-changed", null);
        break;
      }
    }
  }

  onItemClicked(place: ViewPlace) {
    this.$emit("item-clicked", place);
  }

  async onLoadingMore() {
    const places = (await firebaseApp()
      .firestore()
      .collection("places")
      .get()).docs.map(doc => {
      const place = doc.data() as Place;
      return new ViewPlaceImpl(
        doc.id,
        place.name,
        place.position.latitude,
        place.position.longitude,
        true
      );
    });
    this.allPlaces = places;
    this.$emit("places-changed", places);
    const selectedPlaceId = this.$route.params.placeId;
    for (const place of places) {
      if (place.id === selectedPlaceId) {
        this.$emit("selected-place-changed", place);
        break;
      }
    }
    this.loaded = true;
  }

  isPlaceSelected(place: ViewPlace): boolean {
    return this.selectedPlace !== null && this.selectedPlace.equals(place);
  }

  async mounted() {
    const envPlaces = process.env.PLACES as any;
    const places = (envPlaces as {
      id: string;
      name: string;
      position: { lat: number; lng: number };
    }[]).map(place => {
      return new ViewPlaceImpl(
        place.id,
        place.name,
        place.position.lat,
        place.position.lng,
        true
      );
    });
    this.allPlaces = places;
    this.$emit("places-changed", places);
    const selectedPlaceId = this.$route.params.placeId;
    for (const place of places) {
      if (place.id === selectedPlaceId) {
        this.$emit("selected-place-changed", place);
        break;
      }
    }
  }
}

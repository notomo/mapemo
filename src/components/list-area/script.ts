import Vue from "vue";
import { ViewPlace, Place, ViewPlaceImpl } from "../../models/place";
import ListItem from "../list-item/template.vue";
import { Component, Prop } from "vue-property-decorator";
import VueScroll from "vuescroll";
import { firebaseApp } from "./../../firebase";
import SearchIcon from "./search.svg";

@Component({
  components: { ListItem, VueScroll, SearchIcon },
})
export default class ListArea extends Vue {
  protected query = "";
  protected allPlaces: ViewPlace[] = [];

  @Prop() places!: ViewPlace[];
  @Prop() selectedPlace!: ViewPlace | null;

  onInput() {
    const trimmedQuery = this.query.trim();
    const places = this.allPlaces.map(place => {
      place.visible = place.name.includes(trimmedQuery);
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

  isPlaceSelected(place: ViewPlace): boolean {
    return this.selectedPlace !== null && this.selectedPlace.equals(place);
  }

  async mounted() {
    const appScriptElement = document.createElement("script");
    appScriptElement.setAttribute("type", "text/javascript");
    appScriptElement.setAttribute(
      "src",
      "https://www.gstatic.com/firebasejs/5.10.1/firebase-app.js"
    );
    appScriptElement.async = true;

    const storageScriptElement = document.createElement("script");
    storageScriptElement.setAttribute("type", "text/javascript");
    storageScriptElement.setAttribute(
      "src",
      "https://www.gstatic.com/firebasejs/5.10.1/firebase-firestore.js"
    );
    storageScriptElement.async = true;

    appScriptElement.onload = async () => {
      document.head.appendChild(storageScriptElement);
    };

    storageScriptElement.onload = async () => {
      const places = (await firebaseApp()
        .firestore()
        .collection("places")
        .get()).docs.map(doc => {
        const place = doc.data() as Place;
        return new ViewPlaceImpl(doc.id, place.name, place.position, true);
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
    };

    document.head.appendChild(appScriptElement);
  }
}

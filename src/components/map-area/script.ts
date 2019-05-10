import Vue from "vue";
import { ViewPlace } from "../../models/place";
import MapMarker from "../map-marker/template.vue";
import { Component, Prop, Watch } from "vue-property-decorator";

const defaultLat = 35.6975644;
const defaultLng = 139.7633811;
const defaultZoom = 16;

@Component({
  components: { MapMarker },
})
export default class MapArea extends Vue {
  @Prop() places!: ViewPlace[];
  @Prop() selectedPlace!: ViewPlace | null;

  protected map: null | google.maps.Map = null;

  mounted() {
    const scriptElement = document.createElement("script");
    scriptElement.setAttribute("type", "text/javascript");
    scriptElement.setAttribute(
      "src",
      "https://maps.googleapis.com/maps/api/js?key=" +
        process.env.GOOGLE_MAP_API_KEY
    );
    scriptElement.async = true;
    scriptElement.onload = () => {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: {
          lat: Number(this.$route.query.lat) || defaultLat,
          lng: Number(this.$route.query.lng) || defaultLng,
        },
        mapTypeControl: false,
        zoom: Number(this.$route.query.zoom) || defaultZoom,
        gestureHandling: "greedy",
      });
    };
    document.head.appendChild(scriptElement);
  }

  onMarkerUpdated(place: ViewPlace | null) {
    this.$emit("marker-updated", place);
  }

  isPlaceSelected(place: ViewPlace): boolean {
    return this.selectedPlace !== null && this.selectedPlace.equals(place);
  }

  @Watch("selectedPlace")
  updateSelectedPlace(newPlace: ViewPlace | null, _oldPlace: ViewPlace | null) {
    if (newPlace === null) {
      this.$router.push("/");
    } else {
      this.$router.push(`/places/${newPlace.id}`);
    }
  }
}

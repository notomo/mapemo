import Vue from "vue";
import { Place } from "../../models/place";
import MapMarker from "../map-marker/template.vue";
import { Component, Prop } from "vue-property-decorator";

const defaultLat = 35.6975644;
const defaultLng = 139.7633811;
const defaultZoom = 16;

@Component({
  components: { MapMarker },
})
export default class MapArea extends Vue {
  @Prop() places!: Place[];
  @Prop() selectedPlace!: Place | null;

  protected map: null | google.maps.Map = null;

  echoCenter() {
    if (this.map === null) {
      return;
    }
    const center = this.map.getCenter();
    console.log({ lat: center.lat(), lng: center.lng() });
  }

  mounted() {
    const scriptElement = document.createElement("script");
    scriptElement.setAttribute("type", "text/javascript");
    scriptElement.setAttribute(
      "src",
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBq5DSPVJrF_7xlXTytsuCnhaqvvKWQhI4"
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
      });
    };
    document.head.appendChild(scriptElement);
  }

  onMarkerClicked(place: Place) {
    this.$emit("marker-clicked", place);
  }
}

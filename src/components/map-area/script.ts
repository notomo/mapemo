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
  protected beforeWidth: number = 0;

  echoCenter() {
    if (this.map === null) {
      return;
    }
    const center = this.map.getCenter();
    console.log({ lat: center.lat(), lng: center.lng() });
  }

  mounted() {
    this.map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: Number(this.$route.query.lat) || defaultLat,
        lng: Number(this.$route.query.lng) || defaultLng,
      },
      mapTypeControl: false,
      zoom: Number(this.$route.query.zoom) || defaultZoom,
    });

    this.beforeWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      if (
        (this.beforeWidth >= 1280 && window.innerWidth >= 1280) ||
        (this.beforeWidth <= 1280 && window.innerWidth <= 1280)
      ) {
        return;
      }
      this.beforeWidth = window.innerWidth;
      google.maps.event.trigger(this.map, "redraw");
    });
  }

  onMarkerClicked(place: Place) {
    this.$emit("marker-clicked", place);
  }
}

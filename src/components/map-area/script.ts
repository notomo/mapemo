import Vue from "vue";
import MapMarker from "../map-marker/template.vue";
import { Place } from "../../models/place";
import { Component, Prop } from "vue-property-decorator";

@Component({
  components: { MapMarker },
})
export default class MapArea extends Vue {
  @Prop() places!: Place[];

  protected map: null | google.maps.Map = null;

  echoCenter() {
    if (this.map === null) {
      return;
    }
    const center = this.map.getCenter();
    console.log({ lat: center.lat(), lng: center.lng() });
  }

  mounted() {
    this.map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 35.6975644, lng: 139.7633811 },
      mapTypeControl: false,
      zoom: 17,
    });
  }
}

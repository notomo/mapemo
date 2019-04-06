import Vue from "vue";
import MapMarker from "../map-marker/template.vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { MapMarker },
})
export default class MapArea extends Vue {
  protected map: null | google.maps.Map = null;

  mounted() {
    this.map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 35.6975644, lng: 139.7633811 },
      mapTypeControl: false,
      zoom: 17,
    });
  }
}

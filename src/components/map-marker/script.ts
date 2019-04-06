import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class MapMarker extends Vue {
  @Prop() map!: google.maps.Map;
  @Prop() position!: google.maps.LatLng;

  protected marker: null | google.maps.Marker = null;

  mounted() {
    this.marker = new google.maps.Marker({
      map: this.map,
      position: this.position,
    });
  }
}

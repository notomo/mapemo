import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class MapMarker extends Vue {
  @Prop() map!: google.maps.Map;
  @Prop() position!: google.maps.LatLng;
  @Prop() visible!: boolean;

  protected marker: null | google.maps.Marker = null;

  update() {
    if (this.marker === null) {
      return;
    }
    this.marker.setVisible(this.visible);
  }

  mounted() {
    this.marker = new google.maps.Marker({
      map: this.map,
      position: this.position,
      visible: this.visible,
    });
  }
}

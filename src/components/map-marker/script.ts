import Vue from "vue";
import { ViewPlace } from "../../models/place";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class MapMarker extends Vue {
  @Prop() map!: google.maps.Map;
  @Prop() place!: ViewPlace;
  @Prop() visible!: boolean;
  @Prop() selectedPlace!: ViewPlace | null;

  protected marker: null | google.maps.Marker = null;
  protected infoWindow: null | google.maps.InfoWindow = null;
  protected markerEventListener: null | google.maps.MapsEventListener = null;
  protected infoWindowEventListener: null | google.maps.MapsEventListener = null;

  mounted() {
    const marker = new google.maps.Marker({
      map: this.map,
      position: this.place.position,
      visible: this.visible,
    });
    this.marker = marker;

    const infoWindow = new google.maps.InfoWindow({
      content: this.place.name,
    });
    this.infoWindow = infoWindow;
    this.markerEventListener = this.marker.addListener("click", this.onClicked);
    this.infoWindowEventListener = this.infoWindow.addListener(
      "closeclick",
      this.onInfoWindowClosed
    );
  }

  beforeDestroy() {
    if (
      this.markerEventListener === null ||
      this.infoWindowEventListener === null
    ) {
      return;
    }
    google.maps.event.removeListener(this.markerEventListener);
    google.maps.event.removeListener(this.infoWindowEventListener);
  }

  onInfoWindowClosed() {
    this.$emit("marker-updated", null);
  }

  onClicked() {
    if (this.infoWindow === null || this.marker === null) {
      return;
    }
    this.infoWindow.open(this.map, this.marker);
    this.$emit("marker-updated", this.place);
  }

  @Watch("selectedPlace")
  updateSelectedPlace(newPlace: ViewPlace | null, _oldPlace: ViewPlace | null) {
    if (this.marker === null || this.infoWindow == null) {
      return;
    }
    if (
      newPlace === null ||
      !newPlace.visible ||
      !newPlace.equals(this.place)
    ) {
      this.infoWindow.close();
    } else {
      this.infoWindow.open(this.map, this.marker);
    }
  }

  @Watch("visible")
  updateVisible(newValue: boolean, oldValue: boolean) {
    if (this.marker === null) {
      return;
    }
    this.marker.setVisible(newValue);

    if (this.infoWindow === null) {
      return;
    }
    if (!newValue) {
      this.infoWindow.close();
    }
  }
}

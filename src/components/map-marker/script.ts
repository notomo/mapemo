import Vue from "vue";
import { Place } from "../../models/place";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class MapMarker extends Vue {
  @Prop() map!: google.maps.Map;
  @Prop() place!: Place;
  @Prop() visible!: boolean;
  @Prop() selectedPlace!: Place | null;

  protected marker: null | google.maps.Marker = null;
  protected infoWindow: null | google.maps.InfoWindow = null;
  protected eventListener: null | google.maps.MapsEventListener = null;

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
    this.eventListener = this.marker.addListener("click", this.onClicked);
  }

  beforeDestroy() {
    if (this.eventListener === null) {
      return;
    }
    google.maps.event.removeListener(this.eventListener);
  }

  onClicked() {
    if (this.infoWindow === null || this.marker === null) {
      return;
    }
    this.infoWindow.open(this.map, this.marker);
    this.$emit("marker-clicked", this.place);
  }

  @Watch("selectedPlace")
  updateSelectedPlace(newPlace: Place | null, oldPlace: Place | null) {
    if (this.marker === null || this.infoWindow == null) {
      return;
    }
    if (
      newPlace === null ||
      !newPlace.visible ||
      newPlace.name !== this.place.name
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

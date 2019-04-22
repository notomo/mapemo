import Vue from "vue";
import { Place } from "../../models/place";
import { Component, Prop, Watch } from "vue-property-decorator";

const defaultLat = 35.6975644;
const defaultLng = 139.7633811;
const defaultZoom = 16;

@Component
export default class MapArea extends Vue {
  @Prop() places!: Place[];
  @Prop() selectedPlace!: Place | null;

  protected map: null | google.maps.Map = null;
  protected markers: MapMarker[] = [];

  echoCenter() {
    if (this.map === null) {
      return;
    }
    const center = this.map.getCenter();
    console.log({ lat: center.lat(), lng: center.lng() });
  }

  mounted() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: Number(this.$route.query.lat) || defaultLat,
        lng: Number(this.$route.query.lng) || defaultLng,
      },
      mapTypeControl: false,
      zoom: Number(this.$route.query.zoom) || defaultZoom,
    });
    this.map = map;

    this.markers = this.places.map(p => {
      return new MapMarker(map, p);
    });
  }

  @Watch("selectedPlace")
  updateSelectedPlace(newPlace: Place, oldPlace: Place) {
    for (const key in this.markers) {
      const place = this.places[key];
      const isSelected = newPlace.visible && place.name == newPlace.name;
      this.markers[key].update(place, isSelected);
    }
  }

  @Watch("places")
  updatePlaces(newPlaces: Place[], oldPlaces: Place[]) {
    for (const key in this.markers) {
      const place = this.places[key];
      const isSelected =
        this.selectedPlace !== null && place.name == this.selectedPlace.name;
      this.markers[key].update(place, isSelected);
    }
  }
}

class MapMarker {
  private readonly marker: google.maps.Marker;
  private readonly infoWindow: google.maps.InfoWindow;

  constructor(private readonly map: google.maps.Map, private place: Place) {
    this.marker = new google.maps.Marker({
      map: this.map,
      position: this.place.position,
      visible: this.place.visible,
    });

    this.infoWindow = new google.maps.InfoWindow({
      content: this.place.name,
    });
  }

  update(place: Place, isSelected: boolean) {
    this.place = place;
    this.marker.setVisible(place.visible);

    if (isSelected) {
      this.infoWindow.open(this.map, this.marker);
    } else {
      this.infoWindow.close();
    }
  }
}

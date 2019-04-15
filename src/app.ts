import Vue from "vue";
import MapArea from "./components/map-area/template.vue";
import ListArea from "./components/list-area/template.vue";
import { Place } from "./models/place";
import { Component } from "vue-property-decorator";

@Component({
  components: { MapArea, ListArea },
})
export default class App extends Vue {
  protected query = "";
  protected places: Place[] = places;

  onInput() {
    this.places = places.map(place => {
      place.visible = place.name.includes(this.query);
      return place;
    });
  }

  filter(): Place[] {
    return this.places.filter(place => place.name.includes(this.query));
  }
}

const places = [
  {
    name: "hoge",
    position: { lat: 35.6946888, lng: 139.7616235 },
    visible: true,
  },
  {
    name: "foo",
    position: { lat: 35.6960163, lng: 139.7640851 },
    visible: true,
  },
  {
    name: "aaa",
    position: { lat: 35.6966253, lng: 139.7612301 },
    visible: true,
  },
  {
    name: "aaa",
    position: { lat: 35.6966253, lng: 139.7612301 },
    visible: true,
  },
  {
    name: "aaa",
    position: { lat: 35.6966253, lng: 139.7612301 },
    visible: true,
  },
  {
    name: "aaa",
    position: { lat: 35.6966253, lng: 139.7612301 },
    visible: true,
  },
  {
    name: "aaa",
    position: { lat: 35.6966253, lng: 139.7612301 },
    visible: true,
  },
  {
    name: "aaa",
    position: { lat: 35.6966253, lng: 139.7612301 },
    visible: true,
  },
  {
    name: "aaa",
    position: { lat: 35.6966253, lng: 139.7612301 },
    visible: true,
  },
  {
    name: "aaa",
    position: { lat: 35.6966253, lng: 139.7612301 },
    visible: true,
  },
  {
    name: "aaa",
    position: { lat: 35.6966253, lng: 139.7612301 },
    visible: true,
  },
  {
    name: "aaa",
    position: { lat: 35.6966253, lng: 139.7612301 },
    visible: true,
  },
  {
    name: "aaa",
    position: { lat: 35.6966253, lng: 139.7612301 },
    visible: true,
  },
  {
    name: "aaa",
    position: { lat: 35.6966253, lng: 139.7612301 },
    visible: true,
  },
  {
    name: "aaa",
    position: { lat: 35.6966253, lng: 139.7612301 },
    visible: true,
  },
  {
    name: "aaa",
    position: { lat: 35.6966253, lng: 139.7612301 },
    visible: true,
  },
];

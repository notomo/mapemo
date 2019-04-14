import Vue from "vue";
import { Place } from "../../models/place";
import ListItem from "../list-item/template.vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { ListItem },
})
export default class ListArea extends Vue {
  protected query = "";
  protected places: Place[] = places;

  onInput() {
    this.places = places.map(place => {
      place.visible = place.name.includes(this.query);
      return place;
    });
    this.$emit("search", this.places);
  }

  filter(): Place[] {
    return this.places.filter(place => place.name.includes(this.query));
  }

  mounted() {
    this.$emit("search", places);
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

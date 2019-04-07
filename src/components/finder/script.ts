import Vue from "vue";
import MapArea from "../map-area/template.vue";
import { Place } from "../../models/place";
import { Component } from "vue-property-decorator";

@Component({
  components: { MapArea },
})
export default class Finder extends Vue {
  protected places: Place[] = [];

  mounted() {
    this.places = [
      { name: "hoge", position: { lat: 35.6975644, lng: 139.7633811 } },
      { name: "foo", position: { lat: 35.69757, lng: 139.76339 } },
      { name: "aaa", position: { lat: 35.69755, lng: 139.76335 } },
    ];
  }
}

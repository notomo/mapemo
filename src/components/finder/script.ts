import Vue from "vue";
import MapArea from "../map-area/template.vue";
import ListArea from "../list-area/template.vue";
import { Place } from "../../models/place";
import { Component } from "vue-property-decorator";

@Component({
  components: { MapArea, ListArea },
})
export default class Finder extends Vue {
  protected places: Place[] = [];

  onSearch(places: Place[]) {
    this.places = places;
  }
}

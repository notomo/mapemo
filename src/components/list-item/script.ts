import Vue from "vue";
import { Place } from "../../models/place";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class ListItem extends Vue {
  @Prop() place!: Place;

  select(place: Place) {}

  onClick() {
    this.$emit("item-clicked", this.place);
  }
}

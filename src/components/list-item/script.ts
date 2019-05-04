import Vue from "vue";
import { ViewPlace } from "../../models/place";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class ListItem extends Vue {
  @Prop() place!: ViewPlace;
  @Prop() isSelected!: boolean;

  onClick() {
    this.$emit("item-clicked", this.place);
  }
}

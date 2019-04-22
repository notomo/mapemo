import Vue from "vue";
import { Place } from "../../models/place";
import ListItem from "../list-item/template.vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  components: { ListItem },
})
export default class ListArea extends Vue {
  @Prop() places!: Place[];

  onItemClicked(place: Place) {
    this.$emit("item-clicked", place);
  }
}

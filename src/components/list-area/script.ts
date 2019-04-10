import Vue from "vue";
import { Place } from "../../models/place";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class ListArea extends Vue {
  @Prop() places!: Place[];
}

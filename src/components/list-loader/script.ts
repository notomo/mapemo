import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class ListLoader extends Vue {
  protected loading = false;
  @Prop() loaded!: boolean;

  async load() {
    this.loading = true;
    this.$emit("load");
  }
}

<template>
  <div class="wrapper">
    <div
      @click="onClick"
      class="item"
      :class="{ active: this.isSelected }"
    >
      {{ this.place.name }}
    </div>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped>

.wrapper {
  display: table;
}

.item {
  background-color: white;
  border: solid 1px #333;
  vertical-align: middle;
  display: table-cell;
  padding: 10px;
}

.active {
  background-color: #ea4335;
  color: white;
}

</style>

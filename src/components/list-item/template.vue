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
  background-color: #f0f0f0;
  border: solid 1px #333;
  vertical-align: middle;
  display: table-cell;
  padding: 10px 20px;
  width: 100vw;
}

.active {
  background-color: #ffd1b6;
}

</style>

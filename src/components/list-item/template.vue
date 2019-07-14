<template>
  <div class="wrapper">
    <div @click="onClick" class="item" :class="{ active: this.isSelected }">
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
  border: solid 1px #a6a6a6;
  vertical-align: middle;
  display: table-cell;
  padding: 10px 20px;
  width: 100vw;
}

.active {
  background-color: #ffd1b6;
  color: #333333;
}
</style>

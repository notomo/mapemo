<template>
  <div class="wrapper">
    <div class="item">{{ this.place.name }}</div>
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

</style>

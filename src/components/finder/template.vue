<template>
  <div class="wrapper">
      <div>
        <template v-if="!!this.places">
          <map-area :places="this.places"></map-area>
        </template>
      </div>
      <div>
        <list-area @search="onSearch"></list-area>
      </div>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped>

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.wrapper > div {
  flex: 1 0 720px;
  max-width: 720px;
  padding: 1em;
}

</style>

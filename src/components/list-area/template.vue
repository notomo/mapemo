<template>
  <div class="list-column-wrapper">
    <input @input="onInput" v-model="query" class="search-form">
    <vue-scroll class="scroll-area" :ops="{ bar: { background: '#000000', opacity: 0.4 }}">
      <div class="list">
        <list-item
          v-for="(place, key) in this.places"
          :key="key"
          :place="place"
          :is-selected="isPlaceSelected(place)"
          @item-clicked="onItemClicked"
        ></list-item>
      </div>
    </vue-scroll>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped>

.list-column-wrapper {
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
}

.search-form {
  background-color: #f0f0f0;
  flex: 0 0 40px;
}

.scroll-area {
  overflow-y: scroll;
}

.list {
  display: flex;
  flex-flow: column nowrap;
}

</style>

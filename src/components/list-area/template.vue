<template>
  <div class="list-column-wrapper">
    <div class="form-wrapper">
      <search-icon class="search-icon"></search-icon/>
      <input @input="onInput" v-model="query" class="search-form" size="1" aria-label="Search for memo">
    </div>
    <vue-scroll class="scroll-area" :ops="{ bar: { background: '#000000', opacity: 0.4 }}">
      <main class="list">
        <list-item
          v-for="(place, key) in this.places"
          :key="key"
          :place="place"
          :is-selected="isPlaceSelected(place)"
          @item-clicked="onItemClicked"
        ></list-item>
      </main>
    </vue-scroll>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped>

.list-column-wrapper {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
}

.form-wrapper {
  flex: 0 0 60px;
	background: white;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  border: solid 1px #333;
}

.search-icon {
  margin: 10px;
  align-self: center;
  flex-grow: 0;
  flex-basis: 32px;
  height: 100%;
  min-width: 32px;
}

.search-form {
  border: none;
  outline: none;
  flex-grow: 1;
  width: 100%;
}

.scroll-area {
  overflow-y: scroll;
}

.list {
  display: flex;
  flex-flow: column nowrap;
}

</style>

<template>
  <div class="list-column-wrapper">
    <div class="form-wrapper">
      <search-icon class="search-icon"></search-icon>
      <input
        @input="onInput"
        v-model="query"
        class="search-form"
        size="1"
        aria-label="Search for memo"
      />
    </div>
    <vue-scroll
      class="scroll-area"
      :ops="{ bar: { background: '#000000', opacity: 0.4 } }"
    >
      <main class="list">
        <list-item
          v-for="place in this.places"
          :key="place.id"
          :place="place"
          :is-selected="isPlaceSelected(place)"
          @item-clicked="onItemClicked"
        ></list-item>
        <list-loader :loaded="this.loaded" @load="onLoadingMore"></list-loader>
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
  flex: 0 0 45px;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  border: solid 1px #a6a6a6;
}

.search-icon {
  margin: 8px;
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
  color: #f2f2f2;
  background-color: #333333;
}

.scroll-area {
  overflow-y: scroll;
}

.list {
  display: flex;
  flex-flow: column nowrap;
}
</style>

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
        <template v-if="this.loading">
          <div class="more balls">
            <div class="ball-container">
              <div class="ball"></div>
            </div>
            <div class="ball-container">
              <div class="ball"></div>
            </div>
            <div class="ball-container">
              <div class="ball"></div>
            </div>
          </div>
        </template>
        <template v-else-if="!this.loaded">
          <div class="more" @click.once="onMoreItemClicked">
            More
          </div>
        </template>
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
  background: white;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  border: solid 1px #333;
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
}

.scroll-area {
  overflow-y: scroll;
}

.list {
  display: flex;
  flex-flow: column nowrap;
}

.more {
  background-color: #ffffff;
  border: solid 1px #333;
  width: 100%;
  display: flex;
  padding: 11px 20px;
  justify-content: center;
  align-items: center;
  min-height: 40px;
}

@keyframes loading {
  0%,
  100% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.6;
  }
}

.ball-container {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
}

.ball {
  border-radius: 50%;
  background-color: #000000;
  width: 100%;
  height: 100%;
  transform-origin: 50% 50%;
  animation: loading 1s -0.6s infinite linear;
}

.balls .ball-container:nth-child(2) .ball {
  animation-delay: -0.3s;
}
.balls .ball-container:nth-child(3) .ball {
  animation-delay: 0s;
}
</style>

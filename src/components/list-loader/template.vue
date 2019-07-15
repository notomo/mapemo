<template>
  <div>
    <template v-if="this.loading && !this.loaded">
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
      <div class="more" @click.once="load">
        もっと見る
      </div>
    </template>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped>
.more {
  border: solid 2px #e5b767;
  width: 100%;
  display: flex;
  padding: 11px 20px;
  justify-content: center;
  align-items: center;
  min-height: 42px;
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
  background-color: #f2f2f2;
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

<template>
  <div id="app">
    <GameBoard :boxes="boxes"></GameBoard>
    <GameStatus></GameStatus>
  </div>
</template>

<script>
import GameBoard from "@/components/board.vue";
import GameStatus from "@/components/game-status.vue";
import { store } from "@/store/store";
import testBoxes from "@/data/boxes";

export default {
  name: "app",
  store,
  components: {
    GameBoard,
    GameStatus
  },
  data() {
    return {
      boxes: testBoxes
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

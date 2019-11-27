<template>
  <div id="app">
    <GameControls></GameControls>
    <GameBoard></GameBoard>
    <GameStatus></GameStatus>
    <GameList></GameList>
  </div>
</template>

<script>
import GameBoard from "@/components/board.vue";
import GameStatus from "@/components/game-status.vue";
import GameControls from "@/components/game-controls.vue";
import GameList from "@/components/game-list.vue";
import { store } from "@/store/store";

export default {
  name: "app",
  store,
  components: {
    GameBoard,
    GameStatus,
    GameControls,
    GameList
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

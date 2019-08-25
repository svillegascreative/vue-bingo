<template>
  <div id="app">
    <GameBoard :boxes="boxes"></GameBoard>
  </div>
</template>

<script>
import GameBoard from "./components/board.vue";
import testBoxes from "@/data/boxes.js";

export default {
  name: "app",
  components: {
    GameBoard
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

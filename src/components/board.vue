<template>
  <div class="game-board">
    <GameBox v-for="box in gameBoxes" :key="box.id" :box-content="box.text"></GameBox>
  </div>
</template>

<script>
import GameBox from "./box.vue";
import testBoxes from "@/data/boxes.js";

export default {
  name: "GameBoard",
  components: {
    GameBox
  },
  data() {
    return {
      gameBoxes: testBoxes
    };
  }
};
</script>

<style lang="scss" scoped>
.game-board {
  border: 1px solid;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
}
</style>
<template>
  <div class="game-board">
    <GameBox v-for="box in gameBoxes" :key="box.id" :boxContent="box.text"></GameBox>
  </div>
</template>

<script>
import GameBox from "./box.vue";

export default {
  name: "GameBoard",
  components: {
    GameBox
  },
  data() {
    return {
      gameBoxes: [
        { id: 1, text: "box 1" },
        { id: 2, text: "box 2" },
        { id: 3, text: "box 3" },
        { id: 4, text: "box 4" },
        { id: 5, text: "box 5" },
        { id: 6, text: "box 6" },
        { id: 7, text: "box 7" },
        { id: 8, text: "box 8" },
        { id: 9, text: "box 9" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.game-board {
  border: 1px solid;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
</style>
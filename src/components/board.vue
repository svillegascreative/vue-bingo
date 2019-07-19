<template>
  <div class="game-board">
    <GameBox v-for="box in gameBoxes" :key="box.boxContent"></GameBox>
  </div>
</template>

<script>
import GameBox from "./box.vue";

export default {
  name: "GameBoard",
  components: {
    GameBox
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
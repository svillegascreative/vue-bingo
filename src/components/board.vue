<template>
  <div class="game-board">
    <GameBox v-for="(box, index) in boxes" :key="index" :box-id="index" :box-content="box"></GameBox>
  </div>
</template>

<script>
import GameBox from "./box.vue";

export default {
  name: "GameBoard",
  props: {
    boxes: Array
  },
  components: {
    GameBox
  }
};
</script>

<style lang="scss" scoped>
.game-board {
  border: 1px solid;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 80vw;
  margin: 0 auto;

  &::before {
    content: "";
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  & > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
}
</style>
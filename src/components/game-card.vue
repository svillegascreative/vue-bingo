<template>
  <div class="game-card">
    <h1 class="game-name">
      {{this.$store.state.currentTheme.name}}
      <span class="screen-reader">Bingo</span>
      <div class="bingo-letters" aria-hidden="true">
        <span>B</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span>O</span>
      </div>
    </h1>
    <div class="game-board">
      <GameBox
        v-for="(box, index) in this.$store.state.gameBoxes"
        :key="index"
        :box-id="index"
        :box-content="box"
      ></GameBox>
    </div>
  </div>
</template>

<script>
import GameBox from "./box.vue";

export default {
  name: "GameCard",
  components: {
    GameBox
  }
};
</script>

<style lang="scss" scoped>
.game-card {
  width: 90vw;
  max-width: 700px;
  margin: 1em auto;
  background-color: var(--color-bg-second);
  padding: 1em;
  box-shadow: 2px 2px 10px darkgrey;
}

.game-name {
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
}

.bingo-letters {
  display: flex;

  span {
    flex: 1;
    font-family: var(--font-fun);
    font-weight: normal;
    font-size: 2em;
  }
}

.game-board {
  border: 1px solid;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-auto-flow: column;
  width: 100%;

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
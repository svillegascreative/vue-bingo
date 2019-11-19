<template>
  <div>
    <p v-if="this.$store.state.isWon">You win!</p>
    <button @click="resetGame">Reset Game</button>
  </div>
</template>

<script>
export default {
  name: "GameStatus",
  methods: {
    resetGame() {
      this.$store.commit("clearBoxesPlayed");
      this.$store.commit("unsetWin");
    }
  }
};
</script>

<style>
</style>
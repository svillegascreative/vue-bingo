<template>
  <div>
    <button @click="clearBoard">Clear Board</button>
    <button @click="resetBoard">New Board</button>
  </div>
</template>

<script>
export default {
  name: "GameControls",
  methods: {
    clearBoard() {
      if (this.$store.state.boxesPlayed.length != 0) {
        this.$store.commit("clearBoxesPlayed");
      }
      if (this.$store.state.isWon) {
        this.$store.commit("unsetWin");
      }
    },
    resetBoard() {
      this.clearBoard();
      this.$store.commit("setGameBoxes");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
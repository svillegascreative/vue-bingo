<template>
  <button @click="resetGame">Reset Game</button>
</template>

<script>
export default {
  name: "GameStatus",
  props: {
    initialGame: Array,
    boxesPlayed: Array
  },
  methods: {
    resetGame: function() {
      this.$store.commit("clearBoxesPlayed");
    },
    checkForWin: function() {}
  }
};
</script>

<style>
</style>
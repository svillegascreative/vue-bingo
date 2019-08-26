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
  data() {
    return {
      currentGame: []
    };
  },
  watch: {
    boxesPlayed: function() {
      console.log("played: " + this.boxesPlayed);
    }
  },
  methods: {
    resetGame: function() {},
    checkForWin: function() {}
  }
};
</script>

<style>
</style>
<template>
  <div class="game-status">
    <p v-if="this.$store.state.isWon">Winner!</p>
  </div>
</template>

<script>
export default {
  name: "GameStatus"
};
</script>

<style lang="scss" scoped>
.game-status {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 3em;
}
</style>
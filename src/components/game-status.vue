<template>
  <div>
    <p v-if="this.$store.state.isWon">You win!</p>
  </div>
</template>

<script>
export default {
  name: "GameStatus"
};
</script>

<style>
</style>
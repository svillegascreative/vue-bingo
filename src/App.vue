<template>
  <div id="app">
    <GameStatus></GameStatus>
    <GameControls></GameControls>
    <GameCard></GameCard>
    <GameList></GameList>
  </div>
</template>

<script>
import GameCard from "@/components/game-card.vue";
import GameStatus from "@/components/game-status.vue";
import GameControls from "@/components/game-controls.vue";
import GameList from "@/components/game-list.vue";
import { store } from "@/store/store";

export default {
  name: "app",
  store,
  components: {
    GameCard,
    GameStatus,
    GameControls,
    GameList
  }
};
</script>

<style lang="scss">
#app {
  // keep this (even if empty) to apply custom variables set on `:root`
}
</style>

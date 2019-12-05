<template>
  <div id="app">
    <GameStatus></GameStatus>
    <GameControls></GameControls>
    <GameCard></GameCard>
    <GameList v-if="screenUnder(bp.large)"></GameList>
  </div>
</template>

<script>
import GameCard from "@/components/game-card.vue";
import GameStatus from "@/components/game-status.vue";
import GameControls from "@/components/game-controls.vue";
import GameList from "@/components/game-list.vue";
import { store } from "@/store/store";
import { mapGetters } from "vuex";
import bp from "@/data/breakpoints";

export default {
  name: "app",
  store,
  components: {
    GameCard,
    GameStatus,
    GameControls,
    GameList
  },
  data() {
    return {
      bp
    };
  },
  computed: {
    ...mapGetters(["screenAtLeast", "screenUnder"])
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.$store.commit("setScreenWidth", window.innerWidth);
    });
  }
};
</script>

<style lang="scss">
#app {
  // keep this (even if empty) to apply custom variables set on `:root`
}
</style>

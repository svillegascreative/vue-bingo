<template>
  <ol class="game-list">
    <li v-for="(box, index) in gameBoxes" :key="index">
      <label>
        <input
          type="checkbox"
          :value="index"
          :checked="isChecked(index)"
          :disabled="isWon"
          @change="toggleBox(index)"
        />
        {{box}}
      </label>
    </li>
  </ol>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "GameList",
  computed: {
    ...mapState(["boxesPlayed", "gameBoxes", "isWon"])
  },
  methods: {
    toggleBox(id) {
      this.$store.dispatch("toggleBox", id);
    },
    isChecked(index) {
      return this.boxesPlayed.includes(index) ? true : false;
    }
  }
};
</script>

<style lang="scss" scoped>
.game-list {
  li {
    margin-bottom: 1em;
  }
}
</style>
<template>
  <ol class="game-list">
    <li v-for="(box, index) in this.$store.state.gameBoxes" :key="index">
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
export default {
  name: "GameList",
  computed: {
    isWon() {
      return this.$store.state.isWon;
    }
  },
  methods: {
    toggleBox(id) {
      this.$store.dispatch("toggleBox", id);
    },
    isChecked(index) {
      return this.$store.state.boxesPlayed.includes(index) ? true : false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
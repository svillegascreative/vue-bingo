<template>
  <div>
    <select v-model="selectedTheme">
      <option disabled value>Select theme</option>
      <option v-for="(name, index) of themeNames" :key="index" :value="name">{{ name }}</option>
    </select>
    <button @click="clearBoard">Clear Board</button>
    <button @click="resetBoard">New Board</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GameControls",
  data() {
    return {
      themes: [],
      selectedTheme: ""
    };
  },
  computed: {
    themeNames() {
      return this.themes.map(t => t.name);
    }
  },
  watch: {
    selectedTheme() {
      this.$store.commit("setCurrentTheme", this.selectedTheme);
    }
  },
  methods: {
    fetchThemes() {
      axios.get("themes.json").then(response => (this.themes = response.data));
    },
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
  },
  created() {
    this.fetchThemes();
  }
};
</script>

<style lang="scss" scoped></style>

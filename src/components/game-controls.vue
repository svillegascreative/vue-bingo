<template>
  <div>
    <select v-model="selectedTheme">
      <option disabled value>Select theme</option>
      <option v-for="(name, index) of themeNames" :key="index" :value="name">{{ name }}</option>
    </select>
    <button @click="setBoard" :disabled="hasNoTheme">New Board</button>
    <button @click="clearGame" :disabled="isClearBoard" class="clearBtn">Clear Board</button>
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
    },
    hasNoTheme() {
      return this.selectedTheme ? false : true;
    },
    isClearBoard() {
      return this.$store.state.boxesPlayed.length == 0 ? true : false;
    },
    isWon() {
      return this.$store.state.isWon;
    }
  },
  watch: {
    isWon() {
      let clearBtn = document.querySelector(".clearBtn");
      clearBtn.focus();
    }
  },
  methods: {
    fetchThemes() {
      axios.get("themes.json").then(response => (this.themes = response.data));
    },
    setTheme() {
      if (this.$store.state.currentTheme.name != this.selectedTheme) {
        for (let t of this.themes) {
          if (t.name == this.selectedTheme) {
            this.$store.commit("setCurrentTheme", t);
          }
        }
      }
    },
    clearGame() {
      if (this.$store.state.boxesPlayed.length != 0) {
        this.$store.commit("clearBoxesPlayed");
      }
      if (this.$store.state.isWon) {
        this.$store.commit("unsetWin");
      }
    },
    setBoard() {
      this.clearGame();
      this.setTheme();
      this.$store.commit("setGameBoxes");
    }
  },
  created() {
    this.fetchThemes();
  }
};
</script>

<style lang="scss" scoped></style>

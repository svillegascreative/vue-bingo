<template>
  <div class="game-box">
    <input
      type="checkbox"
      :id="boxIdentifier"
      :value="boxId"
      :checked="isChecked"
      :disabled="this.$store.state.isWon"
      @change="toggleBox(boxId)"
    />
    <label :for="boxIdentifier">{{boxDisplay}}</label>
  </div>
</template>

<script>
import bp from "@/data/breakpoints";

export default {
  name: "GameBox",
  props: {
    boxId: Number,
    boxContent: String
  },
  computed: {
    boxIdentifier() {
      return "box-" + this.boxId;
    },
    boxDisplay() {
      return this.$store.getters.screenUnder(bp.large)
        ? this.boxId + 1
        : this.boxContent;
    },
    isChecked() {
      return this.$store.state.boxesPlayed.includes(this.boxId) ? true : false;
    }
  },
  methods: {
    toggleBox(id) {
      this.$store.dispatch("toggleBox", id);
    }
  }
};
</script>

<style lang="scss" scoped>
.game-box {
  position: relative;
  height: 100%;
  width: 100%;
  border: 1px solid;
  overflow: hidden;
}

input[type="checkbox"] {
  opacity: 0;

  & + label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    border: 5px solid transparent;
  }

  &:checked + label {
    background: var(--active-color);
  }

  &:focus + label {
    border-color: var(--focus-color);
  }
}
</style>
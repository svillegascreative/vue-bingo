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
    <label :for="boxIdentifier">{{boxContent}}</label>
  </div>
</template>

<script>
export default {
  name: "GameBox",
  props: {
    boxId: Number,
    boxContent: String
  },
  computed: {
    boxIdentifier: function() {
      return "box-" + this.boxId;
    },
    isChecked: function() {
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
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

input[type="checkbox"] {
  display: none;

  & + label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // z-index: -1;
  }

  &:checked + label {
    background: yellow;
  }
}
</style>
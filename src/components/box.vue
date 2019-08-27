<template>
  <div class="game-box">
    <input type="checkbox" :id="boxIdentifier" :value="boxId" @change="changeBox(boxId)" />
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
    }
  },
  methods: {
    changeBox(id) {
      this.$store.commit("updateBoxesPlayed", id);
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
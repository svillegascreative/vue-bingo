<template>
  <div class="game-box">{{boxContent}}</div>
</template>

<script>
export default {
  name: "GameBox",
  props: {
    boxContent: String
  }
};
</script>

<style lang="scss" scoped>
.game-box {
  height: 100%;
  width: 100%;
  border: 1px solid;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
</style>
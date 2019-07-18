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
  height: 100px;
  width: 100px;
  border: 1px solid;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
</style>
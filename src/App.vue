<template>
	<div id="app">
		<GameControls></GameControls>
		<GameBoard></GameBoard>
		<GameStatus></GameStatus>
	</div>
</template>

<script>
import axios from "axios";
import GameBoard from "@/components/board.vue";
import GameStatus from "@/components/game-status.vue";
import GameControls from "@/components/game-controls.vue";
import { store } from "@/store/store";

export default {
	name: "app",
	store,
	components: {
		GameBoard,
		GameStatus,
		GameControls
	},
	methods: {
		fetchThemes() {
			axios
				.get("themes.json")
				.then(response => this.$store.commit("setThemes", response.data));
		}
	},
	created() {
		this.fetchThemes();
	}
};
</script>

<style lang="scss">
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>

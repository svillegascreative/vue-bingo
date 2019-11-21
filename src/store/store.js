import Vue from "vue";
import Vuex from "vuex";
import wins from "@/data/wins";
import shuffle from "@/helpers/shuffle.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		themes: [],
		gameBoxes: [],
		boxesPlayed: [],
		isWon: false
	},
	mutations: {
		setThemes(state, arr) {
			state.themes = arr;
		},
		setGameBoxes(state) {
			let shuffledPool = shuffle(baseball.slice());
			// select only 25 values
			state.gameBoxes = shuffledPool.slice(0, 25);
		},
		addBox(state, id) {
			state.boxesPlayed.push(id);
		},
		removeBox(state, id) {
			state.boxesPlayed.splice(state.boxesPlayed.indexOf(id), 1);
		},
		clearBoxesPlayed(state) {
			state.boxesPlayed = [];
		},
		setWin(state) {
			state.isWon = true;
		},
		unsetWin(state) {
			state.isWon = false;
		}
	},
	actions: {
		toggleBox({ commit, dispatch }, id) {
			if (this.state.boxesPlayed.includes(id)) {
				commit("removeBox", id);
			} else {
				commit("addBox", id);
				dispatch("checkForWin");
			}
		},
		checkForWin({ commit }) {
			for (let win of wins) {
				if (win.every(v => this.state.boxesPlayed.includes(v))) {
					commit("setWin");
					break;
				}
			}
		}
	},
	getters: {
		themeNames: state => state.themes.map(t => t.name)
	}
});

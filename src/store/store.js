import Vue from "vue";
import Vuex from "vuex";
import wins from "@/data/wins";
import shuffle from "@/helpers/shuffle.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		screenWidth: null,
		currentTheme: {},
		gameBoxes: [],
		boxesPlayed: [],
		isWon: false
	},
	mutations: {
		setScreenWidth(state, value) {
			state.screenWidth = value;
		},
		setCurrentTheme(state, theme) {
			state.currentTheme = theme;
		},
		setGameBoxes(state) {
			let shuffledOptions = shuffle(state.currentTheme.options.slice());
			// select only 25 values
			state.gameBoxes = shuffledOptions.slice(0, 25);
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
	getters: {
		screenAtLeast(state) {
			return w => state.screenWidth >= w;
		},
		screenUnder(state) {
			return w => state.screenWidth < w;
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
	}
});

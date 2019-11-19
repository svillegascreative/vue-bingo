import Vue from "vue";
import Vuex from "vuex";
import wins from "@/data/wins";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		boxesPlayed: [],
		isWon: false
	},
	mutations: {
		addBox(state, id) {
			state.boxesPlayed.push(id);
		},
		removeBox(state, id) {
			state.boxesPlayed.splice(state.boxesPlayed.indexOf(id), 1);
		},
		clearBoxesPlayed(state) {
			state.boxesPlayed = [];
		},
		setToWon(state) {
			state.isWon = true;
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
					commit("setToWon");
					break;
				}
			}
		}
	},
	getters: {
		boxesPlayed: state => state.boxesPlayed,
		isWon: state => state.isWon
	}
});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		boxesPlayed: []
	},
	mutations: {
		updateBoxesPlayed(state, id) {
			if (state.boxesPlayed.includes(id)) {
				state.boxesPlayed.splice(state.boxesPlayed.indexOf(id), 1);
			} else {
				state.boxesPlayed.push(id);
			}
		}
	},
	getters: {
		boxesPlayed: state => state.boxesPlayed
	}
});

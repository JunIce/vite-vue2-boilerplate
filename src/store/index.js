import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    increase({ commit }) {
      commit("increment");
    },
    decrease({ commit }) {
      commit("decrement");
    },
  },
});

export default store;

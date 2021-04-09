import Vuex from "vuex";
import token from "../token";

const store = new Vuex.Store({
  state: {
    token: token.get(),
  },
  mutations: {
    add(state, value) {
      state.token = value;
    },
    del(state) {
      state.token = null;
    },
  },
  getters: {
    isToken: (state) => {
      return state.token && state.token.length > 0;
    },
  },
});

export default store;

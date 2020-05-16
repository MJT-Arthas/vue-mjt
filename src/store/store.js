import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    addN(state, n) {
      state.count += n;
    },
    sub(state) {
      state.count -= 1;
    }
  },
  actions: {
    addAsync(context, n) {
      setTimeout(() => {
        context.commit("addN", n);
      }, 1000);
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit("sub");
      }, 1000);
    }
  },
  getters: {
    showNum(state) {
      return `当前数量为${state.count}`;
    }
  },
  modules: {}
});

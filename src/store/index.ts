import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

console.log(localStorage.getItem('user'));

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user') || 'null')
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload;
      localStorage.setItem('user', JSON.stringify(payload));
    }
  },
  actions: {
  },
  modules: {
  }
});

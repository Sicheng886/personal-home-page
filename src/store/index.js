import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hotspotPos: 0,
    projectPos: 0,
    aboutPos: 0
  },
  mutations: {
    getHotspotPos(state, val) {
      state.hotspotPos = val;
    },
    getProjectPos(state, val) {
      state.projectPos = val;
    },
    getAboutPos(state, val) {
      state.aboutPos = val;
    }
  },
  actions: {},
  modules: {}
});

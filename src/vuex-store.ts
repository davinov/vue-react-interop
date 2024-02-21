import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store<{ displayedElement: null | 'searchable-list' }>({
  state: {
    displayedElement: null,
  },

  mutations: {
    showSearchableList(state) {
      state.displayedElement = 'searchable-list';
    },
    resetSidePanel(state) {
      state.displayedElement = null;
    },
  },
});

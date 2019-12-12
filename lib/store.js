

const settingsDefault = {
  component: null,
  props: null
};


const state = {
  isOpen: false,
  settings: settingsDefault
};

const mutations = {

  _close (state) {
    state.isOpen = false;
  },

  _open (state) {
    state.isOpen = true;
  },

  _toggle (state) {
    console.log("Toggling.");
    state.isOpen = !state.isOpen;
  },

  _setSettings (state, s) {
    state.settings = s;
  },

  _resetSettings (state) {
    state.settings = {};
  }
};

const actions = {

  close ({ commit }) {
    commit("_close");
  },

  closeAndReset ({ commit }) {
    commit("_close");
    commit("_resetSettings");
  },

  open ({ commit }) {
    commit("_open");
  },

  toggle ({ commit }) {
    commit("_toggle");
  },

  openWith ({ commit }, settings) {
    commit("_setSettings", settings);
    commit("_open");
  },

  setComponent ({ commit, state }, c) {
    const settings = { ...state.settings, ...{ component: c } };
    commit("_setSettings", settings);
  },

  setProps ({ commit }, p) {
    const settings = { ...state.settings, ...{ props: p } };
    commit("_setSettings", settings);
  },

  resetSettings ({ commit }) {
    commit("_resetSettings");
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};

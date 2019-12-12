

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
    state.isOpen = !state.isOpen;
  },

  _setSettings (state, s) {
    state.settings = s;
  },

  _setComponentProps (state, p) {
    state.settings.props = p;
  }
};


const actions = {

  close ({ commit }) {
    commit("_close");
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

  setComponentProps ({ commit }, p) {
    commit("_setComponentProps", p);
  }
};


export default {
  namespaced: true,
  state,
  mutations,
  actions
};

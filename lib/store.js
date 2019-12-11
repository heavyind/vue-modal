

const state = {
  open: false,
  settings: null
};


const mutations = {

  _hide (state) {
    state.open = false;
  },

  _show (state) {
    state.open = true;
  },

  _toggle (state) {
    state.open = !state.open;
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
    commit("_hide");
  },

  show ({ commit }) {
    commit("_show");
  },

  toggle ({ commit }) {
    commit("_toggle");
  },

  showWith ({ commit }, settings) {
    commit("_setSettings", settings);
    commit("_show");
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

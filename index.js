import modalStore from "./lib/store";
import VueModal from "./lib/modal";
import e from "./util/e";


const cfgDefault = {
  store: null,
  scopeName: "modal",
  storeName: "modal",
  componentName: "modal"
};


export default {

  install(Vue, _cfg) {

    if (typeof _cfg === "undefined") { throw new Error(e.cfgUndefined); }

    if (typeof _cfg.store === "undefined") { throw new Error(e.cfgStoreUndefined); }

    const cfg = { ...cfgDefault, ..._cfg };

    cfg.store.registerModule(cfg.storeName, modalStore);

    Vue.component(cfg.componentName, VueModal);
    Vue.mixin({
      computed: {
        [cfg.scopeName] () {
          return {
            open: this.$store.state.modal.open,
            show: () => { this.$store.dispatch(`${cfg.storeName}/show`); },
            toggle: () => { this.$store.dispatch(`${cfg.storeName}/toggle`); }
          };
        }
      }
    });
  }
};

import modalStore from "./lib/store";
import e from "./util/e";
import createModalMixin from "./lib/mixin";


const cfgDefault = {
  store: null,
  scopeName: "modal",
  storeName: "modal"
};


export default {

  install(Vue, _cfg) {

    if (typeof _cfg === "undefined") { throw new Error(e.cfgUndefined); }

    if (typeof _cfg.store === "undefined") { throw new Error(e.cfgStoreUndefined); }

    const cfg = { ...cfgDefault, ..._cfg };

    cfg.store.registerModule(cfg.storeName, modalStore);
    
  },

  // For convenience
  createModalMixin
};

import modalStore from "./lib/store";
import createModalMixin from "./lib/mixin";
import * as e from "./util/e";
import { cfgDefault } from "./util/config";


export default {

  install(Vue, _cfg) {

    if (typeof _cfg === "undefined") { throw new Error(e.cfgUndefined); }

    if (typeof _cfg.store === "undefined") { throw new Error(e.cfgStoreUndefined); }

    const cfg = { ...cfgDefault, ..._cfg };

    cfg.store.registerModule(cfg.storeNamespace, modalStore);

    if (cfg.mixin) {
      Vue.mixin(createModalMixin(cfg));
    }
    
  },

  // For convenience
  createModalMixin
};

import modalStore from "./lib/store";
import e from "./util/e";


const cfgDefault = {
  store: null,
  mixin: false,
  scopeName: "modal",
  storeName: "modal"
};


export default {

  install(Vue, _cfg) {

    if (typeof _cfg === "undefined") { throw new Error(e.cfgUndefined); }

    if (typeof _cfg.store === "undefined") { throw new Error(e.cfgStoreUndefined); }

    const cfg = { ...cfgDefault, ..._cfg };

    cfg.store.registerModule(cfg.storeName, modalStore);
    
    if (cfg.mixin) {
      Vue.mixin({
        computed: {
          [cfg.scopeName] () {
            return {
              open: this.$store.state.modal.open,
              settings: this.$store.state.modal.settings,
              component: this.$store.state.modal.settings.component,
              props: this.$store.state.modal.settings.props,
              show: () => { this.$store.dispatch(`${cfg.storeName}/show`); },
              showWith: (c) => { this.$store.dispatch(`${cfg.storeName}/showWith`, c); },
              hide: () => { this.$store.dispatch(`${cfg.storeName}/hide`); },
              toggle: () => { this.$store.dispatch(`${cfg.storeName}/toggle`); },
              setComponentProps: (p) => { this.$store.dispatch(`${cfg.storeName}/setComponentProps`, p); }
            };
          }
        }
      });
    }
  }
};

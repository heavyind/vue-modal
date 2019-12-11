import modalStore from "./lib/store";
import createVueModal from "./lib/modal";
import e from "./util/e";


const cfgDefault = {
  store: null,
  baseDir: "@/component/modal/",
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

    Vue.component(cfg.componentName, createVueModal(Vue, cfg));
    Vue.mixin({
      computed: {
        [cfg.scopeName] () {
          return {
            open: this.$store.state.modal.open,
            show: () => { this.$store.dispatch(`${cfg.storeName}/show`); },
            showWith: (c) => { this.$store.dispatch(`${cfg.storeName}/showWith`, c); },
            toggle: () => { this.$store.dispatch(`${cfg.storeName}/toggle`); },
            setComponentProps: (p) => { this.$store.dispatch(`${cfg.storeName}/setComponentProps`, p); }
          };
        }
      }
    });
  }
};

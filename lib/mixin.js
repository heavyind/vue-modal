import { cfgDefault } from "../util/config";


export default (_cfg) => {

  const cfg = { ...cfgDefault, ..._cfg };

  return {
    computed: {
      [`$${cfg.mixinNamespace}`] () {
        return {
          isOpen: this.$store.state[cfg.storeNamespace].isOpen,
          settings: this.$store.state[cfg.storeNamespace].settings,
          component: this.$store.state[cfg.storeNamespace].settings.component,
          props: this.$store.state[cfg.storeNamespace].settings.props,
          open () {
            this.$store.dispatch(`${cfg.storeNamespace}/open`);
          },
          openWith: (s) => {
            this.$store.dispatch(`${cfg.storeNamespace}/openWith`, s);
          },
          close: () => {
            this.$store.dispatch(`${cfg.storeNamespace}/close`);
          },
          toggle: () => {
            this.$store.dispatch(`${cfg.storeNamespace}/toggle`);
          },
          setComponentProps: (s) => {
            this.$store.dispatch(`${cfg.storeNamespace}/setComponentProps`, p);
          }
        };
      }
    }
  };
};



const style = {
  "background-color": "lime"
};


export default (Vue, cfg) => {
  return {
    name: "VueModal",
    computed: {
      component () {
        return this.$store.state[cfg.storeName].settings.component;
      },
      props () {
        return this.$store.state[cfg.storeName].settings.props;
      }
    },
    render (h) {
      if (this.modal.open) {
        return h("div", {style}, [h(this.component, { props: this.props })]);
      } 
    }
  };
};



export default (_storeName) => {

  const storeName = typeof _storeName === "undefined"
    ? "modal"
    : _storeName;

  return {
    computed: {
      isOpen () {
        return this.$store.state[storeName].isOpen;
      },
      settings () {
        return this.$store.state[storeName].settings;
      },
      component () {
        return this.$store.state[storeName].settings.component;
      },
      props () {
        return this.$store.state[storeName].settings.props;
      }
    },
    methods: {
      open () {
        this.$store.dispatch(`${storeName}/open`);
      },
      openWith (s) {
        this.$store.dispatch(`${storeName}/openWith`, s);
      },
      close () {
        this.$store.dispatch(`${storeName}/close`);
      },
      toggle () {
        this.$store.dispatch(`${storeName}/toggle`);
      },
      setComponentProps (p) {
        this.$store.dispatch(`${storeName}/setComponentProps`, p);
      }
    }
  };
};

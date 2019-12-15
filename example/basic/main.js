var store = new Vuex.Store({});
Vue.use(VueModal, { store, mixin: true });

var Modal = {
  template: `
    <div class='modal' v-if='$modal.isOpen'>
      <button @click='$modal.close'>Close</button>
      <component
        v-if="$modal.component"
        :is="$modal.component"
        v-bind="$modal.props">
      </component>
    </div>`,
  mounted () {
    console.log(this.$modal.component);
  }
};

var Dummy = {
  props: ["greeting"],
  template: "<div>{{ greeting }}! I am an example modal component.</div>"
};

new Vue({
  el: "#app",
  store,
  components: { Modal, Dummy }
});

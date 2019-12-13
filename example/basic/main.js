var store = new Vuex.Store({});

var Modal = {
  template: `
    <div class='modal' v-if='$modal.isOpen'>
      <button @click='$modal.close'>Close</button>
      <component v-if="$modal.component" :is='$modal.component'></component>
    </div>`
};

Vue.use(VueModal, { store, mixin: true });

new Vue({
  el: "#app",
  store,
  components: { Modal }
});

<template>
  <div
    v-if="$modal.isOpen"
    class="modal"
    role="dialog"
    aria-modal="true">
    <button aria-label="close dialog" @click="$modal.close">Close</button>
    <component v-if="$modal.component" :is="$modal.component"></component>
  </div>
</template>

<script>
import { createModalMixin } from "@heavyind/vue-modal";


export default {
  name: "Modal",
  mixins: [createModalMixin()]
};
</script>

<style lang="sass">


.modal
  position: fixed
  color: white
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  background: rgba(black, 0.8)

</style>

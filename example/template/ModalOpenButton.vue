<template>
  <button
    @click="$modal.openWith(componentSettings)"
    :aria-label="ariaLabel">
      <slot></slot>
  </button>
</template>

<script>

export default {
  props: {
    component: {
      // For example, `Navigation.vue`
      type: Object,
      required: false,
      default: () => null
    },
    props: {
      type: Object,
      required: false,
      default: () => null
    },
    ariaLabel: {
      // For example, `"open navigation"`
      type: String,
      required: true
    }
  },
  computed: {
    componentSettings () {
      return {
        component,
        props
      };
    }
  }
};
</script>

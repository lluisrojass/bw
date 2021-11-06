<template>
  <component
    :is="`h${$props.size}`"
    :class="[
      'text',
      textSizeClass,
      textVariantClass,
      $style.heading
    ]"
  >
    <slot />
  </component>
</template>
<script lang="ts">
import textTransformMixin from '~/mixins/TextTransform';
import textSizeMixin from '~/mixins/TextSize';

export default {
  mixins: [
    textSizeMixin,
    textTransformMixin
  ],
  props: {
    size: {
      required: false,
      type: Number,
      default: 1,
      validator: size => size >= 1 && size <= 6
    }
  }
};
</script>
<style lang="scss" module>
  .heading {
    letter-spacing: 0.03rem;
    margin-bottom: 0.125rem;
  }
</style>

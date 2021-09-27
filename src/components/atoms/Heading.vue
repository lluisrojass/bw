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
<script>
import textSizeMixin from '../../mixins/TextSize';
import textTransformMixin from '../../mixins/TextTransform';

export default {
  mixins: [textSizeMixin, textTransformMixin],
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

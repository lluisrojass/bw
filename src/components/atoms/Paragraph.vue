<template>
  <p
    :class="[
      'text',
      textSizeClass,
      textVariantClass,
      $style.p,
    ]"
  >
    <slot />
  </p>
</template>
<script lang="ts">
import textSizeMixin from '~/mixins/TextSize';
import textTransformMixin from '~/mixins/TextTransform';

export default {
  mixins: [textSizeMixin, textTransformMixin]
};
</script>
<style lang="scss" module>
  .p {
    margin: 0;
  }
</style>

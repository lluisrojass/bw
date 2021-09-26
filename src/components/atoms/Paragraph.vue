<template>
  <p
    :class="[
      'text',
      textClassSize,
      $style.p,
      textVariantClass
    ]"
  >
    <slot />
  </p>
</template>
<script>
import textSizeMixin from '~/mixins/TextSize'
import textTransformMixin from '~/mixins/TextTransform'

export default {
  mixins: [textSizeMixin, textTransformMixin]
}
</script>
<style lang="scss" module>
  .p {
    margin: 0;
  }
</style>

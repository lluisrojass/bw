<template>
  <NuxtLink
    :to="to"
    :tab-index="$props.disabled ? -1 : 0"
    :class="[
      'text',
      $style.link,
      textClassSize,
      textVariantClass,
      $props.disabled
        ? $style['link--disabled']
        : null,
      $props.isForText
        ? $style['link--has-text']
        : null,
    ]"
  >
    <slot />
  </NuxtLink>
</template>
<script>
import textSizeMixin from '~/mixins/TextSize'
import textTransformMixin from '~/mixins/TextTransform'

export default {
  mixins: [textSizeMixin, textTransformMixin],
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    isForText: {
      type: Boolean,
      required: false,
      default: true
    },
    to: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" module>
  .link {
    text-decoration: none;
    border-bottom: 2px solid transparent;

    &--disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    &--has-text {
      &:hover {
        border-bottom: 2px solid $fg-cream;
      }
    }

    &:active,
    &:focus {
      outline-color: $fg-accent;
    }
  }

  .link--disabled.link--text {
    border-bottom: 2px solid $fg-cream;
  }
</style>

<template>
  <component
    :is="!isExternal ? 'NuxtLink' : 'a'"
    :to="!isExternal ? to : undefined"
    :href="isExternal ? to : undefined"
    :rel="isExternal ? 'noopener noreferrer nofollow' : undefined"
    :target="isExternal ? 'blank' : undefined"
    :tabIndex="$props.disabled ? -1 : 0"
    :class="[
      'text',
      $style.link,
      textSizeClass,
      textVariantClass,
      $props.disabled
        ? $style['link--disabled']
        : '',
      $props.isForText
        ? $style['link--has-text']
        : '',
    ]"
  >
    <slot />
  </component>
</template>
<script>

import textSizeMixin from '~/mixins/TextSize';
import textTransformMixin from '~/mixins/TextTransform';

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
  },
  data(props) {
    return {
      isExternal: props.to.indexOf('http') === 0
    };
  }
};
</script>
<style lang="scss" module>
  .link {
    text-decoration: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;

    &--disabled {
      cursor: auto;
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

  .link--disabled.link--has-text {
    border-bottom: 2px solid $fg-cream;
  }
</style>

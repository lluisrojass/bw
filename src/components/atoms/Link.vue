<template>
  <NuxtLink
    :to="to"
    :tabIndex="$props.disabled ? -1 : 0"
    :class="[
      'text',
      $style.link,
      sizeClass,
      $props.disabled 
        ? $style['link--disabled']
        : null,
      $props.isForText
        ? $style['link--text']
        : null,
      $props.uppercase 
        ? 'text--uppercase'
        : null
    ]"
  >
    <slot />
  </NuxtLink>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      validator: (prop) => [
        'large',
        'small',
        'none'
      ].indexOf(prop) !== -1,
      required: false,
      default: 'small',
    },
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
    uppercase: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: true
    }
  },
  data(props) {
    let sizeClass = ''; 
    if (props.size === 'large') {
      sizeClass = 'text--large';
    } else if (props.size === 'small') {
      sizeClass = 'text--small';
    }
    return {
      sizeClass,
    };
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

    &--text {
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

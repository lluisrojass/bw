<template>
  <NuxtLink
    :to="to"
    :class="[$style.link, $style[sizeClass]]"
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
      default: 'none',
    },
    to: {
      type: String,
      required: true
    }
  },
  data(props) {
    let sizeClass = ''; 
    if (props.size === 'large') {
      sizeClass = 'link--large';
    } else if (props.size === 'small') {
      sizeClass = 'link--small';
    }
    return {
      sizeClass
    };
  }
}
</script>
<style lang="scss" module>
  .link {
    color: $fg-cream;
    text-decoration: none;
    outline-color: $fg-accent;

    &--large {
      @include font-large;
      @include font-variant-bold;
    }

    &--small {
      @include font-small;
      @include font-variant-regular;
    }

    &:active {
      outline-style: solid;
    }
  }
</style>

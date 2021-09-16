<template>
  <p :class="[$style.p, $style[sizeClass]]">
    <slot />
  </p>
</template>
<script>
  export const SIZES = {
    SMALL: 0x0,
    LARGE: 0x1,
    NONE: 0x2
  };

  const CLASS_MAP = {
    [SIZES.SMALL]: 'p--small',
    [SIZES.LARGE]: 'p--large',
  };

  export default {
    props: {
      size: {
        type: Number,
        validator: (prop) => (
          Object.values(SIZES).indexOf(prop) !== -1
        ),
        required: false,
        default: SIZES.NONE
      }
    },
    data(props) {
      return {
        sizeClass: CLASS_MAP[props.size]
      };
    }
  }
</script>
<style lang="scss" module>
  .p {
    @include font-variant-regular;
    @include font-medium;
    color: $fg-cream;
    margin: 0;

    &--large {
      @include font-large;
    }

    &--small {
      @include font-small;
    }
  }
</style>
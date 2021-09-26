<template>
  <p :class="[
    'text',
    $style.p, 
    sizeClass,
    $props.uppercase ? 'text--uppercase' : ''
  ]">
    <slot />
  </p>
</template>
<script>
  export const SIZES = {
    SMALL: 0x0,
    LARGE: 0x1,
    MEDIUM: 0x3,
    NONE: 0x2
  };

  const CLASS_MAP = {
    [SIZES.SMALL]: 'text--small',
    [SIZES.LARGE]: 'text--large',
    [SIZES.MEDIUM]: 'text--medium',
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
      },
      uppercase: {
        type: Boolean,
        required: false,
        default: false,
      },
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
    margin: 0;
  }
</style>
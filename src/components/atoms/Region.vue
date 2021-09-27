<template>
  <div
    :class="[
      $style.region,
      $style[classStyle]
    ]"
  >
    <slot />
  </div>
</template>
<script>

export const TYPES = {
  NO_VERTICAL_MARGIN: 0x1,
  LAST: 0x2,
  NONE: 0x0
};

const REGION_CLASS_NAMES = {
  [TYPES.NO_VERTICAL_MARGIN]: 'region--no-vertical-margin',
  [TYPES.LAST]: 'region--last'
};

export default {
  props: {
    type: {
      type: Number,
      validator: prop => Object.values(TYPES).includes(prop),
      required: false,
      default: TYPES.NONE
    }
  },
  data(props) {
    return {
      classStyle: REGION_CLASS_NAMES[props.type]
    };
  }
};
</script>
<style module lang="scss">
  .region {
    width: 100%;
    max-width: $max-width;
    margin: 3rem auto 0;
    padding: 0 2rem;

    @include min-medium {
      margin-top: 4rem;
      padding: 0 4rem;
    }

    @include min-large {
      margin-top: 4rem;
      padding: 0 2rem;
    }

    &--no-vertical-margin {
      margin-top: 0px;
      @include min-medium {
        margin-top: 0px;
      }
      @include min-large {
        margin-top: 0px;
      }
    }

    &--last {
      padding-bottom: 6rem;
    }
  }
</style>

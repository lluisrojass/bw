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
export default {
  props: {
    type: {
      type: String,
      validator: prop => [
        'last',
        'no-vertical-margin',
        'none'
      ].includes(prop),
      required: false,
      default: 'none'
    }
  },
  data(props) {
    return {
      classStyle: props.type !== 'none'
        ? `region--${props.type}`
        : undefined
    }
  }
}
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

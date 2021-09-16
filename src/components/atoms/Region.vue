<template>
  <div :class="[$style.region, $style[classStyle]]">
    <slot />
  </div>
</template>
<script>
  export default {
    data(props) {
      return {
        classStyle: props.type !== 'none'
          ? `region--${props.type}` 
          : undefined
      };
    },
    props: {
      type: {
        type: String,
        validator: (prop) => ['last', 'no-vertical-margin', 'none'].indexOf(prop) !== -1,
        required: false,
        default: 'none'
      }
    }
  }
</script>
<style module lang="scss">
  .region {
    width: 100%;
    max-width: $max-width;
    margin: 2rem auto 0;
    padding: 0 1.5rem;

    @include min-medium {
      margin-top: 3.5rem;
      padding: 0 1rem;
    }
    @include min-large {
      margin-top: 4rem;
      padding: 0;
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
      margin-bottom: 6rem;
    }
  }
</style>
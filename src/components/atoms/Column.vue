<template>
  <div :class="[
    $style.col, 
    $style[`col--sm-${$props.small}-8`], 
    $style[`col--md-${$props.medium}-12`], 
    $style[`col--lg-${$props.large}-12`], 
  ]">
    <slot />
  </div>
</template>
<script>
  export default {
    props: {
      small: {
        type: Number,
        validator: (num) => num >= 1 && num <= 8,
        required: true,
      },
      medium: {
        type: Number,
        validator: (num) => num >= 1 && num <= 12,
        required: true,
      },
      large: {
        type: Number,
        validator: (num) => num >= 1 && num <= 12,
        required: true,
      }
    }
  }
</script>
<style module lang="scss">
  .col {
    flex-shrink: 0;
    @include create-col(1, 8, 'sm');
    @include create-col(2, 8, 'sm');
    @include create-col(3, 8, 'sm');
    @include create-col(4, 8, 'sm');
    @include create-col(5, 8, 'sm');
    @include create-col(6, 8, 'sm');
    @include create-col(7, 8, 'sm');
    @include create-col(8, 8, 'sm');
    
    @include min-medium {
      @include create-col(1, 12, 'md');
      @include create-col(2, 12, 'md');
      @include create-col(3, 12, 'md');
      @include create-col(4, 12, 'md');
      @include create-col(5, 12, 'md');
      @include create-col(6, 12, 'md');
      @include create-col(7, 12, 'md');
      @include create-col(8, 12, 'md');
      @include create-col(9, 12, 'md');
      @include create-col(10, 12, 'md');
      @include create-col(11, 12, 'md');
      @include create-col(12, 12, 'md');
    }

    @include min-large {
      @include create-col(1, 12, 'lg');
      @include create-col(2, 12, 'lg');
      @include create-col(3, 12, 'lg');
      @include create-col(4, 12, 'lg');
      @include create-col(5, 12, 'lg');
      @include create-col(6, 12, 'lg');
      @include create-col(7, 12, 'lg');
      @include create-col(8, 12, 'lg');
      @include create-col(9, 12, 'lg');
      @include create-col(10, 12, 'lg');
      @include create-col(11, 12, 'lg');
      @include create-col(12, 12, 'lg');
    }
  }
</style>
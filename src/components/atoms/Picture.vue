<template>
  <div :class="$style['picture-container']">
    <picture :class="$style.picture">
      <source
        v-if="largeSrc"
        :srcset="largeSrc"
        media="(min-width: 1200px)"
      >
      <source
        v-if="mediumSrc"
        :srcset="mediumSrc"
        media="(min-width: 800px)"
      >
      <source
        :srcset="smallSrc"
        media="(min-width: 0px)"
      >
      <img
        :src="largeSrc || mediumSrc || smallSrc"
        :alt="description"
        loading="lazy"
      >
    </picture>
  </div>
</template>
<script>
export default {
  props: {
    description: {
      type: String,
      required: false,
      default: 'A Black & White Square'
    },
    smallSrc: {
      type: String,
      required: true
    },
    mediumSrc: {
      type: String,
      required: false,
      default: undefined
    },
    largeSrc: {
      type: String,
      required: false,
      default: undefined
    }
  }
}
</script>
<style module>
  .picture-container {
    position: relative;
    height: 0;
    overflow: hidden;
    padding-bottom: 100%;
    width: 100%;
  }
  .picture {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .picture img {
    width: 100%;
    height: 100%;
  }
</style>

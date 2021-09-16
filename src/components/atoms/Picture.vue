<template>
  <div :class="$style['picture-container']">
    <picture :class="$style['picture']">
      <source 
        :srcset="largeImagePath" 
        media="(min-width: 1200px)"
      >
      <source 
        :srcset="mediumImagePath" 
        media="(min-width: 800px)"
      >
      <source 
        :srcset="smallImagePath" 
        media="(min-width: 0px)"
      > 
      <img 
        :src="mediumImagePath" 
        :alt="description"
      >
    </picture>
  </div>
</template>
<script>
  import ImageVariantPaths from '~/utils/ImageVariantPaths';

  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: false,
        default: 'A Black & White Square'
      }
    },
    data() {
      const largeImagePath = ImageVariantPaths.createLargeImagePath(this.$props.id);
      const mediumImagePath = ImageVariantPaths.createMediumImagePath(this.$props.id);
      const smallImagePath = ImageVariantPaths.createSmallImagePath(this.$props.id);
      return {
        largeImagePath,
        mediumImagePath,
        smallImagePath
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
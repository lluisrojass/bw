<template>
  <PlainGallery :imageIds="imageIds" />
</template>
<script>
  import directories from '~/static/directories/default-photostream.json';
  import PlainGallery from '~/components/molecules/PlainGallery';

  export default {
    components: {
      PlainGallery
    },
    data() {
      const imageIds = directories[0];
      return {
        imageIds
      };
    }
  };
</script>
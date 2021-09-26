<template>
    <Row>
      <Column
        :small="4"
        :medium="4"
        :large="2"
        v-for="imageId in imageIds"
        :key="imageId"
      >
        <GalleryPicture :id="imageId" />
      </Column>
      <div :class="$style.invisible" ref="nextPageLoader" />
    </Row>
</template>
<script>
  import Row from '~/components/atoms/Row';
  import Column from '~/components/atoms/Column';
  import GalleryPicture from '~/components/molecules/GalleryPicture';

  export default {
    props: {
      imageIds: {
        required: true,
      },
      hasNextPage: {
        required: true,
        type: Boolean
      },
    },
    data() {
      return {
        isLoaderVisible: false
      }
    },
    methods: {
      onIntersectionChange(entries) {
        const entry = entries[0];
        if (
          !!entry && 
          entry.isIntersecting && 
          this.$props.hasNextPage
        ) {
          this.$emit('getNextPage');
        }
      }
    },
    mounted() {
      const observer = new IntersectionObserver(this.onIntersectionChange, {
        root: null,
        threshold: 0.1,
      });
      observer.observe(this.$refs.nextPageLoader);
    },
    components: {
      Column,
      GalleryPicture,
      Row,
    }
  };
</script>
<style lang="scss" module>
  .invisible {
    opacity: 0;
  }
</style>
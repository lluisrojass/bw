<template>
  <Row>
    <Column
      v-for="imageId in imageIds"
      :key="imageId"
      :small="4"
      :medium="4"
      :large="2"
    >
      <GalleryPicture
        :id="imageId"
        :small-src="ImageVariantRoutes.createSmallImagePath(imageId)"
        :medium-src="ImageVariantRoutes.createMediumImagePath(imageId)"
        @load="onImageLoad(imageId)"
        @error="onImageLoad(imageId)"
      />
    </Column>
    <div ref="nextPageLoader" class="invisible" />
  </Row>
</template>
<script>
import Row from '~/components/atoms/Row';
import Column from '~/components/atoms/Column';
import GalleryPicture from '~/components/molecules/GalleryPicture';
import ImageVariantRoutes from '~/routes/ImageVariantRoutes';

export default {
  components: {
    Column,
    GalleryPicture,
    Row
  },
  props: {
    imageIds: {
      type: Array,
      required: true
    },
    hasNextPage: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      ImageVariantRoutes,
      isLoaderInView: false,
      loadedImages: 0
    };
  },
  watch: {
    isLoaderInView(currLoaderInView) {
      if (!currLoaderInView) { return; }

      this.triggerGetNextPage();
    },
    loadedImages(currLoadedImages) {
      const numImageIds = this.$props.imageIds.length;
      if (currLoadedImages !== numImageIds || !this.isLoaderInView) { return; }

      this.triggerGetNextPage();
    }
  },
  mounted() {
    const observer = new IntersectionObserver(this.onIntersectionChange, {
      root: null,
      threshold: 0.1
    });
    observer.observe(this.$refs.nextPageLoader);
  },
  methods: {
    triggerGetNextPage() {
      this.$emit('getNextPage');
    },
    onImageLoad(id) {
      this.loadedImages += 1;
    },
    onIntersectionChange(entries) {
      const entry = entries[0];
      this.isLoaderInView = !!entry && entry.isIntersecting;
    }
  }
};
</script>

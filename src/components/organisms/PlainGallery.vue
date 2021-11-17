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
<script lang="ts">
import { PropType } from 'vue';
import Row from '~/components/atoms/Row.vue';
import Column from '~/components/atoms/Column.vue';
import GalleryPicture from '~/components/molecules/GalleryPicture.vue';
import ImageVariantRoutes from '~/routes/ImageVariantRoutes.vue';
import { ImageIdList } from '~/types';

export default {
  components: {
    Column,
    GalleryPicture,
    Row
  },
  props: {
    imageIds: {
      type: Array as PropType<ImageIdList>,
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
      if (!currLoaderInView) return;

      this.triggerGetNextPage();
    },
    loadedImages(currLoadedImages) {
      if (currLoadedImages !== this.imageIds.length || !this.isLoaderInView)
        return;

      this.triggerGetNextPage();
    }
  },
  mounted() {
    const observer = new IntersectionObserver(this.onIntersectionChange, {
      root: null,
      threshold: 0.1
    });
    observer.observe(this.$refs.nextPageLoader as Element);
  },
  methods: {
    triggerGetNextPage() {
      this.$emit('getNextPage');
    },
    onImageLoad() {
      this.loadedImages += 1;
    },
    onIntersectionChange(entries: IntersectionObserverEntry[]) {
      const entry = entries[0];
      this.isLoaderInView = !!entry && entry.isIntersecting;
    }
  }
};
</script>

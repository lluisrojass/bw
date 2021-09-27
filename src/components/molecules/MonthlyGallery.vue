<template>
  <div>
    <div v-for="month in months" :key="month.title" :class="$style.row">
      <Row>
        <Column
          :small="8"
          :medium="12"
          :large="12"
        >
          <h1
            :class="[
              $style.heading,
              'text',
              'text--large',
              'text--capitalize'
            ]"
          >
            {{ month.title }}
          </h1>
        </Column>
      </Row>
      <Row>
        <Column
          v-for="imageId in month.imageIds"
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
      </Row>
    </div>
    <div
      ref="nextPageLoader"
      key="loader"
      class="invisible"
      data-autoid="next-page-loader"
    />
  </div>
</template>
<script>
import Row from '~/components/atoms/Row';
import Column from '~/components/atoms/Column';
import GalleryPicture from '~/components/molecules/GalleryPicture';
import ImageVariantRoutes from '~/routes/ImageVariantRoutes';

export default {
  components: {
    GalleryPicture,
    Column,
    Row
  },
  props: {
    months: {
      type: Array,
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
      const totalImages = this.$props.months.reduce((agg, month) => month.imageIds.length + agg, 0);
      if (currLoadedImages !== totalImages || !this.isLoaderInView) { return; }

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
<style lang="scss" module>
  .row {
    margin-bottom: 2rem;
    width: 100%;
  }
  .heading {
    margin-bottom: 0.125rem;
    padding-left: 0.5rem;
    letter-spacing: 0px;
  }
</style>

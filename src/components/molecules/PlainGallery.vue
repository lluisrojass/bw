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
      />
    </Column>
    <div ref="nextPageLoader" :class="$style.invisible" />
  </Row>
</template>
<script>
import Row from '~/components/atoms/Row'
import Column from '~/components/atoms/Column'
import GalleryPicture from '~/components/molecules/GalleryPicture'
import ImageVariantRoutes from '~/routes/ImageVariantRoutes'

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
      ImageVariantRoutes
    }
  },
  mounted() {
    const observer = new IntersectionObserver(this.onIntersectionChange, {
      root: null,
      threshold: 0.1
    })
    observer.observe(this.$refs.nextPageLoader)
  },
  methods: {
    onIntersectionChange(entries) {
      const entry = entries[0]
      if (
        !!entry &&
          entry.isIntersecting &&
          this.$props.hasNextPage
      ) {
        this.$emit('getNextPage')
      }
    }
  }
}
</script>
<style lang="scss" module>
  .invisible {
    opacity: 0;
  }
</style>

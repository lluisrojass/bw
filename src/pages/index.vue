<template>
  <Region type="last">
    <PlainGallery
      :image-ids="imageIds"
      :has-next-page="hasNextPage"
      @getNextPage="getNextPage"
    />
  </Region>
</template>
<script>
import PlainGallery from '~/components/molecules/PlainGallery'
import Region from '~/components/atoms/Region'
import PageService from '~/services/PageService'

export default {
  components: {
    PlainGallery,
    Region
  },
  asyncData(context) {
    return {
      currentPage: 1,
      imageIds: PageService.getPage(1)
    }
  },
  data() {
    return {
      imageIds: this.imageIds
    }
  },
  computed: {
    hasNextPage() {
      return PageService.has(this.currentPage + 1)
    }
  },
  methods: {
    getNextPage() {
      const nextPage = this.currentPage + 1
      const nextPageImageIds = PageService.getPage(nextPage)
      this.imageIds = this.imageIds.concat(nextPageImageIds)
      this.currentPage = nextPage
    }
  }
}
</script>

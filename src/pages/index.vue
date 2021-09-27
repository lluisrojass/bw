<template>
  <Region :type="REGION_TYPES.LAST">
    <PlainGallery
      :image-ids="imageIds"
      :has-next-page="hasNextPage"
      @getNextPage="getNextPage"
    />
  </Region>
</template>
<script>
import PlainGallery from '~/components/molecules/PlainGallery';
import Region, { TYPES } from '~/components/atoms/Region';
import PageService from '~/services/PageService';

export default {
  components: {
    PlainGallery,
    Region
  },
  asyncData(context) {
    return {
      currentPage: 1,
      imageIds: PageService.getPhotostreamPage(1)
    };
  },
  data() {
    return {
      imageIds: this.imageIds,
      REGION_TYPES: TYPES
    };
  },
  computed: {
    hasNextPage() {
      return PageService.hasPhotostreamPage(this.currentPage + 1);
    }
  },
  methods: {
    getNextPage() {
      if (!this.hasNextPage) { return; }

      const nextPage = this.currentPage + 1;
      const nextPageImageIds = PageService.getPhotostreamPage(nextPage);
      this.imageIds = this.imageIds.concat(nextPageImageIds);
      this.currentPage = nextPage;
    }
  }
};
</script>

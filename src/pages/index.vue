<template>
  <Region :type="REGION_TYPES.LAST">
    <PlainGallery
      :image-ids="imageIds"
      :has-next-page="hasNextPage"
      @getNextPage="getNextPage"
    />
  </Region>
</template>
<script lang="ts">
import PlainGallery from '../components/organisms/PlainGallery.vue';
import Region, { TYPES } from '~/components/atoms/Region.vue';
import PageService from '~/services/Page';

export default {
  components: {
    PlainGallery,
    Region
  },
  asyncData(context) {
    return {
      currentPage: 1,
      imageIds: PageService.getDefaultPhotostreamPage(1)
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
      return PageService.hasDefaultPhotostreamPage(this.currentPage + 1);
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

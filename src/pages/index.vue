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
import Vue from 'vue';
import PlainGallery from '../components/organisms/PlainGallery.vue';
import Region, { TYPES } from '~/components/atoms/Region.vue';
import PageService from '~/services/Page';
import { ImagePage } from '~/types';

export default Vue.extend({
  components: {
    PlainGallery,
    Region
  },
  asyncData() {
    return {
      imagePage: PageService.getDefaultPhotostreamPage(1)
    };
  },
  data() {
    return {
      currentPage: 1,
      imagePage: [] as ImagePage,
      REGION_TYPES: TYPES
    };
  },
  computed: {
    hasNextPage(): boolean {
      const currentPage = this.currentPage;
      return PageService.hasDefaultPhotostreamPage(currentPage + 1);
    }
  },
  methods: {
    getNextPage(): void {
      if (!this.hasNextPage) { return; }

      const nextPage = this.currentPage + 1;
      const nextPageImageIds = PageService.getDefaultPhotostreamPage(nextPage);

      this.imagePage = this.imagePage.concat(nextPageImageIds);
      this.currentPage = nextPage;
    }
  }
});
</script>

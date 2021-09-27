<template>
  <Region :type="REGION_TYPES.LAST">
    <MonthlyGallery
      :months="months"
      :has-next-page="hasNextPage"
      @getNextPage="getNextPage"
    />
  </Region>
</template>
<script>
import MonthlyGallery from '~/components/organisms/MonthlyGallery';
import Region, { TYPES } from '~/components/atoms/Region';
import PageService from '~/services/PageService';

export default {
  components: {
    MonthlyGallery,
    Region
  },
  asyncData(context) {
    const page = PageService.getMonthlyPage(1);
    return {
      currentPage: 1,
      months: [page]
    };
  },
  data() {
    return {
      REGION_TYPES: TYPES
    };
  },
  computed: {
    hasNextPage() {
      return PageService.hasMonthlyPage(this.currentPage + 1);
    }
  },
  methods: {
    getNextPage() {
      if (!this.hasNextPage) { return; }

      const monthsCopy = [...this.months];
      const nextPageNum = this.currentPage + 1;
      const nextPageContents = PageService.getMonthlyPage(nextPageNum);
      const monthIndex = monthsCopy.findIndex(month => month.title === nextPageContents.title);
      if (monthIndex !== -1) {
        monthsCopy[monthIndex].imageIds = monthsCopy[monthIndex].imageIds
          .concat(nextPageContents.imageIds);
      } else {
        monthsCopy.push(nextPageContents);
      }

      this.currentPage = nextPageNum;
      this.months = monthsCopy;
    }
  }
};
</script>

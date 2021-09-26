<template>
  <Region type="last">
    <PlainGallery 
      :imageIds="imageIds"
      :hasNextPage="hasNextPage"
      @getNextPage="getNextPage"
    />
  </Region>
</template>
<script>
  import PlainGallery from '~/components/molecules/PlainGallery';
  import Region from '~/components/atoms/Region';
  import PageService from '~/services/PageService';

  export default {
    asyncData(context) {
      return {
        currentPage: 1,
        imageIds: PageService.getPage(1)
      };
    },
    components: {
      PlainGallery,
      Region
    },
    computed: {
      hasNextPage() {
        return PageService.has(this.currentPage + 1);
      }
    },
    methods: {
      getNextPage() {
        const nextPage = this.currentPage + 1;
        const nextPageImageIds = PageService.getPage(nextPage);
        console.log('next page ids!', nextPageImageIds);
        this.imageIds = this.imageIds.concat(nextPageImageIds);
        this.currentPage = nextPage;
      }
    },
    data() {
      return {
        imageIds: this.imageIds
      };
    }
  };
</script>
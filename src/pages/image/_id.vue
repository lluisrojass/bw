<template>
  <Region :type="'last'">
    <Row>
      <Column :class="$style.spacer" :small="8" :medium="6" :large="6">
        <Picture :id="$route.params.id" />
      </Column>
      <Column :small="0" :medium="1" :large="1" />
      <Column :small="8" :medium="5" :large="5">
        <Paragraph
          :class="$style.description"
          :size="TEXT_SIZES.MEDIUM" 
          v-if="this.imageMetaData.description"
        >
          {{ this.imageMetaData.description }}
        </Paragraph>
        <Paragraph :size="TEXT_SIZES.SMALL" :uppercase="true">
          {{ this.imageMetaData.location.readable }}
        </Paragraph>
        <Paragraph :size="TEXT_SIZES.SMALL" :uppercase="true">
          {{ this.dateTakenMessage }}
        </Paragraph>
      </Column>
    </Row>
  </Region>
</template>
<script>
  import Column from '~/components/atoms/Column';
  import Row from '~/components/atoms/Row';
  import Region from '~/components/atoms/Region';
  import Picture from '~/components/atoms/Picture';
  import Paragraph, { SIZES } from '~/components/atoms/Paragraph';
  import ImageService from '~/services/ImageService';
  import imageCmsContent from '~/static/cms/image.json';

  export default {
    asyncData({ params }) {
      return {
        imageMetaData: ImageService.getImageMeta(params.id)
      };
    },
    setup() {
      console.log(this.imageMetaData)
    },
    data() {
      return {
        daysAgoMessage: null,
        readableLocation: null,
        description: null,
        TEXT_SIZES: SIZES
      };
    },
    created() {
      const dateTaken = new Date(this.imageMetaData.takenTimestamp);
      const formatted = dateTaken.toLocaleDateString("en-US", { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      this.dateTakenMessage = formatted;
    },
    components: {
      Row,
      Column,
      Paragraph,
      Picture,
      Region
    }
  }
</script>
<style lang="scss" module>
  .description {
    margin-bottom: 1rem;
  }
  .spacer {
    margin-bottom: 2rem;
    @include min-medium {
      margin-bottom: 0;
    }
  }
</style>
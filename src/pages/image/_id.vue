<template>
  <Region :type="REGION_TYPES.LAST">
    <Row>
      <Column :class="$style.spacer" :small="8" :medium="6" :large="6">
        <Picture
          :small-src="ImageVariantRoutes
            .createSmallImagePath($route.params.id)"
          :medium-src="ImageVariantRoutes
            .createMediumImagePath($route.params.id)"
          :large-src="ImageVariantRoutes
            .createLargeImagePath($route.params.id)"
        />
      </Column>
      <Column :small="0" :medium="1" :large="1" />
      <Column :small="8" :medium="5" :large="5">
        <Paragraph
          v-if="imageMetaData.description"
          :class="$style.description"
          :text-size="TEXT_SIZES.MEDIUM"
        >
          {{ imageMetaData.description }}
        </Paragraph>
        <Paragraph :text-size="TEXT_SIZES.SMALL" :uppercase="true">
          {{ imageMetaData.location.readable }}
        </Paragraph>
        <Paragraph :text-size="TEXT_SIZES.SMALL" :uppercase="true">
          {{ dateTakenMessage }}
        </Paragraph>
      </Column>
    </Row>
  </Region>
</template>
<script>
import Row from '~/components/atoms/Row';
import Column from '~/components/atoms/Column';
import Paragraph from '~/components/atoms/Paragraph';
import Region, { TYPES } from '~/components/atoms/Region';
import Picture from '~/components/atoms/Picture';
import { SIZES } from '~/mixins/TextSize';
import ImageVariantRoutes from '~/routes/ImageVariantRoutes';
import ImageService from '~/services/ImageService';

export default {
  components: {
    Row,
    Column,
    Paragraph,
    Picture,
    Region
  },
  asyncData({ params }) {
    return {
      imageMetaData: ImageService.getImageMeta(params.id)
    };
  },
  data() {
    return {
      ImageVariantRoutes,
      dateTakenMessage: null,
      TEXT_SIZES: SIZES,
      REGION_TYPES: TYPES
    };
  },
  created() {
    const dateTaken = new Date(this.imageMetaData.takenTimestamp);
    const formatted = dateTaken.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: this.imageMetaData.timeZone
    });
    this.dateTakenMessage = formatted;
  }
};
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

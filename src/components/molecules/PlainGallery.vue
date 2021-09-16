<template>
  <Region>
    <Row>
      <Column
        :small="2"
        :medium="4"
        :large="2"
        v-for="imageId in imageIds"
        :key="imageId"
      >
        <GalleryPicture :id="imageId" />
      </Column>
    </Row>
  </Region>
</template>
<script>
  import Region from '~/components/atoms/Region';
  import Row from '~/components/atoms/Row';
  import Column from '~/components/atoms/Column';
  import GalleryPicture from '~/components/molecules/GalleryPicture';

  export default {
    props: {
      imageIds: {
        required: true,
      }
    },
    components: {
      Column,
      GalleryPicture,
      Row,
      Region
    }
  };
</script>
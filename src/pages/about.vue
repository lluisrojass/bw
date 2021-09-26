<template>
  <Region>
    <Row>
      <Column :small="0" :medium="2" :large="2" />
      <Column :small="8" :medium="8" :large="8">
        <Paragraph :uppercase="false" :size="TEXT_SIZES.SMALL">
          {{ about.text }}
        </Paragraph>
      </Column>
      <Column :small="0" :medium="2" :large="2" />
    </Row>
  </Region>
</template>
<script>
  import Region from '~/components/atoms/Region';
  import Row from '~/components/atoms/Row';
  import Column from '~/components/atoms/Column';
  import Paragraph, { SIZES } from '~/components/atoms/Paragraph';
  import about from '~/static/cms/about.json';
  
  export default {
    data() {
      return {
        about: JSON.parse(JSON.stringify(about)),
        TEXT_SIZES: SIZES
      }
    },
    components: {
      Column,
      Region,
      Row,
      Paragraph
    }
  };
</script>
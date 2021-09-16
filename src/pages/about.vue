<template>
  <Region>
    <Row>
      <Column :small="4" :medium="12" :large="12">
        <Paragraph>{{ about.text }}</Paragraph>
      </Column>
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
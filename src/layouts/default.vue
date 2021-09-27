<template>
  <div>
    <Region
      :type="REGION_TYPES.NO_VERTICAL_MARGIN"
      :class="$style['header-container']"
    >
      <Header v-bind="header" />
    </Region>
    <Nuxt />
  </div>
</template>
<script>
import Region, { TYPES } from '~/components/atoms/Region';
import Header from '~/components/molecules/Header';
import headerData from '~/static/cms/header.json';

export default {
  components: {
    Header,
    Region
  },
  data() {
    return {
      header: headerData,
      REGION_TYPES: TYPES
    };
  }
};
</script>
<style lang="scss" module>
  .header-container {
    padding-top: 2rem;
    justify-content: center;
    display: flex;
  }
</style>

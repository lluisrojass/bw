<template>
  <div>
    <Header v-bind="header" />
    <Nuxt />
  </div>
</template>
<script>
import Header from '~/components/molecules/Header';
import headerData from '~/static/cms/header.json';

export default {
  components: {
    Header
  },
  data() {
    return {
      header: headerData
    };
  }
};
</script>

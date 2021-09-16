<template>
  <div>
    <Header v-bind="header" />
    <Nuxt />
  </div>
</template>
<script>
  import Header from '~/components/organisms/Header';
  import headerData from '~/static/cms/header.json';

  export default {
    components: {
      Header: Header
    },
    data() {
      return {
        header: JSON.parse(JSON.stringify(headerData))
      }
    }
  };
</script>

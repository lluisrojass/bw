<template>
  <Link :to="href" :class="$style.spacing">
    <Picture
      v-bind="$props"
      :class="$style['gallery-picture']"
    />
  </Link>
</template>
<script>
  import Link from '~/components/atoms/Link';
  import Picture from '~/components/atoms/Picture';
  import AppPaths from '~/utils/AppPaths';

  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: false
      }
    },
    computed: {
      href: function() {
        return AppPaths.createInternalImagePath(this.id);
      }
    },
    components: {
      Picture,
      Link
    }
  };
</script>
<style module lang="scss">
  .gallery-picture {
    border-radius: 5px;
    border: 1px solid $fg-grey;
    box-shadow: 2px 2px 10px 1px black;
  }
  .spacing {
    margin: 0.5rem;
    display: block;
  }
</style>
<template>
  <Link
    :to="href"
    :class="$style.spacing"
    :is-for-text="false"
  >
    <Picture
      v-bind="$props"
      :class="$style['gallery-picture']"
    />
  </Link>
</template>
<script>
import Link from '~/components/atoms/Link'
import Picture from '~/components/atoms/Picture'
import AppRoutes from '~/routes/AppRoutes'

export default {
  components: {
    Picture,
    Link
  },
  props: {
    description: {
      type: String,
      required: false,
      default: undefined
    },
    id: {
      type: String,
      required: true
    },
    smallSrc: {
      type: String,
      required: true
    },
    mediumSrc: {
      type: String,
      required: true
    }
  },
  computed: {
    href() {
      return AppRoutes
        .createInternalImagePath(this.id)
    }
  }
}
</script>
<style module lang="scss">
  .gallery-picture {
    border-radius: 5px;
  }
  .spacing {
    margin: 0.5rem;
    display: block;
  }
</style>

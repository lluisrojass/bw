<template>
  <div>
    <Link
      :class="$style.link"
      :to="$props.home.href"
      :disabled="isAtHomePage"
      :uppercase="true"
      :text-size="TEXT_SIZES.SMALL"
    >{{ home.text }}</Link>
    <Link
      :class="$style.link"
      :to="monthly.href"
      :disabled="isAtMonthlyPage"
      :uppercase="true"
      :text-size="TEXT_SIZES.SMALL"
    >{{ monthly.text }}</Link>
    <Link
      :class="$style.link"
      :to="about.href"
      :disabled="isAtAboutPage"
      :uppercase="true"
      :text-size="TEXT_SIZES.SMALL"
    >{{ about.text }}</Link>
  </div>
</template>
<script>
import Link from '~/components/atoms/Link';
import { SIZES } from '~/mixins/TextSize';
import AppRoutes from '~/routes/AppRoutes';

export default {
  components: {
    Link
  },
  props: {
    home: {
      type: Object,
      required: true
    },
    about: {
      type: Object,
      required: true
    },
    monthly: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      TEXT_SIZES: SIZES
    };
  },
  computed: {
    isAtHomePage() {
      return AppRoutes.isHomePage(this.$route.fullPath);
    },
    isAtAboutPage() {
      return AppRoutes.isAboutPage(this.$route.fullPath);
    },
    isAtMonthlyPage() {
      return AppRoutes.isMonthlyPage(this.$route.fullPath);
    }
  }
};
</script>
<style module lang="scss">
  .link + .link {
    margin-left: 1.5rem;
  }
</style>

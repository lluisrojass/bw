<template>
  <Region type="no-vertical-margin" :class="$style.container">
    <Link 
      :class="$style.link" 
      :to="$props.home.href"
      :disabled="isAtHomePage"
      :uppercase="true" 
      size="small"
    >
      {{ home.text }}
    </Link>
    <Link 
      :class="$style.link" 
      :to="monthly.href" 
      :disabled="isAtMonthlyPage"
      :uppercase="true" 
      size="small"
    >
      {{ monthly.text }}
    </Link>
    <Link 
      :class="$style.link" 
      :to="about.href" 
      :disabled="isAtAboutPage"
      :uppercase="true" 
      size="small"
    >
      {{ about.text }}
    </Link>
  </Region>
</template>
<script>
  import Region from '~/components/atoms/Region';
  import Link from '~/components/atoms/Link';
  import BooksIcon from '~/assets/icons/books.svg?inline';
  import AppPaths from '~/utils/AppPaths';

  export default {
    props: [
      'home', 
      'about', 
      'monthly'
    ],
    computed: {
      isAtHomePage() {
        return AppPaths.isHomePage(this.$route.fullPath);
      },
      isAtAboutPage() {
        return AppPaths.isAboutPage(this.$route.fullPath);
      },
      isAtMonthlyPage() {
        return AppPaths.isMonthlyPage(this.$route.fullPath);
      }
    },
    components: { 
      BooksIcon, 
      Link, 
      Region,
    },
  };
</script>
<style module lang="scss">
  .container {
    padding-top: 2rem;
    justify-content: center;
    display: flex;
  }
  .link + .link {
    margin-left: 1.5rem;
  }
</style>
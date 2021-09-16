<template>
  <Region type="no-vertical-margin" :class="$style.container">
    <Row>
      <Column :small="1" :medium="6" :large="6">
        <Link :to="$props.home.href" size="large">
          <BooksIcon :class="$style['home-icon']" />
        </Link>
      </Column>
      <Column :small="3" :medium="6" :large="6" :class="$style['end']">
        <Link  size="large" :to="monthly.href">
          {{ monthly.text }}
        </Link>
        <span :class="$style.spacer" />
        <Link :to="about.href" size="large">
          {{ about.text }}
        </Link>
      </Column>
    </Row>
  </Region>
</template>
<script>
  import Region from '~/components/atoms/Region';
  import Row from '~/components/atoms/Row';
  import Column from '~/components/atoms/Column';
  import Link from '~/components/atoms/Link';
  import BooksIcon from '~/assets/icons/books.svg?inline';

  export default {
    props: ['home', 'about', 'monthly'],
    components: { 
      BooksIcon, 
      Column,
      Link, 
      Region, 
      Row 
    },
  };
</script>
<style module lang="scss">
  .home-icon {
    height: 2.25rem;
    width: 2.25rem;
    color: $fg-cream;
  }
  .end {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .container {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .spacer {
    display: inline-block;
    background-color: $fg-cream;
    padding: 0;
    margin: 0 1rem;
    width: 1px;
    height: 1.5rem;
  }
</style>
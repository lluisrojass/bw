<template>
  <div :class="$style.row">
    <slot />
  </div>
</template>
<style module>
  .row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    max-width: 100%;
  }
</style>

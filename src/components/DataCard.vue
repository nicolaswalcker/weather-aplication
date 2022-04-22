<template>
  <article class="home__data-card">
    <h1 class="home__data-card-title">
      {{ dataCardTitle }}
    </h1>
    <p class="home__data-card-data">
      {{ dataCardData }}
    </p>
  </article>
</template>

<script>
export default {
  name: 'DataCard',

  props: {
    dataCardTitle: {
      type: String,
      required: true
    },
    dataCardData: {
      type: String,
      required: true
    },
  },
};
</script>

<style lang="scss" scoped>
.home__data-card {
  background: $blue-500;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: $text-100;

  &-title {
    font-size: 1rem;
    font-weight: $font-medium;
  }

  &-data {
    font-size: $text-6xl;
    font-weight: bold;
  }
}
</style>

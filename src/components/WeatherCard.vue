<template>
  <article class="card">
    <h1 class="card__day">
      {{ tomorrowOrNot }}
    </h1>
    <figure class="card__image">
      <img
        class="card__image-content"
        :src="require(`@/assets/img/weatherIcons/${transformImage(dayImg)}.svg`)"
        alt="#"
      >
    </figure>
    <p class="card__temp">
      <!-- eslint-disable-->
      <span class="card__temp-number high">{{ Math.round(dayMaxTemp) }}°C</span
      ><span class="card__temp-number low">{{ Math.round(dayMinTemp) }}°C</span>
    </p>
  </article>
</template>

<script>
import { getDate, transformImage } from '@/helpers';
export default {
  name: 'WeatherCard',

  props: {
    dayDate: {
      type: Number || String,
      required: true,
    },

    dayImg: {
      type: String,
      required: true,
    },

    dayMaxTemp: {
      type: Number || String,
      required: true,
    },

    dayMinTemp: {
      type: Number || String,
      required: true,
    },

    index: {
      type: Number,
      required: true,
    },
  },

  computed: {
    tomorrowOrNot() {
      return this.index === 0 ? 'Amanhã' : this.getDate(this.dayDate);
    },
  },

  methods: {
    getDate,
    transformImage
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $blue-500;
  width: 100%;
  height: 100%;

  &__day {
    color: $white;
    font-size: 1rem;
    font-weight: $font-medium;
    color: $text-100;
    line-height: 19px;
  }

  &__image {
    width: 50%;
    position: relative;
    overflow: hidden;
  }

  &__temp {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    &-number {
      font-size: 1rem;
      font-weight: $font-medium;
      line-height: 19px;

      &.high {
        color: $text-100;
      }

      &.low {
        color: $text-200;
      }
    }
  }
}
</style>

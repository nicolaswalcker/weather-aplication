<template>
  <aside class="aside">
    <slot class="aside__select" />
    <figure class="aside__image">
      <img
        :src="require(`@/assets/img/weatherIcons/${asideWeatherImage}.svg`)"
        alt="#"
      >
    </figure>
    <article class="aside__temp">
      <h1 class="aside__temp-number">
        {{ Math.round(asideWeatherTemp) }}
      </h1>
      <p class="aside__temp-metric">
        °C
      </p>
    </article>
    <h2 class="aside__weather">
      {{ capitalize(asideWeatherState) }}
    </h2>
    <article class="aside__infos">
      <p class="aside__infos-date">
        <span class="aside__infos-date-text">Hoje</span>
        <span class="aside__infos-date-text">&nbsp;&bull;</span>
        <span class="aside__infos-date-text">{{ getDate(asideDate) }}</span>
      </p>
      <p class="aside__infos-location">
        {{ asideCity }} - ES
      </p>
    </article>
  </aside>
</template>

<script>
import { capitalize, getDate } from '@/helpers';
export default {
  name: 'SideBar',
  props: {
    asideWeatherImage: {
      type: String,
      required: true,
    },
    asideWeatherTemp: {
      type: Number,
      required: true,
    },
    asideWeatherState: {
      type: String,
      required: true,
    },
    asideDate: {
      type: Number,
      required: true,
    },
    asideCity: {
      type: String,
      required: true,
    },
  },
  methods: {
    capitalize,
    getDate
  },
};
</script>

<style lang="scss" scoped>
.aside {
  background: $blue-500;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 100vh;
  padding: 0.75rem 0;

  &__select {
    width: 100%;
  }

  &__image {
    width: 50%;
    transition: all 0.2s $transition-function-elastic;
    z-index: 2;

    &:hover {
      transform: skew(0deg, 5deg);
    }
  }

  &__temp {
    display: flex;
    justify-content: center;
    align-items: baseline;

    &-number {
      font-weight: $font-medium;
      font-size: 9rem;
      color: $text-100;
    }
    &-metric {
      font-weight: $font-medium;
      font-size: 3rem;
      color: $text-200;
    }
  }

  &__weather {
    font-size: 36px;
    font-weight: $font-semi-bold;
    color: $text-200;
  }

  &__infos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    color: $text-200;

    &-date {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    &-location {
      font-weight: $font-semi-bold;
    }
  }
}
</style>

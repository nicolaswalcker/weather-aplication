<template>
  <aside class="aside">
    <div class="aside__bg">
      <img
        src="@/assets/img/weatherIcons/03d.svg"
      ><img
        src="@/assets/img/weatherIcons/03d.svg"
      ><img
        src="@/assets/img/weatherIcons/03d.svg"
      ><img
        src="@/assets/img/weatherIcons/03d.svg"
      >
    </div>
    <figure class="aside__image">
      <img
        src="@/assets/img/weatherIcons/10d.svg"
        alt="#"
      >
    </figure>
    <article class="aside__temp">
      <h1 class="aside__temp-number">
        15
      </h1>
      <p class="aside__temp-metric">
        °C
      </p>
    </article>
    <h2 class="aside__weather">
      Shower
    </h2>
    <article class="aside__infos">
      <p class="aside__infos-date">
        <span class="aside__infos-date-text">Today</span>
        <span class="aside__infos-date-text">&nbsp;&bull;</span>
        <span class="aside__infos-date-text">Fri, 5 jun</span>
      </p>
      <p class="aside__infos-location">
        Helsinki
      </p>
    </article>
  </aside>
</template>

<script>
  export default {
    name: 'SideBar',
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

  &__bg {
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 50%;
    width: 80%;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    opacity: 0.05;
    transform: skew(5deg);
    z-index: 1;
  }

  &__image {
    width: 50%;
    transition: all .2s $transition-function-elastic;
    z-index: 2;

    &:hover {
      transform: skew(0deg, 5deg);
    }
  }

  &__temp {
    display:flex;
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
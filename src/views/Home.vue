<template>
  <!--  eslint-disable -->
  <div class="home">
    <SideBar
      :aside-weather-image="getCurrentWeather.weather[0].icon"
      :aside-weather-temp="getCurrentWeather.temp"
      :aside-weather-state="getCurrentWeather.weather[0].description"
      :aside-date="getCurrentWeather.dt"
      :aside-city="selectedCity.name"
    >
      <select class="search" v-model="selectedCity" @change="getCity(selectedCity)">
        <option class="search__item" v-for="(city, index) in cities" :key="index" :value="city">
          {{ city.name }}
        </option>
      </select>
    </SideBar>
    <section class="home__content">
      <section class="home__cards">
        <WeatherCard
          v-for="(day, index) in getWeekDays"
          :key="index"
          :day-date="day.dt"
          :day-img="day.weather[0].icon"
          :day-max-temp="day.temp.max"
          :day-min-temp="day.temp.min"
          :index="index"
        />
      </section>
      <section class="home__section">
        <h2 class="home__section-title">Dados de hoje</h2>
        <section class="home__info">
          <data-card
            :data-card-title="'Ventos'"
            :data-card-data="`${getCurrentWeather.wind_speed} m/s`"
          />
          <data-card
            :data-card-title="'Humidade'"
            :data-card-data="`${getCurrentWeather.humidity}%`"
          />
        </section>
      </section>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
import WeatherCard from "@/components/WeatherCard.vue";
import SideBar from "@/components/SideBar.vue";
import DataCard from "@/components/DataCard.vue";
import weatherService from "@/api/weatherService.js";
export default {
  name: "Home",
  components: {
    SideBar,
    WeatherCard,
    DataCard,
  },
  data() {
    return {
      getCurrentWeather: {
        dt: 0,
        temp: 0,
        weather: [
          {
            description: "Description",
            icon: "01d",
          }
        ],
        wind_speed: 0,
        humidity: 0,
      },
      getDailyWeather: [],
      localTime: "",
      cities: [
        {
          name: "Nova Venécia",
          lat: -18.7056,
          lon: -40.3982,
        },
        {
          name: "São Mateus",
          lat: -18.7167,
          lon: -39.8594,
        },
      ],
      selectedCity: {
        name: "Nova Venécia",
        lat: -18.7056,
        lon: -40.3982,
      },
    };
  },

  computed: {
    getWeekDays() {
      const days = this.getDailyWeather.slice(1, 6);

      return days;
    },
  },
  
  async mounted() {
    await this.getWeather();
    this.clock();
  },
  methods: {
    async getWeather() {
      await weatherService
        .getWeather(this.selectedCity.lat, this.selectedCity.lon)
        .then((response) => {
          this.getCurrentWeather = response.data.current;
          this.getDailyWeather = response.data.daily;
        }).catch((error) => {
          console.log(error);
        });

      const favicon = document.getElementById("favicon");

      favicon.href = require(`@/assets/img/weatherIcons/${this.getCurrentWeather.weather[0].icon}.svg`);
    },

    clock() {
      const TIME_INTERVAL = 1800000;

      this.localTime = new Date().toLocaleTimeString();

      setInterval(() => {
        this.localTime = new Date().toLocaleTimeString();
        this.getWeather();
      }, TIME_INTERVAL);
    },

    getCity(item) {
      this.selectedCity = item;
      this.getWeather();
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  min-height: 100vh;
  background: $blue-600;
  display: flex;
  flex-direction: column;

  @include breakpoint(medium-up) {
    display: grid;
    grid-template-columns: 25% 1fr;
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5rem;
    padding: 1.5rem;

    @include breakpoint(medium-up) {
      padding: 90px 150px 0;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(2, 120px);
    grid-auto-rows: 180px;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    width: 100%;

    @include breakpoint(medium-up) {
      display: grid;
      grid-template-columns: repeat(5, min(120px, 20%));
      grid-auto-rows: 180px;
      justify-content: center;
      align-items: center;
      column-gap: 1.5rem;
      padding: 0;
    }
  }

  &__section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    @include breakpoint(medium-up) {
      width: auto;
    }

    &-title {
      color: $white;
      font-size: 1.5rem;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    @include breakpoint(medium-up) {
      display: grid;
      grid-template-columns: repeat(2, 328px);
      justify-content: center;
      align-items: center;
      gap: 3rem;
      width: 100%;
    }
  }

  .search {
    width: 80%;
    background: $blue-500;
    color: $white;
    padding: 1rem;
    border: 2px solid $text-200;

    &__item {
      color: $white;
      background: $blue-500;
      height: 50px;
      padding: 3rem;
    }
  }
}
</style>

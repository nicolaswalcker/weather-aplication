/* eslint-disable max-len */
import axios from 'axios';

const apiClient = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getWeather(lat, lon) {

    return apiClient.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&lang=pt_br&appid=${process.env.VUE_APP_API_KEY}&units=metric`);
  },
};

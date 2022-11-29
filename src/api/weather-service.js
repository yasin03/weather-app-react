import axios from "axios";

export const getWeatherData = (lat, lon, key) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
  );
};

// https://api.openweathermap.org/data/2.5/weather?q=afyon&lang=tr&appid=6d1569f544cff0b8b160fcb8bdcf7245

export const getWeatherByCityName = (city, lang, key) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${key}&units=metric`
  );
};

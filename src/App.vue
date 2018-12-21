<template>
  <div id="app">
    <transition name="fade">
      <loader v-if="!isLoaded" :error="locationError"></loader>
    </transition>
    <div class="wrapper">
      <weather-info
        isMobile="false"
        :value="value"
        :unit="unit"
        :text="weatherText"
        :location="location"
      ></weather-info>
      <weather-icon isMobile="false" :icon="icon"></weather-icon>
    </div>
    <div class="wrapper--mobile">
      <weather-icon isMobile="true" :icon="icon"></weather-icon>
      <weather-info
        isMobile="true"
        :value="value"
        :unit="unit"
        :text="weatherText"
        :location="location"
      ></weather-info>
    </div>
  </div>
</template>

<script>
import weatherIcon from "./components/WeatherIcon";
import weatherInfo from "./components/WeatherInfo";
import loader from "./components/Loader";
import service from "./service/weatherService.js";

export default {
  name: "app",
  components: {
    "weather-icon": weatherIcon,
    "weather-info": weatherInfo,
    loader
  },
  mounted: function() {
    this.currentLocation();
  },
  data: function() {
    return {
      icon: "",
      value: "",
      weatherText: "",
      unit: "",
      isLoaded: false,
      location: "",
      locationError: ""
    };
  },
  methods: {
    currentLocation: function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.getLocation,
          this.handleLocationError,
          {
            enableHighAccuracy: true
          }
        );
      }
    },
    getLocation: async function(position) {
      let location = await service.getLocation(
        position.coords.longitude,
        position.coords.latitude
      );
      this.location = `${location.data.AdministrativeArea.LocalizedName}, ${
        location.data.Country.LocalizedName
      }`;
      this.getWeatherData(location);
      console.log(location);
    },
    getWeatherData: async function(locationData) {
      let weatherData = await service.getCurrentWeather(locationData.data.Key);
      this.icon = weatherData.data[0].WeatherIcon;
      this.value = weatherData.data[0].Temperature.Metric.Value;
      this.unit = weatherData.data[0].Temperature.Metric.Unit;
      this.weatherText = weatherData.data[0].WeatherText;
      this.isLoaded = true;
      console.log(weatherData);
    },
    handleLocationError: function(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          this.locationError = "We need your location to make this work 😉";
          break;
        case error.POSITION_UNAVAILABLE:
          this.locationError = "Location information is unavailable.";
          break;
        case error.TIMEOUT:
          this.locationError =
            "The request to get your location timed out. \n please refresh";
          break;
        case error.UNKNOWN_ERROR:
          this.locationError =
            "It's not you, it's us😪 \n Please refresh and try again";
          break;
      }
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
}
</style>

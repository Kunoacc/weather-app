<template>
  <div :class="{'weather--icon': !isMobileBool, 'weather--icon_mobile': isMobileBool}">
    <div class="weather--icon" v-if="!isMobileBool">
      <i :class="['wi', icons[icon], 'lg']" style></i>
    </div>
    <div v-if="isMobileBool">
      <i :class="['wi', icons[icon], 'sm']" style></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "weatherIcon",
  props: ["icon", "isMobile"],
  data: function() {
    return {
      icons: {
        1: "wi-day-sunny",
        2: "wi-day-sunny",
        3: "wi-day-sunny-overcast",
        4: "wi-day-cloudy",
        5: "wi-day-haze",
        6: "wi-day-cloudy",
        7: "wi-cloudy",
        8: "wi-cloud",
        9: "",
        10: "",
        11: "wi-fog",
        12: "wi-showers",
        13: "wi-day-showers",
        14: "wi-day-showers",
        15: "wi-thunderstorm",
        16: "wi-day-thunderstorm",
        17: "wi-day-thunderstorm",
        18: "wi-rain",
        19: "wi-sleet",
        20: "wi-day-sleet",
        21: "wi-day-sleet",
        22: "wi-snow",
        23: "wi-day-snow",
        24: "wi-hail",
        25: "wi-sleet",
        26: "wi-rain-wind",
        27: "",
        28: "",
        29: "wi-snow-wind",
        30: "wi-hot",
        31: "wi-snowflake-cold",
        32: "wi-cloudy-windy",
        33: "wi-night-clear",
        34: "wi-night-cloudy-high",
        35: "wi-night-partly-cloudy",
        36: "wi-night-partly-cloudy",
        37: "",
        38: "wi-night-cloudy",
        39: "wi-night-showers",
        40: "wi-night-showers",
        41: "wi-night-thunderstorm",
        42: "wi-night-thunderstorm",
        43: "wi-night-snow-wind",
        44: "wi-night-snow"
      }
    };
  },
  computed: {
    isMobileBool: function() {
      if (this.isMobile == "false") {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style>
i {
  color: white;
}

.lg {
  font-size: 18rem;
  margin-right: -200px;
}

.sm {
  font-size: 10em;
}

@media (max-width: 991px) {
  .lg {
    font-size: 12rem;
    text-align: right;
    margin-right: -150px;
  }
}

@media (max-width: 767px) {
  .lg {
    font-size: 8rem;
  }
}
</style>



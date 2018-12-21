<template>
  <div :class="{'weather--info': !isMobileBool, 'weather--info_mobile': isMobileBool}">
    <div class="weather--info" v-if="!isMobileBool">
      <div class="weather--info_header">
        <p>{{getDate()}} | {{location}}</p>
      </div>
      <div class="weather--info_body">
        <h1 class="heading">{{value + '°' + unit}}</h1>
        <h3 class="heading-2">{{text}}</h3>
      </div>
    </div>

    <div class="mobile" v-if="isMobileBool">
      <div class="weather--info_body weather--info_body_mobile">
        <h1 class="heading-3">{{value + '°' + unit}}</h1>
        <h4 class="heading-4">{{text}}</h4>
      </div>
      <div class="weather--info_header weather-info_header_mobile">
        <p class="paragraph">
          {{getDate()}}
          <strong>|</strong>
          {{location}}.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "weatherInfo",
  props: ["isMobile", "value", "unit", "text", "location"],
  methods: {
    getDate: function() {
      const date = new Date();
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let day = `${date.getDate()} ${
        months[date.getMonth()]
      }, ${date.getFullYear()}`;
      return day;
    }
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
.mobile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 90%;
  text-align: center;
}

.heading-2,
.heading-4 {
  text-transform: capitalize;
}
</style>


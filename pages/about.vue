<template>

  <div class="px-4 md:px-8 mt-8">
    <h1 class="text-3xl font-bold">Hi there :D</h1>
    <p class="mt-4 text-md font-medium break-all">
      I am a <tooltip text='<span class="text-sm">2008/04/03</span>' mode="top">
        <span :style="{ color: 'blue' }" v-html="age"></span>
      </tooltip>-year-old kid who loves coding and space stuff. Also, I study in
      <a class="text-blue-400 underline" href="https://en.m.wikipedia.org/wiki/Nonformal_learning">
        non-formal education
      </a> until high school.
    </p>
<!--

    <div class="text-lg">
I'm a <a class="text-blue-500 font-medium hover:underline hover:decoration-indigo-500/30" href="example.com">Test</a> on instangram
    </div>
-->

  </div>
</template>

<script>
import Tooltip from '@/components/Tooltip.vue';

export default {
  components: {},
  data() {
    return {
      name: 'Mac',
      age: 'N/A',
      weather: 'N/A',
      emoji: '👋',
      locationAndtime: 'N/A',
    };
  },
  mounted() {
    setInterval(() => {
      this.age = this.calculateAge();
    }, 1000);

    this.fetchWeatherData();
    setInterval(this.updateDateAndTime, 1000, this.$config.public);
  },
  methods: {
    calculateAge() {
      const now = new Date();
      const birth = new Date(2008, 4, 3);
      const difference = now - birth;
      const age = difference / 1000 / 60 / 60 / 24 / 365;
      return age.toFixed(6);
    },
    fetchWeatherData() {
      $fetch('/api/weather')
        .then((weather) => {
          this.weather = `${weather.main.temp}°C, ${weather.weather[0].description}, ${weather.wind.speed}km/h`;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    updateDateAndTime(pubconfig) {
      const date = new Date();
      const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: 'Asia/Bangkok',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      };
      const DateFmt = new Intl.DateTimeFormat('en-US', options);
      this.locationAndtime = `${pubconfig.weather_location}: ${DateFmt.format(date)}`;
    },
  },
};
</script>

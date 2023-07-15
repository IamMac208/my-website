<template> <div class="container sl-1">
    <div class="flex inline-block">
      <h1 class="flex items-center hover:scale-110 duration-300 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 text-bold">
        Hiya
      </h1>
      <small>
        <h1
          @mouseenter="emoji = '❤️'"
          @mouseleave="emoji = '👋'"
          class="inline-flex"
        >
          {{ emoji }}
        </h1>
      </small>
    </div>

    <div>
<div class="text-md text-gray-300 font-bold">{{ locationAndtime }}<br/>{{ weather }}</div>
      <br />
      <p class="ml-0 w-fit border-b-2 border-teal-300 mb-4">
        Hey i am
        <button>
          <b>
            <span @click="toggleName">{{ name }}.</span>
          </b>
        </button>
      </p>
      <p>
      I am a
<tooltip text='<span class="text-sm">2008/04/03</span>' mode="top"><span :style="{ color: 'blue' }" v-html="age"></span></tooltip>-year-old kid who loves coding, music, and space stuff. Also i study in <a href="https://en.m.wikipedia.org/wiki/Nonformal_learning">non-formal education</a>.


      </p>
    </div>
  </div>
</template>

<script>
import Tooltip from '@/components/Tooltip.vue';


export default {
  components: {
         Tooltip,
  },
data() {
    return {
      name: 'Mac',
      age: 'N/A',
      weather: 'N/A',
      emoji: '👋',
      locationAndtime: 'N/A',
    };
  },

mounted() {},
  created() {

setInterval(() => {
      this.age = this.calculateAge();
    }, 1000);


$fetch('/api/weather')
    .then(weather => {
     this.weather = `${weather.main.temp}°C, ${weather.weather[0].description}, ${weather.wind.speed}km/h`;
    })
    .catch(error => {
      console.error(error);
    });



setInterval(this.DateAndTime, 1000, this.$config.public);



},
 methods: {
    calculateAge() {
      const now = new Date();
      const birth = new Date(2008, 4, 3);


      const difference = now - birth;
      const age = difference / 1000 / 60 / 60 / 24 / 365;
      return age.toFixed(6);

    },


    toggleName() {
      this.name = this.name === 'Mac' ? 'Windows' : 'Mac';
    },
  DateAndTime(pubconfig) {
 
    const date = new Date();

      const options = {

         hour: 'numeric',
         minute: 'numeric',
         second: 'numeric',
         hour12: true,
         timeZone: 'Asia/Bangkok',
         day: 'numeric',
         month: 'short',
         year: 'numeric'
}

      const DateFmt = new Intl.DateTimeFormat('en-US', options);
      this.locationAndtime = `${pubconfig.weather_location}: ${DateFmt.format(date)}`;


     },
  },

};
</script>

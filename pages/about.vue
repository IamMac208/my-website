<template>
  <div class="sl-1 flex flex-col items-center">




  <!--  <h1
      class="px-4 flex items-center hover:scale-110 duration-300 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 text-bold"
    >
      Hello.
  </h1>-->
    
          <!--<div class="mt-4 px-4 text-md text-slate-700 dark:text-gray-300 font-bold">
      <div>{{ locationAndtime }}</div>
      <div>{{ weather }}</div>
    </div>
	  -->
    <div class="mt-4 px-4">
      <p class="ml-0 w-fit border-b-2 border-b-sky-500 dark:border-teal-300 mb-4 font-mono">
        Hey I'm
        <button>
          <b>
            <span @click="toggleName">{{ name }}.</span>
          </b>
        </button>
      </p>
    </div>

<div class="mt-4 px-4 text-md text-slate-5	00 dark:text-g
ray-300 font-bold">
      <div>{{ locationAndtime }}</div>
      <div>{{ weather }}</div>
    </div>

    <div>

    <p class="mt-4 font-mono px-4 text-center">
      I am a
      <tooltip text='<span class="text-sm">2008/04/03</span>' mode="top">
        <span :style="{ color: 'blue' }" v-html="age"></span>
      </tooltip>-year-old kid who loves coding and space stuff. Also I study in
      <a class="text-blue-400 underline" href="https://en.m.wikipedia.org/wiki/Nonformal_learning"
        >non-formal education</a
      > until high school.
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
  }
 },

 mounted() {},
 created() {
  setInterval(() => {
   this.age = this.calculateAge()
  }, 1000)

  $fetch('/api/weather')
   .then((weather) => {
    this.weather = `${weather.main.temp}°C, ${weather.weather[0].description}, ${weather.wind.speed}km/h`
   })
   .catch((error) => {
    console.error(error)
   })

  setInterval(this.DateAndTime, 1000, this.$config.public)
 },
 methods: {
  calculateAge() {
   const now = new Date()
   const birth = new Date(2008, 4, 3)

   const difference = now - birth
   const age = difference / 1000 / 60 / 60 / 24 / 365
   return age.toFixed(6)
  },

  toggleName() {
   this.name = this.name === 'Mac' ? 'Windows' : 'Mac'
  },
  DateAndTime(pubconfig) {
   const date = new Date()

   const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'Asia/Bangkok',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
   }

   const DateFmt = new Intl.DateTimeFormat('en-US', options)
   this.locationAndtime = `${pubconfig.weather_location}: ${DateFmt.format(
    date,
   )}`
  },
 },
}
</script>

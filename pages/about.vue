<template>
  <div class="">




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
	  <!--
<div class="mt-4 px-4 text-md text-slate-500 dark:text-g
ray-300 font-bold">
      <div>{{ locationAndtime }}</div>
      <div>{{ weather }}</div>
    </div>-->



<div class="px-4 md:px-8 mt-8">
    <h1 class="text-3xl font-bold">Hi there!</h1>
    <p class="mt-4 text-md font-medium break-all">
        I am a <tooltip text='<span class="text-sm">2008/04/03</span>'
mode="top">
        <span :style="{ color: 'blue' }" v-html="age"></span>
      </tooltip>-year-old kid who loves coding and space stuff. Also, I study in
        <a class="text-blue-400 underline" href="https://en.m.wikipedia.org/wiki/Nonformal_learning">
            non-formal education
        </a> until high school.
    </p>
</div>





    <!--

    <div>


<h1 class="px-4 md:px-8 text-3xl font-bold mt-8">Hi there 👋!</h1>


    <p class="mt-4 px-4 md:px-8 text-md break-all font-medium">
I am a
      <tooltip text='<span class="text-sm">2008/04/03</span>' mode="top">
        <span :style="{ color: 'blue' }" v-html="age"></span>
      </tooltip>-year-old kid who loves coding and space stuff. Also I study in
      <a class="text-blue-400 underline" href="https://en.m.wikipedia.org/wiki/Nonformal_learning"
        >non-formal education</a
      > until high school.
    </p>
    </div>

    -->



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

<template>
 <div>
  <div class="flex mb-4 text-slate-100 dark:text-slate-200">
   <div class="p-1 flex space-x-2 inline-block">
    <NuxtLink
     to="/"
     class="flex font-bold text-base text-center items-center p-2 bg-zinc-700 dark:bg-stone-900 rounded-lg w-cover h-10 border-2 border-gray-400 dark:border-gray-200 hover:border-teal-300 dark:hover:border-teal-500"
    >
     <img
      class="mr-1 w-4 h-4"
      src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1fa90.svg"
     />Home
    </NuxtLink>
   </div>

   <div class="p-1 flex space-x-2 inline-block">
    <NuxtLink
     to="/about"
     class="flex font-bold text-base text-center items-center p-2 bg-zinc-700 dark:bg-stone-900 rounded-lg w-cover h-10 border-2 border-gray-400 dark:border-gray-200 hover:border-teal-300 dark:hover:border-teal-500"
    >
     <img
      class="mr-1 w-4 h-4"
      src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4d1.svg"
     />About
    </NuxtLink>
   </div>

   <div class="p-1 flex space-x-2 inline-block">
    <NuxtLink
     to="/photos"
     class="flex font-bold text-base text-center items-center p-2 bg-zinc-700 dark:bg-stone-900 rounded-lg w-cover h-10 border-2 border-gray-400 dark:border-gray-200 hover:border-teal-300 dark:hover:border-teal-500"
    >
     <img
      class="mr-1 w-4 h-4"
      src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4bf.svg"
     />Photos
    </NuxtLink>
   </div>
  </div>

  <slot />
 </div>
</template>
<style scope></style>

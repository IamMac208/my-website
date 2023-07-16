<template>
  <div>
    <div class="flex mb-4">
      <div class="p-1 flex space-x-2 inline-block">
        <NuxtLink
          to="/"
          class="flex font-bold text-base text-center items-center p-2 bg-stone-800 rounded-lg w-cover h-10 border-2 border-zinc-500 hover:border-zinc-100"
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
          class="flex font-bold text-base text-center items-center p-2 bg-stone-800 rounded-lg w-fit h-10 border-2 border-zinc-500 hover:border-zinc-100"
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
          class="flex font-bold text-base text-center items-center p-2 bg-stone-800 rounded-lg w-fit h-10 border-2 border-zinc-500 hover:border-zinc-100"
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

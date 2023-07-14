<template>
  <div>

	  <div class="flex">
    <div class="p-1 flex space-x-2 inline-blok">
      <NuxtLink to="/" class="flex font-bold text-base text-center items-center p-4 bg-stone-800 rounded-lg w-fit h-10 border-2 border-zinc-500 hover:border-zinc-100">
     <img class="mr-1 w-6 h-6" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1fa90.svg"/>Home
      </NuxtLink>
      </div>


<div class="p-1 flex space-x-2 inline-block">
      <NuxtLink to="/about" class="flex font-bold text-base text-center items-center p-4 bg-stone-800 rounded-lg w-fit h-10 border-2 border-zinc-500 hover:border-zinc-100">
      <img class="mr-1 w-4 h-4" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4d1.svg"/>About
      </NuxtLink>


    </div>


	  </div>
 

    <slot />
  </div>
</template>
<script lang="ts">

</script>

<style scope>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s; /* Customize the transition duration */
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>





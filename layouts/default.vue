<template>
  <div>
    <div class="p-1 flex space-x-2">
      <NuxtLink to="/" class="flex font-bold text-base text-center items-center p-4 bg-stone-500 rounded-lg w-fit h-10 border-2 border-zinc-400 hover:border-zinc-100">
      <img class="mr-1 w-6 h-6" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f3e1.svg"/> Home
      </NuxtLink>





    </div>



 

    <slot />
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      showDiv: false
    };
  },
  methods: {
    toggleDiv() {
      this.showDiv = !this.showDiv; // Toggle the showDiv value
    }
  }
};
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





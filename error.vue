<template>
 <div class="text-center">
  <p class="text-md">
   The page
   <span class="font-bold">{{ $route.path }}</span> is not found.
  </p>

  <NuxtLink class="p-2 text-base rounded-md w-fit" to="/"> GO BACK </NuxtLink>
 </div>
</template>

<script setup>
const props = defineProps({
 error: Object,
})

const route = useRoute()
</script>

<style scoped>
.text-center {
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 height: 100vh;
}
</style>

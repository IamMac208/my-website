<template>
 <div class="mb-8">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
   <div v-for="(item, index) in PhotoData" :key="index">
    <div
     class="w-full max-w-md mx-auto bg-white dark:bg-neutral-700 rounded-lg shadow-md"
    >
     <div class="text-base text-gray-500 dark:text-gray-300 p-1 font-bold">
      {{ item.time }}
      <div class="text-xs font-thin">{{ item.serieID }}</div>
     </div>

     <div class="relative">
      <nuxt-img :src="item.url" quality="10" class="w-full h-48 object-cover rounded-t-lg" />


      <div class="absolute bottom-0 right-0">
    <PhotoBox :img="item.url" />
   
       </div>
     </div>

     <div class="">
      <div class="p-1 mt-0.5 text-gray-200 shadow-sm">
       <div
        class="text-xs text-stone-800 dark:text-stone-100 p-1 rounded-md font-semibold h-16 border border-zinc-500 bg-gray-100 dark:border-gray-700 dark:bg-stone-900 break-all font-bold"
       >
        {{ item.description }}
       </div>
      </div>
     </div>
    
    </div>
   </div>
  </div>
 </div>
</template>

<script lang="ts">
import PhotoBox from '@/components/PhotoBox'

export default {
 components: {
  PhotoBox,
 },

 setup() {
  const { data, error } = useFetch('/api/photos')

  if (error) {
   console.error('Error fetching data:', error)
  }

  return {
   PhotoData: data,
  }
 },
}

/*
export default {
 data() {
  setup {
const { data, pending, error, refresh } = useFetch('https://api.nuxtjs.dev/mountains',{


    this.PhotoData = data;
})

   },

  return {
   PhotoData: null

  }
 },


}
*/
</script>

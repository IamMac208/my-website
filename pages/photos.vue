<template>
 <div class="mb-8">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
   <div v-for="(item, index) in PhotoData" :key="index">

    <div class="w-full max-w-md mx-auto bg-zinc-300 dark:bg-neutral-900 border-2 rounded-lg shadow-md">
     <div class="text-base text-gray-500 dark:text-gray-300 p-1 font-bold">{{ item.time }}</div>

<PhotoBox :img="item.url">
     <img :src="item.url" class="w-full h-48 object-cover rounded-t-lg" />
</PhotoBox>


     <div class="">
      <div class="p-1 mt-0.5 text-gray-200 shadow-sm">
       <div
        class="text-xs text-stone-800 dark:text-stone-100 p-1 rounded-md font-semibold h-16 border border-zinc-500 bg-gray-300 dark:border-gray-700 dark:bg-slate-800 break-all font-bold">
        {{ item.description }}
       </div>
      </div>
     </div>
    <div class="text-xs p-1 font-thin">
       seid: {{ item.serieID }}
     </div>
    </div>
   </div>
  </div>
 </div>




</template>

<script lang="ts">
import PhotoBox from '@/components/PhotoBox';


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

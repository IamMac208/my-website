<template>
  <div class="mb-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div v-for="(item, index) in PhotoData.photos" :key="index">
        <div
          class="w-full max-w-md mx-auto bg-white border-2 border-gray-100 dark:border-gray-700 dark:bg-zinc-800 rounded-lg shadow-lg hover:scale-105 duration-300 hover:border-teal-400"
        >
          <div class="text-base text-gray-500 dark:text-gray-300 p-1 font-bold">
            {{ item.time }}
            <div class="text-xs font-thin">{{ item.serieID }}</div>
          </div>

          <div class="relative">
            <img
              :src="item.url"
              class="w-full h-48 object-cover rounded-t-lg"
            />

            <div class="absolute bottom-0 right-0 mr-1">
              <a :href="item.url">original</a>
            </div>
          </div>

          <div class="">
            <div class="p-1 mt-0.5 text-gray-200 shadow-sm">
              <div
                class="text-xs text-stone-800 dark:text-stone-100 p-1 rounded-md font-semibold h-16 border border-zinc-500 bg-gray-100 dark:border-gray-700 dark:bg-stone-900 break-all font-bold font-mono"
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
export default {
  components: {},

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
</script>

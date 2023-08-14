<template>
  <div class="grid grid-cols-1 md:grid-cols-3 px-4">
    <div class="col-span-1 md:col-span-3">
      <h1 class="text-2xl font-semibold mb-4">Todo List</h1>
    </div>

    <div v-for="(item, index) in todoData.todos">
      <div
        class="bg-gray-200 dark:bg-zinc-700 p-4 rounded-lg mb-4 col-span-1 md:col-span-1 dark:text-zinc-200 border-2 hover:scale-105 duration-300 hover:border-teal-400"
      >
        <div class="flex items-center justify-between">
          <div class="text-lg font-semibold">{{ item.title }}</div>
          <div class="text-md font-bold">
            {{ formatTime(new Date(item.datetime)) }}
          </div>
        </div>
        <p class="mt-2">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const { data, error } = useFetch('/api/todos')

    if (error) {
      console.error('Error fetching data:', error)
    }

    return {
      todoData: data,
    }
  },

  data() {
    return {
      pastDate: new Date('2023-08-11T12:00:00'),
      futureDate: new Date('2023-08-15T18:00:00'),
    }
  },

  methods: {
    formatTime(date) {
      const now = new Date()
      const diff = date - now // Get the time difference in milliseconds

      const absDiff = Math.abs(diff) // Absolute difference for future time

      const units = [
        { label: 'day', milliseconds: 24 * 60 * 60 * 1000 },
        { label: 'hour', milliseconds: 60 * 60 * 1000 },
        { label: 'minute', milliseconds: 60 * 1000 },
        { label: 'second', milliseconds: 1000 },
      ]

      if (absDiff < units[2].milliseconds) {
        return 'just now'
      }

      // Iterate through units to find the appropriate time unit
      for (const unit of units) {
        if (absDiff >= unit.milliseconds) {
          const count = Math.floor(absDiff / unit.milliseconds)
          // Construct the time direction string based on the time difference direction
          const timeDirection =
            diff >= 0
              ? `in ${count} ${unit.label}${count !== 1 ? 's' : ''}`
              : `${count} ${unit.label}${count !== 1 ? 's' : ''} ago`
          return timeDirection // Return the formatted time string
        }
      }
    }, // End of formatTime function
  }, // End of methods object
}
</script>

<!-- Export component if needed -->
<!-- export default MyComponent -->

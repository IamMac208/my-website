<template>

    
<div class="grid grid-cols-1 md:grid-cols-3 px-4">
  <div class="col-span-1 md:col-span-3">
    <h1 class="text-2xl font-semibold mb-4">Todo List</h1>
  </div>
  
  <!-- Example Todo Item -->
  <div class="bg-gray-200 dark:bg-zinc-700 p-4 rounded-lg mb-4 col-span-1 md:col-span-1 dark:text-zinc-200 hover:scale-105 duration-300">

    <div class="flex items-center justify-between">
      <div class="text-lg font-semibold">Complete Project</div>
      <div class="">2 days left</div>
    </div>
    <p class="mt-2">Finish coding the project anid perform testing.</p>
  </div>

<!-- Next todos:
	complete todo will different color from other
-->


  <!-- Repeat the Todo Item div two more times for a total of 3 columns on larger screens -->
</div>   


</template>

<script>
export default {
  data() {
    return {
      pastDate: new Date('2023-08-11T12:00:00'),
      futureDate: new Date('2023-08-15T18:00:00')
    };
  },
  methods: {
    formatTime(date) {
      const now = new Date();
      const diff = date - now; // Get the time difference in milliseconds

      const absDiff = Math.abs(diff); // Absolute difference for future time

      const units = [
        { label: 'day', milliseconds: 24 * 60 * 60 * 1000 },
        { label: 'hour', milliseconds: 60 * 60 * 1000 },
        { label: 'minute', milliseconds: 60 * 1000 },
        { label: 'second', milliseconds: 1000 }
      ];

      if (absDiff < units[2].milliseconds) {
        return 'just now';
      }

      // Iterate through units to find the appropriate time unit
      for (const unit of units) {
        if (absDiff >= unit.milliseconds) {
          const count = Math.floor(absDiff / unit.milliseconds);
          // Construct the time direction string based on the time difference direction
          const timeDirection = diff >= 0 ? `in ${count} ${unit.label}${count !== 1 ? 's' : ''}` : `${count} ${unit.label}${count !== 1 ? 's' : ''} ago`;
          return timeDirection; // Return the formatted time string
        }
      }
    } // End of formatTime function
  } // End of methods object
};
</script>

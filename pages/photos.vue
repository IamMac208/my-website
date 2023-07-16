<script lang="ts" setup></script>

<template>
  <div>
    <!-- Photo Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="w-full max-w-md mx-auto bg-gray-800 rounded-lg shadow-md">
        <div class="text-base text-gray-300 p-1">2023/4/4 15:00</div>
        <img
          src="https://mayumi.vercel.app/banner.jpg"
          alt="Photo 1"
          class="w-full h-48 object-cover rounded-t-lg"
        />
        <div class="">
          <div class="p-1 mt-0.5 text-gray-200 shadow-sm">
            <!-- Details -->
            <div
              class="text-xs text-stone-100 p-1 rounded-md h-16 border border-gray-700 bg-gray-900"
            >
              Test description
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

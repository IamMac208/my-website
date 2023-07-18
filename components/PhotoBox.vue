<template>
  <div>
    <div class="dialogue bg-dark" :class="{ 'show-dialogue': animate }">
      <div class="bg-gray-800 rounded-t-md">
 

       
          <img  class="w-72 h-60 object-cover"
          :src="imageUrl"
          alt="Avatar"
          :style="{ transform: animate ? 'rotate(360deg)' : 'none' }"
        />

        <div
          class="h-16 p-2 rounded-md border-2 border-cyan-900 bg-gray-800"
          :class="{ 'fade-in': animate }"
        >
          {{ message }}
        </div>

 <button
  class="p-2 rounded-md text-md bg-cyan-900 mt-2 right-0"
  @click="toggleAnimation"
>
  Close
</button>       

      </div>
    </div>

    <button @click="toggleAnimation">Open</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: 'It works',
      imageUrl: 'https://mayumi.vercel.app/banner.jpg',
      animate: false,
    }
  },
  methods: {
    toggleAnimation() {
      this.animate = !this.animate
    },
  },
}
</script>

<style>
.dialogue {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}

.show-dialogue {
  opacity: 1;
  pointer-events: auto;
}

.fade-in {
  animation: fade-in 0.4s ease-in-out;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

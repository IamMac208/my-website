<template>
 <div>
  <div
   @click="closeDialogue"
   class="dialogue shadow-md"
   :class="{ 'show-dialogue': animate }"
  >
   <div class="dark:bg-gray-800 rounded-md">
    <img
     class="w-72 h-60 object-cover rounded-lg"
     src="https://mayumi.vercel.app/banner.jpg"
     alt=""
     :style="{ transform: animate ? 'rotate(360deg)' : 'none' }"
    />
   </div>
  </div>

  <button @click="toggleAnimation">test</button>
 </div>
</template>

<script>
export default {
 data() {
  return {
   animate: false,
  }
 },
 methods: {
  toggleAnimation() {
   this.animate = !this.animate
  },
  closeDialogue() {
   if (this.animate) {
    this.animate = false
   }
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

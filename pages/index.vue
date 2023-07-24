<template>
 <div class="dark">
  <PhotoBox :img="'https://placehold.co/600x400'" :message="dialogueMessage">
   test
  </PhotoBox>
 </div>
</template>
<script lang="ts">
import PhotoBox from '@/components/PhotoBox.vue'

export default {
 name: 'PhotoBox',
 data() {
  return {}
 },
}
</script>

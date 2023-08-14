<template>
  <div>
    <div class="flex mb-4 text-slate-100 dark:text-slate-200">
      <div
        v-for="link in links"
        :key="link.to"
        class="p-1 flex space-x-2 inline-block"
      >
        <NuxtLink :to="link.to" :class="linkClasses">
          <img class="mr-1 w-4 h-4" :src="link.icon" />{{ link.label }}
        </NuxtLink>
      </div>
    </div>

    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkClasses:
        'flex font-bold text-base text-center items-center p-2 bg-blue-800 dark:bg-stone-900 rounded-lg w-cover h-10 border-2 border-gray-500 dark:border-gray-200 hover:border-teal-600 dark:hover:border-teal-500',
      links: [
        {
          to: '/',
          icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1fa90.svg',
          label: 'Home',
        },
        {
          to: '/about',
          icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4d1.svg',
          label: 'About',
        },
        {
          to: '/photos',
          icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4bf.svg',
          label: 'Photos',
        },
      ],
    }
  },
}
</script>

<style scope></style>

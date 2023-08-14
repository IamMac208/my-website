<template>
  <a :href="address">{{ title }}</a>
</template>

<script>
export default {
  props: {
    address: String,
    title: String,
  },
}
</script>

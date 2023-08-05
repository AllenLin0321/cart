<template>
  <div
    class="h-8 w-8 rounded-full bg-cover"
    :style="{
      backgroundImage: `url(${imageUrl})`,
    }"
  ></div>
</template>

<script>
export default {
  name: 'TheAvatar',
  props: {
    imageUrl: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <div
    class="h-8 w-8 rounded-full bg-cover"
    :style="{
      backgroundImage: `url(${imageUrl})`,
    }"
    :class="{
      small: size === 'small',
      default: size === 'default',
      medium: size === 'medium',
      large: size === 'large',
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
    size: {
      type: String,
      default: 'default',
      validator(value) {
        return ['small', 'default', 'medium', 'large'].includes(value)
      },
    },
  },
}
</script>

<style scoped>
.small {
  @apply h-6 w-6;
}
.default {
  @apply h-8 w-8;
}
.medium {
  @apply h-10 w-10;
}
.large {
  @apply h-12 w-12;
}
</style>

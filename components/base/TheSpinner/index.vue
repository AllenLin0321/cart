<template>
  <div
    class="inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-primary"
    role="status"
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
  name: 'TheSpinner',
  props: {
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

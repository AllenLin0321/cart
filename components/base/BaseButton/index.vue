<template>
  <button
    class="rounded-md w-fit h-[32px] flex items-center justify-center gap-1 px-3 py-1"
    :class="{
      contained: variant === 'contained',
      outlined: variant === 'outlined',
      containedPrimary: color === 'primary' && variant === 'contained',
      outlinedPrimary: color === 'primary' && variant === 'outlined',
      containedSecondary: color === 'secondary' && variant === 'contained',
      outlinedSecondary: color === 'secondary' && variant === 'outlined',
      containedSecondaryLight:
        color === 'secondary-light' && variant === 'contained',
      outlinedSecondaryLight:
        color === 'secondary-light' && variant === 'outlined',
      disabled,
    }"
    :disabled="disabled || loading"
    @click="onClick()"
  >
    {{ text }}
    <TheSpinner v-if="loading" class="text-white" size="small" />
  </button>
</template>

<script>
import TheSpinner from '../TheSpinner'

export default {
  name: 'BaseButton',
  components: { TheSpinner },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary', 'secondary-light'].includes(value)
      },
    },
    variant: {
      type: String,
      default: 'contained',
      validator(value) {
        return ['contained', 'outlined'].includes(value)
      },
    },
    text: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.contained {
  @apply text-white;
}
.outlined {
  @apply bg-white;
}
.containedPrimary {
  @apply bg-primary-light;
}
.outlinedPrimary {
  @apply text-primary border border-primary;
}
.containedSecondary {
  @apply bg-secondary;
}
.outlinedSecondary {
  @apply text-secondary border border-secondary;
}
.containedSecondaryLight {
  @apply bg-secondary-light text-secondary;
}
.outlinedSecondaryLight {
  @apply text-secondary-light border border-secondary-light;
}
.disabled {
  @apply text-black/[.26] bg-black/[.12] border-none cursor-not-allowed;
}
</style>

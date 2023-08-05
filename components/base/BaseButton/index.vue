<template>
  <button
    class="rounded-md w-[64px] h-[32px] flex items-center justify-center gap-1"
    @click="onClick()"
    :disabled="isLoading"
  >
    {{ text }}
    <TheSpinner v-if="isLoading" class="text-white" />
  </button>
</template>

<script>
import TheSpinner from '../TheSpinner'

export default {
  name: 'BaseButton',
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  components: { TheSpinner },
}
</script>

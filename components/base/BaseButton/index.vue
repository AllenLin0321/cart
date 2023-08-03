<template>
  <button class="rounded-md w-[64px] h-[32px]">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <button
    class="rounded-md border border-regular-blue w-[64px] h-[32px]"
    :class="classes"
  >
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
    textColor: {
      type: String,
      default: 'regular-black',
    },
    bgColor: {
      type: String,
      default: 'white',
    },
  },
  computed: {
    classes() {
      return `text-${this.textColor} bg-${this.bgColor}`
    },
  },
}
</script>

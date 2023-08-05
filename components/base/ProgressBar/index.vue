<template>
  <div class="w-full bg-[#f0f0f0] rounded-full h-2.5">
    <div
      class="bg-[#EB6767] h-2.5 rounded-full"
      :style="`width: ${this.percent}%`"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    percent: {
      type: [Number, String],
      default: 0,
    },
  },
}
</script>

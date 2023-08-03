<template>
  <div
    class="w-[280px] h-[348px] bg-white rounded-md flex flex-col cursor-pointer"
  >
    <div
      class="w-full h-[150px] bg-cover"
      :style="{
        backgroundImage:
          'url(&quot;https://thumbnails.f5ezcode.in/eyJidWNrZXQiOiJjZG4uaGlza2lvLmNvbSIsImtleSI6ImNvdXJzZXNcL2lnNWk2cG9nbmh6aHBsciIsImVkaXRzIjp7IndlYnAiOnt9LCJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJ3aWR0aCI6MzAwfX19&quot;)',
      }"
    ></div>
    <div class="p-2 flex flex-col gap-2 grow justify-between">
      <span class="text-[#454545]"
        >NUXT.js 前端開發實戰手冊前端開發前端開發前</span
      >
      <div class="flex gap-2 items-end">
        <TheAvatar :imageUrl="imageUrl" />
        <span class="text-[#8c8c8c] text-[16px]">Chris</span>
      </div>
      <div class="flex justify-between text-[#595959] text-[14px]">
        <span>剩三天</span>
        <span>已募資55%</span>
      </div>
      <ProgressBar percent="30" />
      <div class="flex gap-2 items-baseline">
        <span class="text-[22px]">$1,500</span
        ><span class="text-[14px] text-[#bfbfbf] line-through">5000</span>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from '../ProgressBar'
import TheAvatar from '../TheAvatar'

export default {
  name: 'ClassCard',
  components: { ProgressBar, TheAvatar },
  data() {
    return {
      imageUrl:
        'https://lh3.googleusercontent.com/a/AAcHTtecSYaYkILEQBj56A8K-RlQr2N5WX79bNsokb5mW9ku0Cs=s96-c?sz=250',
    }
  },
}
</script>

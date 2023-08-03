<template>
  <div class="h-full flex justify-center bg-[#f5f5f5]">
    <div class="w-3/4 py-12 flex justify-between gap-4">
      <div class="flex flex-col gap-4">
        <div class="text-[22px] text-[#434343]">募資課程</div>
        <div class="flex gap-3">
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassCard from './base/ClassCard.vue'
export default {
  name: 'TheFundraising',
  components: { ClassCard },
}
</script>

<style></style>

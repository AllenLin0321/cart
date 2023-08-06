<template>
  <div
    class="w-full lg:w-[280px] h-[348px] bg-white rounded-md flex flex-col cursor-pointer"
  >
    <div
      class="w-full h-[150px] bg-cover relative"
      :style="{
        backgroundImage: `url(${fundraisingCourse.image})`,
      }"
    >
      <div
        class="flex justify-end gap-2 absolute bottom-0 bg-black/[.3] w-full px-2 py-1"
      >
        <BookMarkIconVue class="text-white" />
        <button
          v-if="isItemInCart(fundraisingCourse.id)"
          @click="onRemoveCart(fundraisingCourse)"
        >
          <SolidCartIcon class="text-white" />
        </button>
        <button v-else @click="onAddCart(fundraisingCourse)">
          <OutlineCartIcon class="text-white" />
        </button>
      </div>
    </div>
    <div class="p-2 flex flex-col gap-2 grow justify-between">
      <span class="text-[#454545] truncate">{{ fundraisingCourse.title }}</span>
      <div class="flex gap-2 items-end">
        <TheAvatar :image-url="fundraisingCourse.lecturers[0].avatar" />
        <span class="text-gray-light-500 text-[16px]">{{
          fundraisingCourse.lecturers[0].username
        }}</span>
      </div>
      <div class="flex justify-between text-gray-light-600 text-[14px]">
        <span>剩三天</span>
        <span>已募資55%</span>
      </div>
      <ProgressBar percent="30" />
      <div class="flex gap-2 items-baseline">
        <span class="text-[22px]">{{
          numberFormat({
            number: fundraisingCourse.price,
            showDollarSign: true,
          })
        }}</span>
        <span class="text-[14px] text-gray-400 line-through">{{
          numberFormat({
            number: fundraisingCourse.fixed_price,
            showDollarSign: true,
          })
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from '../ProgressBar'
import TheAvatar from '../TheAvatar'
import OutlineCartIcon from '~/components/icons/OutlineCartIcon.vue'
import SolidCartIcon from '~/components/icons/SolidCartIcon.vue'
import BookMarkIconVue from '~/components/icons/BookMarkIcon.vue'
import { numberFormat } from '~/utils/index'

export default {
  name: 'ClassCard',
  components: {
    ProgressBar,
    TheAvatar,
    OutlineCartIcon,
    SolidCartIcon,
    BookMarkIconVue,
  },
  props: {
    fundraisingCourse: {
      type: Object,
      default: () => {},
    },
    onAddCart: {
      type: Function,
      default: () => {},
    },
    onRemoveCart: {
      type: Function,
      default: () => {},
    },
    isItemInCart: {
      type: Function,
      default: () => {},
    },
  },
  setup() {
    return { numberFormat }
  },
}
</script>

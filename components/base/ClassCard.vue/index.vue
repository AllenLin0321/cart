<template>
  <div
    class="w-[280px] h-[348px] bg-white rounded-md flex flex-col cursor-pointer"
  >
    <div
      class="w-full h-[150px] bg-cover relative"
      :style="{
        backgroundImage: `url(&quot;${fundRaisingCourse.image}&quot;)`,
      }"
    >
      <div
        class="flex justify-end gap-2 absolute bottom-0 bg-black/[.3] w-full px-2 py-1"
      >
        <BookMarkIconVue class="text-white" />
        <button
          v-if="isItemInCart(fundRaisingCourse.id)"
          @click="onRemoveCart(fundRaisingCourse)"
        >
          <SolidCartIcon class="text-white" />
        </button>
        <button v-else @click="onAddCart(fundRaisingCourse)">
          <OutlineCartIcon class="text-white" />
        </button>
      </div>
    </div>
    <div class="p-2 flex flex-col gap-2 grow justify-between">
      <span class="text-[#454545] truncate">{{ fundRaisingCourse.title }}</span>
      <div class="flex gap-2 items-end">
        <TheAvatar :image-url="imageUrl" />
        <span class="text-[#8c8c8c] text-[16px]">Chris</span>
      </div>
      <div class="flex justify-between text-[#595959] text-[14px]">
        <span>剩三天</span>
        <span>已募資55%</span>
      </div>
      <ProgressBar percent="30" />
      <div class="flex gap-2 items-baseline">
        <span class="text-[22px]">$1,500</span>
        <span class="text-[14px] text-[#bfbfbf] line-through">5000</span>
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
    fundRaisingCourse: {
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
  data() {
    return {
      imageUrl:
        'https://lh3.googleusercontent.com/a/AAcHTtecSYaYkILEQBj56A8K-RlQr2N5WX79bNsokb5mW9ku0Cs=s96-c?sz=250',
    }
  },
}
</script>

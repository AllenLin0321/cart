<template>
  <header class="bg-white h-[50px] fixed w-full shadow">
    <nav class="flex items-center justify-center h-full">
      <div class="w-3/4 h-full flex items-center justify-between">
        <div class="flex items-center gap-2 h-full">
          <!-- Company Logo -->
          <img :src="logoUrl" class="h-4 cursor-pointer" />

          <!-- Hiring Logo -->
          <img
            :src="hiringIconUrl"
            class="h-10 w-[80px] object-contain cursor-pointer"
          />
          <!-- Classes -->
          <div class="flex items-center gap-[6px] mx-3 cursor-pointer">
            <SquaresIcon />
            <span class="text-regular-black">課程</span>
          </div>
          <!-- Search -->
          <div class="flex items-center gap-[6px]">
            <GlassIcon />
            <span class="text-[#bfbfbf]">搜尋</span>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <div v-if="isLogin" class="text-regular-black cursor-pointer">
            任務版
          </div>
          <div class="text-regular-black cursor-pointer">
            {{ isLogin ? '我的課程' : '我想開課' }}
          </div>
          <CartIcon />
          <InformationIcon />
          <BaseButton
            v-if="!isLogin"
            text="登入"
            class="text-regular-blue bg-white border border-regular-blue"
          />
          <BaseButton
            v-if="!isLogin"
            text="註冊"
            class="text-white bg-regular-blue"
          />
          <div
            v-if="isLogin"
            class="h-8 w-8 rounded-full bg-cover"
            :style="{
              backgroundImage: `url('${imageUrl}')`,
            }"
          ></div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import SquaresIcon from './icons/SquaresIcon.vue'
import GlassIcon from './icons/GlassIcon.vue'
import CartIcon from './icons/CartIcon.vue'
import InformationIcon from './icons/InformationIcon.vue'
import BaseButton from './base/BaseButton'

export default {
  name: 'TheHeader',
  components: {
    SquaresIcon,
    GlassIcon,
    CartIcon,
    InformationIcon,
    BaseButton,
  },
  data() {
    return {
      logoUrl:
        'https://d2npjgpjzmbqfv.cloudfront.net/img/logo-hiskio.36e69fc.svg',
      hiringIconUrl:
        'https://d2npjgpjzmbqfv.cloudfront.net/img/header-recruit.3e1f6fd.png',
      isLogin: false,
      imageUrl:
        'https://lh3.googleusercontent.com/a/AAcHTtecSYaYkILEQBj56A8K-RlQr2N5WX79bNsokb5mW9ku0Cs=s96-c?sz=250',
    }
  },
}
</script>

<style></style>

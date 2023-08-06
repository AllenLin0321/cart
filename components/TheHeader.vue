<template>
  <header class="bg-white h-[50px] fixed w-full shadow">
    <nav class="flex items-center justify-center h-full">
      <div
        class="px-3 lg:p-0 w-full lg:w-3/4 h-full flex items-center justify-between"
        :class="{ shadow: isMenuOpen }"
      >
        <div class="flex items-center gap-2 h-full">
          <!-- Company Logo -->
          <img :src="logoUrl" class="h-[10px] lg:h-4 cursor-pointer" />

          <!-- Hiring Logo -->
          <img
            :src="hiringIconUrl"
            class="hidden lg:block h-10 w-[80px] object-contain cursor-pointer"
          />
          <!-- Classes -->
          <div
            class="items-center gap-[6px] mx-3 cursor-pointer hidden lg:flex"
          >
            <SquaresIcon class="text-gray-light-500" />
            <span class="text-gray-light-600">課程</span>
          </div>
          <!-- Search -->
          <div class="flex items-center gap-[6px]">
            <GlassIcon class="text-gray-light-500 cursor-pointer" />
            <span class="hidden lg:block text-gray-400">搜尋</span>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <div
            v-if="isLogin"
            class="hidden lg:block text-gray-light-600 cursor-pointer"
          >
            任務版
          </div>
          <div class="text-gray-light-600 cursor-pointer hidden lg:block">
            {{ isLogin ? '我的課程' : '我想開課' }}
          </div>
          <SolidCartIcon class="text-gray-light-300" />
          <InformationIcon
            class="hidden lg:block cursor-pointer text-gray-light-300"
          />
          <BaseButton
            v-if="!isLogin"
            text="登入"
            class="hidden lg:block"
            :on-click="onClickLogin"
            variant="outlined"
          />
          <BaseButton v-if="!isLogin" text="註冊" class="hidden lg:block" />
          <TheAvatar
            v-if="isLogin"
            :image-url="$store.state.user.data.avatar"
            class="hidden lg:block cursor-pointer"
          />
          <BaseButton
            v-if="isLogin"
            :on-click="onClickLogout"
            text="登出"
            class="hidden lg:block"
          ></BaseButton>
          <button v-if="isMenuOpen" @click="isMenuOpen = false">
            <CrossMarkIcon class="text-gray-light-500" />
          </button>
          <button v-else class="lg:hidden" @click="isMenuOpen = true">
            <MenuIcon class="text-gray-light-500" />
          </button>
        </div>
      </div>
    </nav>
    <div
      v-if="isMenuOpen"
      class="w-full h-screen bg-gray-light-50 p-4 flex flex-col"
    >
      <div v-if="isLogin">
        <div class="flex items-center gap-2">
          <TheAvatar
            :image-url="$store.state.user.data.avatar"
            class="cursor-pointer"
          />
          {{ $store.state.user.data.username }}
        </div>
        <hr class="my-2" />
        <div class="menu-title">我的課程</div>
        <div class="menu-title">我的抵用券</div>
        <div class="menu-title">任務版</div>
        <div class="menu-title">訂單記錄</div>
        <div class="menu-title">帳戶設定</div>
        <div class="menu-title">我開設的課</div>
        <div class="menu-title">探索課程</div>
        <hr />
        <div
          class="menu-title"
          :style="{ color: '#178FAC' }"
          @click="onClickLogout"
        >
          登出
        </div>
      </div>
      <div v-else>
        <div class="menu-title">探索課程</div>
        <div class="menu-title">企業方案</div>
        <hr class="my-2" />
        <div class="menu-title" @click="onClickLogin">登入</div>
        <div class="menu-title" :style="{ color: '#178FAC' }">註冊</div>
      </div>
    </div>
  </header>
</template>

<script>
import SquaresIcon from './icons/SquaresIcon.vue'
import GlassIcon from './icons/GlassIcon.vue'
import SolidCartIcon from './icons/SolidCartIcon.vue'
import InformationIcon from './icons/InformationIcon.vue'
import BaseButton from './base/BaseButton'
import TheAvatar from './base/TheAvatar'
import MenuIcon from './icons/MenuIcon.vue'
import CrossMarkIcon from './icons/CrossMarkIcon.vue'
import { SET_IS_DIALOG_OPEN } from '~/store/mutation-types'

export default {
  name: 'TheHeader',
  components: {
    SquaresIcon,
    GlassIcon,
    SolidCartIcon,
    InformationIcon,
    BaseButton,
    TheAvatar,
    MenuIcon,
    CrossMarkIcon,
  },
  data() {
    return {
      logoUrl:
        'https://d2npjgpjzmbqfv.cloudfront.net/img/logo-hiskio.36e69fc.svg',
      hiringIconUrl:
        'https://d2npjgpjzmbqfv.cloudfront.net/img/header-recruit.3e1f6fd.png',
      isMenuOpen: false,
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.authData.token
    },
  },
  methods: {
    onClickLogin() {
      this.$store.dispatch('fetchFundraisingCourses')
      this.$store.commit(SET_IS_DIALOG_OPEN, true)
      this.isMenuOpen = false
    },
    onClickLogout() {
      this.$store.dispatch('logout')
      this.isMenuOpen = false
    },
  },
}
</script>

<style scoped>
.menu-title {
  width: 100%;
  height: 48px;
  font-size: 16px;
  color: #434343;
  display: flex;
  align-items: center;
}

.menu-title:active {
  background: #f5f5f5;
}
</style>

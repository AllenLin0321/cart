﻿<template>
  <div
    class="p-5 lg:p-0 flex items-center justify-center fixed top-0 left-0 z-[10] w-full h-full bg-black/[.7]"
  >
    <div
      class="rounded-xl bg-white p-8 lg:p-10 w-[450px] h-90v overflow-y-auto"
      :style="{
        backgroundImage: `url(${backgroundUrl})`,
      }"
    >
      <div class="flex flex-col items-center relative">
        <button class="absolute top-[-15px] right-0" @click="onCloseDialog()">
          <CrossMarkIcon class="text-gray-light-600" />
        </button>
        <img :src="logoUrl" class="w-[120px] h-[18px]" />

        <!-- 登入 or 註冊 -->
        <div
          class="mt-5 text-[24px] lg:text-[32px] text-gray-light-300 w-full flex justify-evenly"
        >
          <span class="selectedNav cursor-pointer">登入</span>
          <span class="cursor-pointer">註冊</span>
        </div>

        <!-- 使用第三方平台登入 -->
        <div class="flex flex-col mt-6 gap-4 w-full">
          <div
            v-for="socialMedia in socialMedias"
            :key="socialMedia.id"
            class="w-full h-[48px] border flex items-center justify-center text-[16px] text-gray-light-600 rounded-lg border-gray-400"
          >
            <img
              :src="socialMedia.iconSrc"
              :alt="socialMedia.displayText"
              class="mr-3"
            />
            <span class="w-[140px]">使用{{ socialMedia.displayText }}登入</span>
          </div>
        </div>

        <form class="w-full" @submit.prevent="onAuthLogin">
          <!-- HiSKIO ID登入 -->
          <div class="flex flex-col text-[16px] text-gray-light-600 w-full">
            <span class="my-6 mx-auto">使用 HiSKIO ID 登入</span>
            <div
              class="flex gap-2 bg-gray-light-50 rounded w-full h-[40px] items-center px-4"
            >
              <UserCircleIcon class="text-gray-400" />
              <input
                v-model="account"
                type="text"
                class="bg-gray-light-50 w-full focus:outline-none"
                placeholder="請輸入 HiSKIO ID"
                autocomplete="account"
              />
            </div>
            <span class="error">{{
              $store.state.authData.accountErrorMessage
            }}</span>
            <div
              class="flex gap-2 bg-gray-light-50 rounded w-full h-[40px] items-center px-4 mt-3"
            >
              <LockCloseIcon class="text-gray-400" />
              <input
                v-model="password"
                type="password"
                class="bg-gray-light-50 w-full focus:outline-none"
                placeholder="請輸入登入密碼"
                autocomplete="current-password"
              />
            </div>
            <span class="error">{{
              $store.state.authData.passwordErrorMessage
            }}</span>
          </div>

          <!-- 同意事項 -->
          <div class="w-full flex items-center gap-2 mt-5">
            <input type="checkbox" checked class="accent-primary" />
            <p class="text-[10px] lg:text-[14px] text-gray-light-500">
              <span
                >登入註冊即代表您同意<a
                  href="https://hiskio.com/user-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="cursor-pointer underline"
                  >使用者</a
                >及<a
                  href="https://hiskio.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="cursor-pointer underline"
                  >隱私權政策</a
                ></span
              >
            </p>
          </div>

          <!-- 登入按鈕 -->
          <BaseButton
            text="登入"
            class="!w-full mt-5 h-[40px]"
            type="submit"
            :loading="$store.state.user.isLoading"
          ></BaseButton>
        </form>

        <!-- 忘記密碼 -->
        <span class="text-[16px] text-gray-light-500 mt-5 cursor-pointer"
          >忘記密碼</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useStore } from '@nuxtjs/composition-api'
import CrossMarkIcon from './icons/CrossMarkIcon.vue'
import LockCloseIcon from './icons/LockCloseIcon.vue'
import UserCircleIcon from './icons/UserCircleIcon.vue'
import BaseButton from './base/BaseButton'
import { SET_IS_DIALOG_OPEN } from '~/store/mutation-types'

export default {
  name: 'LoginDialog',
  components: {
    CrossMarkIcon,
    UserCircleIcon,
    LockCloseIcon,
    BaseButton,
  },
  setup() {
    const store = useStore()
    const logoUrl = ref(
      'https://d2npjgpjzmbqfv.cloudfront.net/img/logo-hiskio.36e69fc.svg'
    )
    const socialMedias = reactive([
      {
        id: 'facebook',
        iconSrc: '/icon-facebook.svg',
        displayText: 'Facebook',
      },
      {
        id: 'google',
        iconSrc: '/icon-google.svg',
        displayText: 'Google',
      },
      {
        id: 'github',
        iconSrc: '/icon-github.svg',
        displayText: 'Github',
      },
      {
        id: 'linkedin',
        iconSrc: '/icon-linkedin.svg',
        displayText: 'LinkedIn',
      },
    ])
    const backgroundUrl = ref(
      'https://d2npjgpjzmbqfv.cloudfront.net/img/login.d8327b5.png'
    )
    const account = ref('')
    const password = ref('')

    const onCloseDialog = () => {
      store.commit(SET_IS_DIALOG_OPEN, false)
    }

    const onAuthLogin = () => {
      store.dispatch('login', {
        account: account.value,
        password: password.value,
        confirm: true,
      })
    }

    return {
      logoUrl,
      socialMedias,
      backgroundUrl,
      account,
      password,
      onCloseDialog,
      onAuthLogin,
    }
  },
}
</script>

<style>
.selectedNav {
  color: #42a4bc;
  text-decoration: underline;
  text-underline-offset: 8px;
}

.error {
  font-size: 12px;
  color: red;
  margin-top: 2px;
}
</style>

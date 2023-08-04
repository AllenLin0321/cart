<template>
  <div
    class="flex items-center justify-center fixed top-0 left-0 z-[10] w-full h-full bg-black/[.7]"
  >
    <div
      class="rounded-xl bg-white p-10 w-[450px] h-90v overflow-y-auto"
      :style="{
        backgroundImage: `url(https://d2npjgpjzmbqfv.cloudfront.net/img/login.d8327b5.png)`,
      }"
    >
      <div class="flex flex-col items-center relative">
        <button class="absolute top-[-15px] right-0" @click="onCloseDialog()">
          <CrossMarkVue class="text-[#595959]" />
        </button>
        <img :src="logoUrl" class="w-[120px] h-[18px]" />

        <!-- 登入 or 註冊 -->
        <div class="mt-5 text-[32px] text-[#D9D9D9] w-full flex justify-evenly">
          <span class="selectedNav cursor-pointer">登入</span>
          <span class="cursor-pointer">註冊</span>
        </div>

        <!-- 使用第三方平台登入 -->
        <div class="flex flex-col mt-6 gap-4 w-full">
          <div
            v-for="socialMedia in socialMedias"
            :key="socialMedia.id"
            class="w-full h-[48px] border flex items-center justify-center text-[16px] text-[#595959] rounded-lg border-[#BFBFBF]"
          >
            <img
              :src="socialMedia.iconSrc"
              :alt="socialMedia.displayText"
              class="mr-3"
            />
            <span class="w-[140px]">使用{{ socialMedia.displayText }}登入</span>
          </div>
        </div>

        <form @submit.prevent="onAuthLogin">
          <!-- HiSKIO ID登入 -->
          <div class="flex flex-col text-[16px] text-[#595959] w-full">
            <span class="my-6 mx-auto">使用 HiSKIO ID 登入</span>
            <div
              class="flex gap-2 bg-[#fafafa] rounded w-full h-[40px] items-center px-4"
            >
              <UserCircleIcon class="text-[#bfbfbf]" />
              <input
                v-model="account"
                type="text"
                class="bg-[#fafafa] w-full focus:outline-none"
                placeholder="請輸入 HiSKIO ID"
                autocomplete="account"
              />
            </div>
            <span class="error">{{
              $store.state.authData.accountErrorMessage
            }}</span>
            <div
              class="flex gap-2 bg-[#fafafa] rounded w-full h-[40px] items-center px-4 mt-3"
            >
              <LockCloseIcon class="text-[#bfbfbf]" />
              <input
                v-model="password"
                type="password"
                class="bg-[#fafafa] w-full focus:outline-none"
                placeholder="請輸入登入密碼"
                autocomplete="current-password"
              />
            </div>
            <span class="error">{{
              $store.state.authData.passwordErrorMessage
            }}</span>
          </div>

          <!-- 同意事項 -->
          <div class="w-full flex items-center gap-2 px-4 mt-5">
            <input type="checkbox" checked />
            <p class="text-[14px] text-[#8C8C8C]">
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
            class="bg-[#42A4BC] text-white w-full mt-5 h-[40px]"
            type="submit"
          />
        </form>

        <!-- 忘記密碼 -->
        <span class="text-[16px] text-[#8C8C8C] mt-5 cursor-pointer"
          >忘記密碼</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import CrossMarkVue from './icons/CrossMark.vue'
import LockCloseIcon from './icons/LockCloseIcon.vue'
import UserCircleIcon from './icons/UserCircleIcon.vue'
import BaseButton from './base/BaseButton'

export default {
  name: 'LoginDialog',
  components: { CrossMarkVue, UserCircleIcon, LockCloseIcon, BaseButton },
  data() {
    return {
      logoUrl:
        'https://d2npjgpjzmbqfv.cloudfront.net/img/logo-hiskio.36e69fc.svg',
      socialMedias: [
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
      ],
      account: '',
      password: '',
    }
  },
  methods: {
    onCloseDialog() {
      this.$store.commit('setIsDialogOpen', false)
    },
    onAuthLogin() {
      this.$store.dispatch('login', {
        account: this.account,
        password: this.password,
        confirm: true,
      })
    },
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

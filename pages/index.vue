<template>
  <div class="flex flex-col">
    <TheHeader />
    <div
      class="h-[calc(100vh-50px)] mt-[50px] flex flex-col"
      :class="{
        'overflow-hidden': isDialogOpen,
      }"
    >
      <TheCart />
      <TheFundraising />
      <LoginDialogVue v-if="isDialogOpen" />
    </div>
    <ScreenLoading v-if="isScreenLoading" />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheCart from '../components/TheCart.vue'
import TheFundraising from '../components/TheFundraising.vue'
import LoginDialogVue from '../components/LoginDialog.vue'
import ScreenLoading from '~/components/base/ScreenLoading'
import { SET_AUTH_TOKEN, SET_CART_ITEMS } from '~/store/mutation-types'

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheCart,
    TheFundraising,
    LoginDialogVue,
    ScreenLoading,
  },
  computed: {
    isDialogOpen() {
      return this.$store.state.isDialogOpen
    },
    isScreenLoading() {
      return this.$store.state.isScreenLoading
    },
  },
  mounted() {
    this.$store.dispatch('fetchFundraisingCourses')
    const token = localStorage.getItem('hiskioMember')
    const cart = localStorage.getItem('hiskioCart')
    if (token) {
      this.$store.commit(SET_AUTH_TOKEN, token)
      this.$store.dispatch('fetchUser', token)
    }
    if (cart) {
      this.$store.commit(SET_CART_ITEMS, JSON.parse(cart))
    }
  },
}
</script>

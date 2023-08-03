<template>
  <div class="flex flex-col">
    <TheHeader />
    <div
      class="h-[calc(100vh-50px)] mt-[50px] flex flex-col"
      :class="{
        'overflow-hidden': $store.state.isDialogOpen,
      }"
    >
      <TheCart />
      <TheFundraising />
      <LoginDialogVue v-if="$store.state.isDialogOpen" />
    </div>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheCart from '../components/TheCart.vue'
import TheFundraising from '../components/TheFundraising.vue'
import LoginDialogVue from '../components/LoginDialog.vue'

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheCart,
    TheFundraising,
    LoginDialogVue,
  },
}
</script>

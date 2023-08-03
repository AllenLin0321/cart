<template>
  <div class="flex flex-col">
    <TheHeader />
    <div class="h-[calc(100vh-50px)] mt-[50px] flex flex-col">
      <TheCart />
      <TheFundraising />
    </div>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheCart from '../components/TheCart.vue'
import TheFundraising from '../components/TheFundraising.vue'

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheCart,
    TheFundraising,
  },
}
</script>

<template>
  <div class="h-screen">
    <TheHeader />
    <TheCart />
    <TheFundraising />
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

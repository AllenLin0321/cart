<template>
  <div class="h-full flex justify-center bg-[#f5f5f5]">
    <div class="w-3/4 py-12 flex justify-between gap-4">
      <div class="flex flex-col gap-4 w-full">
        <div class="text-[22px] text-[#434343]">募資課程</div>
        <TheSpinner v-if="isLoading" />
        <div v-else class="flex gap-3 max-w-full overflow-auto">
          <div
            v-for="(fundraisingCourse, index) in fundraisingCourses"
            :key="index"
          >
            <ClassCard
              :fundraising-course="fundraisingCourse"
              :on-add-cart="onAddCart"
              :on-remove-cart="onRemoveCart"
              :is-item-in-cart="isItemInCart"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassCard from './base/ClassCard.vue'
import TheSpinner from '~/components/base/TheSpinner'

export default {
  name: 'TheFundraising',
  components: { ClassCard, TheSpinner },
  computed: {
    fundraisingCourses() {
      return this.$store.state.fundraisingCourses.data
    },
    isLoading() {
      return this.$store.state.fundraisingCourses.isLoading
    },
  },
  methods: {
    isItemInCart(id) {
      return this.$store.getters.isItemInCart(id)
    },
    onAddCart(fundraisingCourse) {
      this.$store.dispatch('updateCartItems', { id: fundraisingCourse.id })
    },
    onRemoveCart(fundraisingCourse) {
      this.$store.dispatch('removeCartItems', { id: fundraisingCourse.id })
    },
  },
}
</script>

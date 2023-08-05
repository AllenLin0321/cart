<template>
  <div class="h-full flex justify-center bg-[#f5f5f5]">
    <div class="w-full lg:w-3/4 p-3 lg:py-12 flex justify-between gap-4">
      <div class="flex flex-col gap-4 w-full">
        <div class="text-[22px] text-[#434343]">募資課程</div>
        <TheSpinner v-if="isLoading" />
        <!-- Web 樣式 -->
        <div
          v-else
          class="hidden lg:flex gap-3 max-w-full overflow-auto flex-wrap lg:flex-nowrap"
        >
          <ClassCard
            v-for="fundraisingCourse in fundraisingCourses"
            :key="fundraisingCourse.id"
            :fundraising-course="fundraisingCourse"
            :on-add-cart="onAddCart"
            :on-remove-cart="onRemoveCart"
            :is-item-in-cart="isItemInCart"
          />
        </div>

        <!-- mWeb 樣式 -->
        <div class="flex flex-col lg:hidden gap-4">
          <div
            v-for="fundraisingCourse in fundraisingCourses"
            :key="fundraisingCourse.id"
            class="w-full min-h-[126px] bg-white shadow p-2"
          >
            <div class="flex flex-col gap-2">
              <div class="w-full flex justify-between">
                <div class="flex gap-2 w-4/5">
                  <img
                    :src="fundraisingCourse.image"
                    class="w-[140px] h-[76px]"
                  />
                  <div class="flex flex-col gap-3 w-[110px]">
                    <span class="text-[14px] text-[#595959]">已募資55%</span>
                    <ProgressBar percent="30" />
                    <div class="flex gap-2">
                      <span class="text-[14px]">{{
                        numberFormat({
                          number: fundraisingCourse.price,
                          showDollarSign: true,
                        })
                      }}</span>
                      <span class="text-[14px] text-[#bfbfbf] line-through">{{
                        numberFormat({
                          number: fundraisingCourse.fixed_price,
                          showDollarSign: true,
                        })
                      }}</span>
                    </div>
                  </div>
                </div>
                <TheAvatar
                  :image-url="fundraisingCourse.lecturers[0].avatar"
                  class="w-[23px] h-[23px]"
                />
              </div>
              <div class="w-full truncate">{{ fundraisingCourse.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassCard from './base/ClassCard.vue'
import ProgressBar from './base/ProgressBar'
import TheAvatar from './base/TheAvatar'
import TheSpinner from '~/components/base/TheSpinner'
import { numberFormat } from '~/utils/index'

export default {
  name: 'TheFundraising',
  components: { ClassCard, TheSpinner, ProgressBar, TheAvatar },
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
    numberFormat,
  },
}
</script>

<template>
  <div class="h-full flex justify-center bg-[#f5f5f5]">
    <div class="w-full lg:w-3/4 p-3 lg:py-12 flex justify-between gap-4">
      <div class="flex flex-col gap-4 w-full">
        <div class="text-[22px] text-gray-light-700">募資課程</div>
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
                    <span class="text-[14px] text-gray-light-600"
                      >已募資55%</span
                    >
                    <ProgressBar percent="30" />
                    <div class="flex gap-2">
                      <span class="text-[14px]">{{
                        numberFormat({
                          number: fundraisingCourse.price,
                          showDollarSign: true,
                        })
                      }}</span>
                      <span class="text-[14px] text-gray-400 line-through">{{
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
import { computed } from 'vue'
import { useStore } from '@nuxtjs/composition-api'
import ClassCard from './base/ClassCard.vue'
import ProgressBar from './base/ProgressBar'
import TheAvatar from './base/TheAvatar'
import TheSpinner from '~/components/base/TheSpinner'
import { numberFormat } from '~/utils/index'

export default {
  name: 'TheFundraising',
  components: { ClassCard, TheSpinner, ProgressBar, TheAvatar },
  setup() {
    const store = useStore()
    const fundraisingCourses = computed(
      () => store.state.fundraisingCourses.data
    )
    const isLoading = computed(() => store.state.fundraisingCourses.isLoading)

    const isItemInCart = (id) => {
      return store.getters.isItemInCart(id)
    }
    const onAddCart = (fundraisingCourse) => {
      store.dispatch('updateCartItems', { id: fundraisingCourse.id })
    }
    const onRemoveCart = (fundraisingCourse) => {
      store.dispatch('removeCartItems', { id: fundraisingCourse.id })
    }

    return {
      numberFormat,
      fundraisingCourses,
      isLoading,
      isItemInCart,
      onAddCart,
      onRemoveCart,
    }
  },
}
</script>

<template>
  <div class="h-full flex justify-center bg-zinc-50">
    <div
      class="p-3 py-2 w-full flex-wrap lg:flex-nowrap lg:w-3/4 lg:py-12 flex justify-between gap-4"
    >
      <div class="w-full lg:w-2/3 flex flex-col gap-3">
        <span class="text-[20px] lg:text-[24px]">購物車</span>
        <img
          v-if="!cartItems || cartItems?.length === 0"
          src="~/static/img-EmptyCart.png"
          alt="empty-cart"
          class="w-2/3 h-2/3"
        />

        <!-- Web 購物車樣式 -->
        <div
          v-else
          class="hidden lg:flex w-full bg-white shadow-lg flex-col divide-y"
        >
          <!-- Items Header -->
          <div
            class="h-[50px] flex px-2 py-1 items-end text-gray-light-500 text-[16px]"
          >
            <div class="w-1/2">項目</div>
            <div class="w-1/4">售價</div>
            <div class="w-1/4">結帳金額</div>
          </div>
          <!-- Items -->
          <div class="max-h-[300px] overflow-auto divide-y">
            <div
              v-for="cartItem in cartItems"
              :key="cartItem.id"
              class="h-[108px] p-2 flex items-center flex-wrap"
            >
              <div class="w-1/2 flex item-center gap-2 pr-8">
                <div
                  class="min-w-[120px] h-[68px] bg-cover rounded-lg"
                  :style="{
                    backgroundImage: `url(${cartItem.image})`,
                  }"
                ></div>
                <span class="text-[16px]">{{ cartItem.name }}</span>
              </div>
              <div class="w-1/4 text-gray-light-500">
                {{ numberFormat({ number: cartItem.subtotal }) }}
              </div>
              <div class="w-1/4 flex gap-4">
                <div class="w-1/2 text-gray-light-600">
                  {{ numberFormat({ number: cartItem.total }) }}
                </div>
                <button @click="onRemoveCart(cartItem.id)">
                  <TrashIcon class="cursor-pointer text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- mWeb購物車樣式 -->
        <div class="flex flex-col lg:hidden w-full shadow divide-y">
          <div
            v-for="cartItem in cartItems"
            :key="cartItem.id"
            class="bg-white p-1 flex flex-col gap-2"
          >
            <div class="flex gap-2 justify-between">
              <div class="flex gap-3 items-center">
                <img
                  :src="cartItem.image"
                  class="w-[62px] h-[34px] bg-cover"
                  :alt="cartItem.name"
                />
                <span class="text-gray-light-600 text-[14px]">
                  {{ cartItem.name }}
                </span>
              </div>
              <button @click="onRemoveCart(cartItem.id)">
                <TrashIcon class="cursor-pointer text-gray-400" />
              </button>
            </div>
            <div class="w-full flex justify-between">
              <span class="text-gray-light-500">
                {{ numberFormat({ number: cartItem.subtotal }) }}
              </span>
              <span class="text-gray-light-600">
                {{ numberFormat({ number: cartItem.total }) }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/3 gap-3 flex flex-col">
        <span class="text-[20px] lg:text-[24px]">小計</span>
        <div
          class="w-full lg:h-[330px] lg:min-w-[380px] shadow-lg bg-white p-2 flex flex-col gap-2"
        >
          <div class="text-gray-light-500 text-[16px]">輸入折扣碼</div>
          <div class="flex gap-2">
            <input
              type="text"
              class="border border-gray-400 grow rounded focus:outline-gray-light-500 p-2"
            />
            <BaseButton
              class="hidden lg:block h-full"
              color="secondary-light"
              variant="contained"
              text="確定"
            />
          </div>
          <div class="flex gap-1 items-center cursor-pointer border-b py-3">
            <span
              class="text-gray-light-600 text-[18px] underline underline-offset-4"
              >選擇抵用卷</span
            >
            <ArrowRightIcon class="cursor-pointer" />
          </div>
          <div class="flex justify-between">
            <span class="text-gray-light-500 text-[16px]">金額</span>
            <span class="text-gray-light-600 text-[14px]">{{
              numberFormat({ number: cartSubtotal, showDollarSign: true })
            }}</span>
          </div>

          <span class="text-gray-light-700 text-[28px] self-end">{{
            numberFormat({ number: cartTotal, showDollarSign: true })
          }}</span>

          <BaseButton
            text="前往結賬"
            class="!w-full h-[40px]"
            color="secondary"
            variant="contained"
          />
          <span class="text-[12px] text-gray-light-500 mt-4"
            >點擊上方按鈕即表示您已閱讀並同意「 HiSKIO購買與退費政策」</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from '@nuxtjs/composition-api'
import { numberFormat } from '../utils'
import TrashIcon from './icons/TrashIcon.vue'
import BaseButton from './base/BaseButton'
import ArrowRightIcon from './icons/ArrowRightIcon.vue'

export default {
  name: 'TheCart',
  components: { TrashIcon, BaseButton, ArrowRightIcon },
  setup() {
    const store = useStore()
    const cartItems = computed(() => store.state.cart.data)
    const cartSubtotal = computed(() =>
      store.state.cart.data?.reduce((accu, curr) => {
        return accu + curr.subtotal
      }, 0)
    )
    const cartTotal = computed(() =>
      store.state.cart.data?.reduce((accu, curr) => {
        return accu + curr.total
      }, 0)
    )

    const onRemoveCart = (id) => {
      store.dispatch('removeCartItems', { id })
    }

    return { cartItems, cartSubtotal, cartTotal, numberFormat, onRemoveCart }
  },

  methods: {},
}
</script>

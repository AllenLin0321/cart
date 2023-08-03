<template>
  <div class="h-full flex justify-center bg-zinc-50">
    <div class="w-3/4 py-12 flex justify-between gap-4">
      <div class="w-2/3 flex flex-col gap-3">
        <span class="text-[24px]">購物車</span>
        <div class="w-full bg-white shadow-lg flex flex-col divide-y">
          <!-- Items Header -->
          <div
            class="h-[50px] flex px-2 py-1 items-end text-light-gray text-[16px]"
          >
            <div class="w-1/2">項目</div>
            <div class="w-1/4">售價</div>
            <div class="w-1/4">結帳金額</div>
          </div>
          <!-- Items -->
          <div class="max-h-[300px] overflow-auto">
            <div class="h-[108px] p-2 flex items-center">
              <div class="w-1/2 flex item-center gap-2 pr-8">
                <div
                  class="min-w-[120px] h-[68px] bg-cover rounded-lg"
                  :style="{
                    backgroundImage: `url(&quot;https://thumbnails.f5ezcode.in/eyJidWNrZXQiOiJjZG4uaGlza2lvLmNvbSIsImtleSI6ImNvdXJzZXNcL2lnNWk2cG9nbmh6aHBsciIsImVkaXRzIjp7IndlYnAiOnt9LCJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJ3aWR0aCI6MzAwfX19&quot;);`,
                  }"
                ></div>
                <span>SQL Server實戰效能調校第四部曲：縱橫交易處理</span>
              </div>
              <div class="w-1/4 text-[#8c8c8c]">
                {{ numberFormat({ number: 1900 }) }}
              </div>
              <div class="w-1/4 flex gap-4">
                <div class="w-1/2 text-[#595959]">
                  {{ numberFormat({ number: 1900 }) }}
                </div>
                <TrashIcon class="cursor-pointer text-[#bfbfbf]" />
              </div>
            </div>
            <div class="h-[108px] p-2 flex items-center">
              <div class="w-1/2 flex item-center gap-2 pr-8">
                <div
                  class="min-w-[120px] h-[68px] bg-cover rounded-lg"
                  :style="{
                    backgroundImage: `url(&quot;https://thumbnails.f5ezcode.in/eyJidWNrZXQiOiJjZG4uaGlza2lvLmNvbSIsImtleSI6ImNvdXJzZXNcL2lnNWk2cG9nbmh6aHBsciIsImVkaXRzIjp7IndlYnAiOnt9LCJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJ3aWR0aCI6MzAwfX19&quot;);`,
                  }"
                ></div>
                <span>SQL Server實戰效能調校第四部曲：縱橫交易處理</span>
              </div>
              <div class="w-1/4 text-[#8c8c8c]">
                {{ numberFormat({ number: 1900 }) }}
              </div>
              <div class="w-1/4 flex gap-4">
                <div class="w-1/2 text-[#595959]">
                  {{ numberFormat({ number: 1900 }) }}
                </div>
                <div class="w-1/8">
                  <TrashIcon class="cursor-pointer text-[#bfbfbf]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/3 gap-3 flex flex-col">
        <span class="text-[24px]">小計</span>
        <div
          class="w-full h-[330px] min-w-[380px] shadow-lg bg-white p-2 flex flex-col gap-2"
        >
          <div class="text-[#8c8c8c] text-[16px]">輸入折扣碼</div>
          <div class="flex gap-2">
            <input type="text" class="border border-[#bfbfbf] grow rounded" />
            <BaseButton class="text-[#e34a4a] bg-[#ffe5e5]" text="確定" />
          </div>
          <div class="flex gap-1 items-center cursor-pointer border-b py-3">
            <span
              class="text-[#595959] text-[18px] underline underline-offset-4"
              >選擇抵用卷</span
            >
            <ArrowRightIcon class="cursor-pointer" />
          </div>
          <div class="flex justify-between">
            <span class="text-[#8c8c8c] text-[16px]">金額</span>
            <span class="text-[#595959] text-[14px]">{{
              numberFormat({ number: 10800, showDollarSign: true })
            }}</span>
          </div>

          <span class="text-[#434343] text-[28px] self-end">{{
            numberFormat({ number: 10800, showDollarSign: true })
          }}</span>

          <BaseButton
            text="前往結賬"
            class="bg-[#e34a4a] text-white w-full h-[40px]"
          />
          <span class="text-[12px] text-[#8c8c8c] mt-4"
            >點擊上方按鈕即表示您已閱讀並同意「 HiSKIO購買與退費政策」</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { numberFormat } from '../utils'
import TrashIcon from './icons/TrashIcon.vue'
import BaseButton from './base/BaseButton'
import ArrowRightIcon from './icons/ArrowRightIcon.vue'
export default {
  name: 'TheCart',
  components: { TrashIcon, BaseButton, ArrowRightIcon },
  methods: {
    numberFormat,
  },
}
</script>

<style></style>

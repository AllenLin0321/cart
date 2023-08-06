import { mount } from '@vue/test-utils'
import BaseButton from '@/components/base/BaseButton'

describe('BaseButton', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BaseButton, {
      propsData: {
        text: 'Button',
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})

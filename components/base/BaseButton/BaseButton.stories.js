import BaseButton from './index'
export default {
  title: 'Base/Button',
  component: BaseButton,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
      defaultValue: 'primary',
    },
    round: { control: 'boolean' },
    text: {
      control: 'text',
      defaultValue: 'Button',
    },
  },
}

export const Button = (arg, { argTypes }) => ({
  components: { BaseButton },
  props: Object.keys(argTypes),
  template: '<BaseButton v-bind="$props" />',
})

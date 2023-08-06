import BaseButton from './index'

export default {
  title: 'Base/Button',
  component: BaseButton,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined'],
      },
      defaultValue: 'contained',
    },
    text: {
      control: 'text',
      defaultValue: 'Button',
    },
  },
}

export const Primary = (arg, { argTypes }) => ({
  components: { BaseButton },
  props: Object.keys(argTypes),
  template: '<BaseButton  color="primary" v-bind="$props" />',
})

export const Secondary = (arg, { argTypes }) => ({
  components: { BaseButton },
  props: Object.keys(argTypes),
  template: '<BaseButton  color="secondary" v-bind="$props" />',
})

export const SecondaryLight = (arg, { argTypes }) => ({
  components: { BaseButton },
  props: Object.keys(argTypes),
  template: '<BaseButton  color="secondary-light" v-bind="$props" />',
})

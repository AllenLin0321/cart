import TheSpinner from './index'
export default {
  title: 'Base/Spinner',
  component: TheSpinner,
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

export const Spinner = (arg, { argTypes }) => ({
  components: { TheSpinner },
  props: Object.keys(argTypes),
  template: '<TheSpinner v-bind="$props" />',
})

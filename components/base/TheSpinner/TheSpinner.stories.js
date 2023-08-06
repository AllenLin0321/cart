import TheSpinner from './index'
export default {
  title: 'Base/Spinner',
  component: TheSpinner,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'default', 'medium', 'large'],
      },
      defaultValue: 'default',
    },
  },
}

export const Spinner = (arg, { argTypes }) => ({
  components: { TheSpinner },
  props: Object.keys(argTypes),
  template: '<TheSpinner v-bind="$props" />',
})

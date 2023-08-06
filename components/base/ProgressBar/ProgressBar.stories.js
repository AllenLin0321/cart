import TheProgressBar from './index'
export default {
  title: 'Base/ProgressBar',
  component: TheProgressBar,
  argTypes: {
    percent: {
      control: 'number',
      defaultValue: '50',
    },
  },
}

export const ProgressBar = (arg, { argTypes }) => ({
  components: { TheProgressBar },
  props: Object.keys(argTypes),
  template: '<TheProgressBar v-bind="$props" />',
})

import TheScreenLoading from './index'
export default {
  title: 'Base/ScreenLoading',
  component: TheScreenLoading,
}

export const ScreenLoading = (arg) => ({
  components: { TheScreenLoading },
  template: '<TheScreenLoading v-bind="$props" />',
})

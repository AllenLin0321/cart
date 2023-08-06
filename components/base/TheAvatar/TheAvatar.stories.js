import TheAvatar from './index'
export default {
  title: 'Base/Avatar',
  component: TheAvatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'default', 'medium', 'large'],
      },
      defaultValue: 'default',
    },
    imageUrl: {
      control: 'text',
      defaultValue: 'https://mui.com/static/images/avatar/2.jpg',
    },
  },
}

export const Avatar = (arg, { argTypes }) => ({
  components: { TheAvatar },
  props: Object.keys(argTypes),
  template: '<TheAvatar v-bind="$props" />',
})

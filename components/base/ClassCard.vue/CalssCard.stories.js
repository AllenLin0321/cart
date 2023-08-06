import TheClassCard from './index'
export default {
  title: 'Base/ClassCard',
  component: TheClassCard,
  parameters: {
    backgrounds: {
      default: 'gray-light',
      values: [{ name: 'gray-light', value: '#f5f5f5' }],
    },
  },
  argTypes: {
    fundraisingCourse: {
      control: 'object',
      defaultValue: {
        id: '1',
        image:
          'https://thumbnails.f5ezcode.in/eyJidWNrZXQiOiJjZG4uaGlza2lvLmNvbSIsImtleSI6ImNvdXJzZXNcL2ltdXMycXRnd2RjY3pkZiIsImVkaXRzIjp7InBuZyI6eyJxdWFsaXR5Ijo4MH19fQ==',
        title: 'hello',
        lecturers: [
          {
            avatar:
              'https://thumbnails.f5ezcode.in/eyJidWNrZXQiOiJjZG4uaGlza2lvLmNvbSIsImtleSI6ImltYWdlc1wvYXZhdGFyXC95bWs4MzJ3b213YmhtcW4iLCJlZGl0cyI6eyJwbmciOnsicXVhbGl0eSI6ODB9fX0',
            username: 'sdjkfl',
          },
        ],
        price: 100,
        fixed_price: 200,
      },
    },
  },
}

export const ClassCard = (arg, { argTypes }) => ({
  components: { TheClassCard },
  props: Object.keys(argTypes),
  template: '<TheClassCard v-bind="$props" />',
})

import {
  getGeneralCoursesApi,
  authLoginApi,
  getUserApi,
  authLogoutApi,
  updateCartApi,
} from '../server/api'
import * as mutationTypes from './mutation-types'

const API_COMMON_PROPERTIES = {
  isLoading: false,
  isError: false,
  errorMessage: '',
}

export const state = () => ({
  isDialogOpen: false,
  fundraisingCourses: {
    ...API_COMMON_PROPERTIES,
    data: [],
  },
  authData: {
    ...API_COMMON_PROPERTIES,
    token: null,
    accountErrorMessage: '',
    passwordErrorMessage: '',
  },
  cart: {
    ...API_COMMON_PROPERTIES,
    data: [],
    subtotal: 0,
    total: 0,
  },
  user: {
    ...API_COMMON_PROPERTIES,
    data: {},
  },
})

export const getters = {
  isItemInCart: (state) => (id) => {
    return (
      state.cart.data.findIndex((item) => {
        return item.id * 1 === id * 1
      }) >= 0
    )
  },
}

export const mutations = {
  [mutationTypes.SET_IS_DIALOG_OPEN](state, isDialogOpen) {
    state.isDialogOpen = isDialogOpen
  },
  [mutationTypes.SET_FUNDRAISING_COURSES](state, fundraisingCourses) {
    state.fundraisingCourses.data = fundraisingCourses
  },
  [mutationTypes.SET_AUTH_TOKEN](state, token) {
    state.authData.token = token
    state.isDialogOpen = false
  },
  [mutationTypes.SET_LOADING_STATUS](state, { stateKey, isLoading }) {
    state[stateKey].isLoading = isLoading
  },
  [mutationTypes.SET_USER_DATA](state, payload) {
    state.user.data = payload
  },
  [mutationTypes.SET_LOGIN_ERROR](
    state,
    { accountErrorMessage, passwordErrorMessage }
  ) {
    state.authData.accountErrorMessage = accountErrorMessage
    state.authData.passwordErrorMessage = passwordErrorMessage
  },
  [mutationTypes.SET_CART_ITEMS](state, payload) {
    state.cart.data = payload.data
    state.cart.subtotal = payload.subtotal
    state.cart.total = payload.total
  },
}

export const actions = {
  async fetchFundraisingCourses({ commit, app }) {
    console.log('app: ', app)
    try {
      commit(mutationTypes.SET_LOADING_STATUS, {
        stateKey: 'fundraisingCourses',
        isLoading: true,
      })
      const res = await getGeneralCoursesApi('arrival')
      commit(mutationTypes.SET_FUNDRAISING_COURSES, res.data)
    } catch (error) {
    } finally {
      commit(mutationTypes.SET_LOADING_STATUS, {
        stateKey: 'fundraisingCourses',
        isLoading: false,
      })
    }
  },
  async login({ commit, dispatch }, payload) {
    try {
      const { data } = await authLoginApi(payload)
      localStorage.setItem('hiskioMember', data.access_token)
      commit(mutationTypes.SET_AUTH_TOKEN, data.access_token)
      await dispatch('fetchUser', data.access_token)
    } catch (error) {
      const { message } = error?.response?.data
      let accountErrorMessage, passwordErrorMessage
      if ('account' in message) {
        accountErrorMessage = message.account[0]
      }
      if ('password' in message) {
        passwordErrorMessage = message.password[0]
      }

      commit(mutationTypes.SET_LOGIN_ERROR, {
        accountErrorMessage,
        passwordErrorMessage,
      })
    } finally {
      commit(mutationTypes.SET_LOADING_STATUS, {
        stateKey: 'fundraisingCourses',
        isLoading: false,
      })
    }
  },
  async logout({ commit }) {
    try {
      await authLogoutApi(localStorage.getItem('hiskioMember'))
      localStorage.setItem('hiskioMember', '')
      commit(mutationTypes.SET_AUTH_TOKEN, '')
    } catch (error) {}
  },
  async fetchUser({ commit }, token) {
    try {
      const { data } = await getUserApi(token)
      commit(mutationTypes.SET_USER_DATA, data)
    } catch (error) {
      localStorage.setItem('hiskioMember', '')
    }
  },
  async updateCartItems({ state, commit }, { id }) {
    try {
      const token = localStorage.getItem('hiskioMember')
      const payload = { items: [...state.cart.data, { id }] }
      const { data } = await updateCartApi(payload, token)
      localStorage.setItem('hiskioCart', JSON.stringify(data))
      commit(mutationTypes.SET_CART_ITEMS, data)
    } catch (error) {}
  },
  async removeCartItems({ state, commit }, { id }) {
    try {
      const token = localStorage.getItem('hiskioMember')

      const newCartItems = [...state.cart.data]
        .filter((item) => item.id * 1 !== id * 1)
        .map((item) => ({
          id: item.id,
        }))
      const payload = { items: newCartItems }

      const { data } = await updateCartApi(payload, token)
      console.log('data: ', data)

      // 如果有登入還要打Delete API
      localStorage.setItem('hiskioCart', JSON.stringify(data))
      commit(mutationTypes.SET_CART_ITEMS, data)
    } catch (error) {}
  },
}

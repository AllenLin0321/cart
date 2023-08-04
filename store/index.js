import {
  getGeneralCoursesApi,
  authLoginApi,
  getUserApi,
  authLogoutApi,
  updateCartApi,
} from '../server/api'
const API_COMMON_PROPERTIES = {
  isLoading: false,
  isError: false,
  errorMessage: '',
}

export const state = () => ({
  isDialogOpen: false,
  fundRaisingCourses: {
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
  setIsDialogOpen(state, isDialogOpen) {
    state.isDialogOpen = isDialogOpen
  },
  setFundRaisingCourses(state, fundRaisingCourses) {
    state.fundRaisingCourses.data = fundRaisingCourses
  },
  setAuthToken(state, token) {
    state.authData.token = token
    state.isDialogOpen = false
  },
  setLoadingStatus(state, { stateKey, isLoading }) {
    state[stateKey].isLoading = isLoading
  },
  setUserData(state, payload) {
    state.user.data = payload
  },
  setLoginError(state, { accountErrorMessage, passwordErrorMessage }) {
    state.authData.accountErrorMessage = accountErrorMessage
    state.authData.passwordErrorMessage = passwordErrorMessage
  },
  updateCart(state, payload) {
    state.cart.data = payload
  },
}

export const actions = {
  async fetchFundraisingCourses({ commit }) {
    try {
      commit('setLoadingStatus', {
        stateKey: 'fundRaisingCourses',
        isLoading: true,
      })
      const res = await getGeneralCoursesApi('arrival')
      commit('setFundRaisingCourses', res.data)
    } catch (error) {
    } finally {
      commit('setLoadingStatus', {
        stateKey: 'fundRaisingCourses',
        isLoading: false,
      })
    }
  },
  async login({ commit, dispatch }, payload) {
    try {
      const { data } = await authLoginApi(payload)
      localStorage.setItem('hiskioMember', data.access_token)
      commit('setAuthToken', data.access_token)
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

      commit('setLoginError', { accountErrorMessage, passwordErrorMessage })
    } finally {
      commit('setLoadingStatus', {
        stateKey: 'fundRaisingCourses',
        isLoading: false,
      })
    }
  },
  async logout({ commit }) {
    try {
      await authLogoutApi(localStorage.getItem('hiskioMember'))
      localStorage.setItem('hiskioMember', '')
      commit('setAuthToken', '')
    } catch (error) {}
  },
  async fetchUser({ commit }, token) {
    try {
      const { data } = await getUserApi(token)
      commit('setUserData', data)
    } catch (error) {
      console.log('error: ', error)
      localStorage.setItem('hiskioMember', '')
    }
  },
  async updateCartItems({ state, commit }, { id }) {
    try {
      const payload = { items: [...state.cart.data, { id }] }
      const { data } = await updateCartApi(payload)
      commit('updateCart', data.data)
    } catch (error) {}
  },
  removeCartItems({ state, commit }, { id }) {
    try {
      // const payload = { items: [{ id }] }
      // const { data } = await deleteCartApi(
      //   payload,
      //   localStorage.getItem('hiskioMember')
      // )
      // console.log('data: ', data)
      // commit('updateCart', data.data)
      const newData = [...state.cart.data].filter(
        (item) => item.id * 1 !== id * 1
      )
      commit('updateCart', newData)
    } catch (error) {}
  },
}

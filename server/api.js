import axios from 'axios'
const API_VERSION = 'v2'

axios.defaults.baseURL = `https://api.hiskio.com/${API_VERSION}`

export const authLoginApi = (payload) => {
  return axios.post(`/auth/login`, payload)
}

export const authLogoutApi = (token) => {
  return axios.post(
    `/auth/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}

export const getUserApi = (token) => {
  return axios.get(`/me`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  })
}

export const getGeneralCoursesApi = (type) => {
  return axios.get(`/courses`, { params: { type } })
}
export const getFundraisingCoursesApi = () => {
  return axios.get(`/fundraising`)
}

export const deleteCartApi = (payload, token) => {
  return axios.delete(`/carts`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
    data: payload,
  })
}
export const updateCartApi = (payload, token) => {
  return axios.post(`/carts`, payload, {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  })
}

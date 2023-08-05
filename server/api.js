import axios from 'axios'

const baseUrl = 'https://api.hiskio.com/v2'

export const authLoginApi = (payload) => {
  return axios.post(`${baseUrl}/auth/login`, payload)
}

export const authLogoutApi = (token) => {
  return axios.post(
    `${baseUrl}/auth/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}

export const getUserApi = (token) => {
  return axios.get(`${baseUrl}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const getGeneralCoursesApi = (type) => {
  return axios.get(`${baseUrl}/courses`, { params: { type } })
}
export const getfundraisingCoursesApi = () => {
  return axios.get(`${baseUrl}/fundraising`)
}

export const deleteCartApi = (payload, token) => {
  return axios.delete(`${baseUrl}/carts`, payload)
}
export const updateCartApi = (payload) => {
  return axios.post(`${baseUrl}/carts`, payload)
}

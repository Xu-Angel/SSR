import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 30 * 1000
axios.defaults.withCredentials = false
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.defaults.baseURL = 'http://test'

axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (err) => {
  return Promise.reject(err)
})

axios.interceptors.response.use((rs) => {
  return rs
}, (err) => {
  return Promise.reject(err)
})

function request (options) {
  if (!options) {
    return
  }

  let config = {
    url: `${options.url}`,
    method: options.method
  }

  if (options.method === 'get') {
    config.params = options.data
  }
  if (options.method === 'post') {
    config.data = options.data
  }

  return new Promise((resolve, reject) => {
    axios(config).then((rs) => {
      resolve(rs.data)
    }, (err) => {
      reject(err)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function get (url, data) {
  return request({
    url,
    data,
    method: 'get'
  })
}

export function post (url, data) {
  return request({
    url,
    data,
    method: 'post'
  })
}

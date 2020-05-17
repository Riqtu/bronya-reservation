import { observable, action, decorate } from 'mobx'
import localStorage from 'mobx-localstorage'

export default class AuthStore {
  auth = false
  name = ''
  phone = ''
  role = ''
  token = ''

  data = {}
  setAuth(el) {
    this.auth = el
    this.data.auth = el
    localStorage.setItem('authStore', this.data)
  }
  setName(el) {
    this.name = el
    this.data.name = el
    localStorage.setItem('authStore', this.data)
  }
  setPhone(el) {
    this.phone = el
    this.data.phone = el
    localStorage.setItem('authStore', this.data)
  }
  setRole(el) {
    this.role = el
    this.data.role = el
    localStorage.setItem('authStore', this.data)
  }
  setToken(el) {
    this.auth = el
    this.data.token = el
    localStorage.setItem('authStore', this.data)
  }

  constructor() {
    const data = localStorage.getItem('authStore')
    if (data) {
      this.setAuth(data.auth)
      this.setName(data.name)
      this.setPhone(data.phone)
      this.setRole(data.role)
      this.setToken(data.token)
    }
  }
}

decorate(AuthStore, {
  auth: observable,
  phone: observable,
  name: observable,
  role: observable,
  token: observable,

  setAuth: action,
  setName: action,
  setPhone: action,
  setRole: action,
  setToken: action,
})

import { observable, action, decorate } from 'mobx'
import localStorage from 'mobx-localstorage'

export default class AuthStore {
  auth = false
  name = ''
  phone = ''
  role = ''
  token = ''
  id = ''
  like = ''

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
    this.token = el
    this.data.token = el
    localStorage.setItem('authStore', this.data)
  }
  setId(el) {
    this.id = el
    this.data.id = el
    localStorage.setItem('authStore', this.data)
  }
  setLike(el) {
    this.like = el
    this.data.like = el
    localStorage.setItem('authStore', this.data)
  }

  clearAll() {
    localStorage.setItem('authStore', null)
    this.auth = false
    this.name = ''
    this.phone = ''
    this.role = ''
    this.token = ''
    this.id = ''
    this.like = []
  }

  constructor() {
    const data = localStorage.getItem('authStore')
    if (data) {
      this.setAuth(data.auth)
      this.setName(data.name)
      this.setPhone(data.phone)
      this.setRole(data.role)
      this.setToken(data.token)
      this.setId(data.id)
      this.setLike(data.like)
    }
  }
}

decorate(AuthStore, {
  auth: observable,
  phone: observable,
  name: observable,
  role: observable,
  token: observable,
  id: observable,
  like: observable,

  setAuth: action,
  setName: action,
  setPhone: action,
  setRole: action,
  setToken: action,
  setId: action,
  setLike: action,

  clearAll: action,
})

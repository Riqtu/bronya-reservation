import { observable, action, decorate } from 'mobx'

export default class ThemeStore {
  theme = 'light'
  name = 'Jhon'

  setTheme(newTheme) {
    this.theme = newTheme
  }
  setName(newName) {
    this.name = newName
  }
}

decorate(ThemeStore, {
  theme: observable,
  name: observable,
  setName: action,
  setTheme: action,
})

import { observable, action } from 'mobx'

export default class ThemeStore {
  @observable
  theme = 'light'

  @observable
  name = 'Jhon'

  @action
  setTheme(newTheme: string) {
    this.theme = newTheme
  }

  @action
  setName(newName: string) {
    this.name = newName
  }
}

import React from 'react'
import { ThemeStore, AuthStore } from '../stores'

export const storesContext = React.createContext({
  themeStore: new ThemeStore(),
  authStore: new AuthStore(),
})

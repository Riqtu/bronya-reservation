import React from 'react'
import { ThemeStore } from '../stores'

export const storesContext = React.createContext({
  themeStore: new ThemeStore(),
})

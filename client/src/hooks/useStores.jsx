import React from 'react'
import { storesContext } from '../contexts/index.jsx'

export const useStores = () => React.useContext(storesContext)

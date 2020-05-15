import React from 'react'
import { storesContext } from '../contexts/index.tsx'

export const useStores = () => React.useContext(storesContext)

import React from 'react'

import { useRoutes } from 'hookrouter'
import { MainPage, Reservation } from './pages'
const Routes = {
  '/': () => <MainPage />,
  '/reservation': () => <Reservation />
}
function App() {
  const routeResult = useRoutes(Routes)
  return <div className="App">{routeResult}</div>
}

export default App

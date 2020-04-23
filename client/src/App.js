import React from 'react'

import { useRoutes } from 'hookrouter'
import { MainPage, Reservation, Constructor } from './pages'
const Routes = {
  '/': () => <MainPage />,
  '/reservation/:id': (props) => <Reservation {...props} />,
  '/constructor': () => <Constructor />,
}
function App() {
  const routeResult = useRoutes(Routes)
  return <div className="App">{routeResult}</div>
}

export default App

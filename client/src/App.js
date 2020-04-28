import React from 'react'

// import { useRoutes, A } from 'hookrouter'
import { MainPage, Reservation, Constructor, AllPlaces } from './pages'
// const Routes = {
//   '/': () => <MainPage />,
//   '/reservation': (props) => <AllPlaces {...props} />,
//   '/reservation/:id': (props) => <Reservation {...props} />,
//   '/constructor': () => <Constructor />,
// }
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  // const routeResult = useRoutes(Routes)
  return (
    <div className="App">
      {/* {routeResult} */}
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage></MainPage>
          </Route>
          <Route path="/constructor">
            <Constructor></Constructor>
          </Route>
          <Route exact path="/reservation">
            <AllPlaces></AllPlaces>
          </Route>
          <Route
            exact
            path="/reservation/:id"
            // component={(props) => <Reservation {...props} />}
          >
            <Reservation></Reservation>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

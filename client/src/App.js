import React from 'react'
import { MainPage, Reservation, Constructor, AllPlaces } from './pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
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

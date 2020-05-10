import React from 'react'
import { MainPage, Reservation, Constructor, Restorator } from './pages'
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
          <Route path="/constructor/:idPlace">
            <Constructor></Constructor>
          </Route>
          <Route path="/constructor">
            <Constructor></Constructor>
          </Route>
          <Route exact path="/reservation/:id">
            <Reservation></Reservation>
          </Route>
          <Route path="/restorator/:id">
            <Restorator></Restorator>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

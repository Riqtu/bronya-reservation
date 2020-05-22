import React from 'react'
import {
  MainPage,
  Reservation,
  Constructor,
  Restorator,
  Profile,
  Places,
} from './pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './toast.css'
function App() {
  return (
    <div className="App">
      {/* {routeResult} */}
      <ToastContainer position="top-center" />
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage></MainPage>
          </Route>
          <Route path="/constructor/:idPlace">
            <Constructor></Constructor>
          </Route>
          <Route path="/places">
            <Places></Places>
          </Route>
          <Route path="/constructor">
            <Constructor></Constructor>
          </Route>
          <Route path="/profile/:id">
            <Profile></Profile>
          </Route>
          <Route path="/reservation/:id">
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

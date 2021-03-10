import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './compnents/Home'
import { AddUser } from './compnents/AddUser'
import { EditUser } from './compnents/EditUser'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App" style={{ maxWidth: '30rem', margin: '4rem auto' }}>
      <Router>
        <Switch>
          <Route path="/add" component={AddUser} />
          <Route path="/edit/:id" component={EditUser} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

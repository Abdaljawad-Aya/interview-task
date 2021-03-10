import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './compnents/Home'
import { AddUser } from './compnents/AddUser'
import { EditUser } from './compnents/EditUser'
function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <AddUser />
        <EditUser />
      </Router>
    </div>
  )
}

export default App

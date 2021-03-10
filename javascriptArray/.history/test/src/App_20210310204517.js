import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './compnents/Home'
import { AddUser } from './compnents/AddUser'
import { EditUser } from './compnents/EditUser'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App" style={{ maxWidth: '15rem', margin: '4rem auto' }}>
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

// <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//             <a class="navbar-brand" href="#">
//               React
//             </a>
//             <button
//               class="navbar-toggler"
//               type="button"
//               data-toggle="collapse"
//               data-target="#navbarNavAltMarkup"
//               aria-controls="navbarNavAltMarkup"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//               <div class="navbar-nav">
//                 <a class="nav-item nav-link active" href="#">
//                   <span class="sr-only">(current)</span>
//                 </a>
//                 <a class="nav-link" href="#"></a>
//                 <a class="nav-link" href="#"></a>
//               </div>
//             </div>
//           </nav>

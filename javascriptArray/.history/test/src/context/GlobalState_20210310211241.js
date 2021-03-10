import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//  initial state
const initialState = {
  users: [
    
    { id: 1, name: 'User One' }
    { id: 2, name: 'User Two' }
    { id: 1, name: 'User One' }
  
  ],
}

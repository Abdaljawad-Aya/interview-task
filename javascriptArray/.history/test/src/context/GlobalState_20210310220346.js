import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//  initial state
const initialState = {
  users: [
    { id: 1, name: 'User One' },
    { id: 2, name: 'User Two' },
    { id: 3, name: 'User Three' },
  ],
}

// Create Context
export const GlobalContext = createContext(initialState)

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  //  Actions

  const removeUser = () => {
    dispatch({
      type: 'REMOVE_USER',
      payload: IDBRequest,
    })
  }
  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

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

  const removeUser = (id) => {
    dispatch({
      type: 'REMOVE_USER',
      payload: id,
    })
  }

  const editUser = (user) => {
    dispatch({
      type: 'EDIT_USER',
      payload: user,
    })
  }

  // eslint-disable-next-line no-unused-vars
  const addUser = (user) => {
    dispatch({
      type: 'ADD_USER',
      payload: user,
    })
  }
  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        removeUser,
        addUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

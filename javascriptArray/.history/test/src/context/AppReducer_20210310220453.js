export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_USER':
      dispatch({
        type: 'REMOVE_USER',
        payload: IDBRequest,
      })
    default:
      return state
  }
}

import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext)

  // console.log(users)
  return (
    <div>
      <ListGroup className="mt-4">
        {users.map((user) => (
          <ListGroupItem className="d-flex">
            <strong>{user.name}</strong>
            <div className="ml-auto">
              <Link className="btn btn-warning mr-1" to={`/edit/${user.id}`}>
                Edit
              </Link>
            </div>
            <Button onClick={() => removeUser} color="danger">
              Delete
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  )
}

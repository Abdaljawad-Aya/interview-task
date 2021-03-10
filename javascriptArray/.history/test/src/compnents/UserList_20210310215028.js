import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'

export const UserList = () => {
  const { users } = useContext(GlobalContext)
  // console.log(users)
  return (
    <div>
      <ListGroup className="mt-4">
        <ListGroupItem className="d-flex">
          <strong>User One</strong>
          <div className="ml-auto">
            <Link className="btn btn-warning mr-1" to="/edit/1">
              Edit
            </Link>
          </div>
          <Button color="danger">Delete</Button>
        </ListGroupItem>
        <ListGroupItem className="d-flex">
          <strong>User One</strong>
          <div className="ml-auto">
            <Link className="btn btn-warning mr-1" to="/edit/1">
              Edit
            </Link>
          </div>
          <Button color="danger">Delete</Button>
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}

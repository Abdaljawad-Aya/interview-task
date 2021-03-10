import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'

export const UserList = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem>User One</ListGroupItem>
        <div className="ml-auto">
          <Link to="/edit/1">Edit</Link>
        </div>
        <Button></Button>
      </ListGroup>
    </div>
  )
}

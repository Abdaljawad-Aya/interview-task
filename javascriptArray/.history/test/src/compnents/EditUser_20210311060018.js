import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link, useHistory } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { v4 as uuid } from 'uuid'

export const EditUser = (props) => {
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: '',
  })
  const [users, editUser] = useContext(GlobalContext)
  const history = useHistory()
  const currentUserId = props.match.params.id

  const onSubmit = () => {
    history.push('/')
  }

  const onChange = (e) => {
    // setSelectedUser(e.target.value)
  }
  return (
    <Form
      onSubmit={onSubmit}
      style={{ maxWidth: '30rem', margin: '4rem auto' }}
    >
      <FormGroup>
        <Label>Name</Label>
        <Input onChange={onChange} type="text" placeholder="Enter Name"></Input>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  )
}

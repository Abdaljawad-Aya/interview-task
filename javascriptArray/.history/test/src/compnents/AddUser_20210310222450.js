import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link, useHistory } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
export const AddUser = () => {
  const { users, addUser } = useContext(GlobalContext)
  const history = useHistory
  const onSubmit = () => {}
  return (
    <Form
      onSubmit={onSubmit}
      style={{ maxWidth: '30rem', margin: '4rem auto' }}
    >
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" placeholder="Enter Name"></Input>
      </FormGroup>
      <Button type="submit">Submit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  )
}

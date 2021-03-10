import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link, useHistory } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
export const AddUser = () => {
  const [name, setName] = useState('')
  const { users, addUser } = useContext(GlobalContext)
  const history = useHistory()

  const onSubmit = () => {
    const newUser = {
      id: 4,
      name: 'User Four',
    }
    addUser(newUser)
    history.push('/')
  }

  const onChange = (e) => {
    setName(e.target.value)
  }
  return (
    <Form
      onSubmit={onSubmit}
      style={{ maxWidth: '30rem', margin: '4rem auto' }}
    >
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Enter Name"
        ></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  )
}

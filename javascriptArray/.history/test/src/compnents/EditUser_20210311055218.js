import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link, useHistory } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { v4 as uuid } from 'uuid'

export const EditUser = () => {
  const [name, setName] = useState('')
  const [addUser] = useContext(GlobalContext)
  const history = useHistory()
  return (
    <Form style={{ maxWidth: '30rem', margin: '4rem auto' }}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" placeholder="Enter Name"></Input>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  )
}

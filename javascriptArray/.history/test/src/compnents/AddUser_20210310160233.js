import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
export const AddUser = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input></Input>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

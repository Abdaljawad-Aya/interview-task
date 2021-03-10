import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavbarBrand, Container } from 'reactstrap'

export const Heading = () => {
  return (
    <div>
      <Navbar color="dark" dark>
        <Container>
          <NavbarBrand href="/">My Team</NavbarBrand>
          <Nav>
            <NavItem></NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

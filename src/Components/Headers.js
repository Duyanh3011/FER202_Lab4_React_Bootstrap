import React from 'react'
import { Button, Form, FormControl, Nav, NavLink, Navbar, NavbarBrand } from 'react-bootstrap'
import { CloudFill, Search, HouseFill, InfoCircleFill, ThreeDotsVertical, EnvelopeFill } from 'react-bootstrap-icons'

export default function Headers() {
    const user = (localStorage.getItem('user')===null)?'Sign in': "User"

  return (
      <Navbar bg="light" variant='light' expand="lg">
        <NavbarBrand>Logo <CloudFill color='#000'></CloudFill> </NavbarBrand>
        
        <Navbar.Toggle className='mb-2' aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
            <Form className='d-flex'>
                <FormControl type='text' placeholder='Search' className="mr-sm-2"/>
                <Button variant="outline-success my-2 my-sm-0"><Search/></Button>
            </Form>
            <Nav className="mr-auto">
                    <NavLink href="#home" className="d-flex align-items-center "> <HouseFill/> Home</NavLink>
                    <NavLink href="#About" className="d-flex align-items-center "><InfoCircleFill/>About</NavLink>
                    <NavLink href="#Menu" className="d-flex align-items-center "><ThreeDotsVertical/>Menu</NavLink>
                    <NavLink href="#Contact" className="d-flex align-items-center "><EnvelopeFill/>Contact</NavLink>
            </Nav>
            <Nav> 
                <Nav.Link href="/login" className="ms-3">{user}</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

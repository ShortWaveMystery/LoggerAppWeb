import React from 'react'
import {Card, InputGroup,ListGroup,Dropdown,Table, FormControl,Navbar ,Nav, Form, Row,Button } from 'react-bootstrap'
import {Home} from './Home';


export const Login = () => (

        <div>
           <>

        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/">Login</Nav.Link>
                <Nav.Link href="/Home">Home</Nav.Link>
                </Nav>
            </Navbar>
            </>      
<h1>This is Login page</h1>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    
)


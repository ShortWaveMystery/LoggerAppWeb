import React from 'react'
import { FormControl,Navbar,Table ,Nav, Form, Row,Button } from 'react-bootstrap'
import {Login} from './Login';


export const Home = () => (
        <div>
            <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/">Login </Nav.Link>
                <Nav.Link href="/Home">Entry Log</Nav.Link>
                </Nav>
            </Navbar>
            </>
            <h1>This is Home page</h1>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>QTY</th>
      <th>ID</th>
      <th>Date</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Case</td>
      <td>1</td>
      <td>Case1234</td>
      <td>08/13/2020</td>
      <td>$100</td>
    </tr>
    
  </tbody>
</Table>
<Button>New Entry</Button>
        </div>
)


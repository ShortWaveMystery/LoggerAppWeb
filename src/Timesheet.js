import React from 'react'
import {Dropdown,Table, FormControl,Navbar ,Nav, Form, Row,Button } from 'react-bootstrap'
import {Home} from './Home';
import {EntryLog} from './EntryLog';
import {FindLogStack} from './FindLogStack';


export const Timesheet = () => (
    
        <div>
           <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/EntryLog">Entry Log</Nav.Link>
                <Nav.Link href="/FindLogStack">Find Log Stack</Nav.Link>
                <Nav.Link href="/Timesheet">Timesheet</Nav.Link>
                </Nav>
            </Navbar>
            </>
            <h1>This is Timesheet Page</h1>
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Pick a time range
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Yesterday</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Last 3 days</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Last week</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Product Name</th>
      <th>Log ID</th>
      <th>Employee In </th>
      <th>Employee Out </th>
      <th>Date In </th>
      <th>Date Out </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jet </td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
        </div>
    
)


import React from 'react'
import {Card, InputGroup,ListGroup,Dropdown,Table, FormControl,Navbar ,Nav, Form, Row,Button } from 'react-bootstrap'
import {FindLogStack} from './FindLogStack';
import {EntryLog} from './EntryLog';
import {Timesheet} from './Timesheet';

export const Home = () => (

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
            
            <h1>This is Home Page</h1>

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

<Table>
    <tr>
        <td>
        <Card style={{ width: '18rem' }}>
            <Card.Header>New Log</Card.Header>
            <ListGroup variant="flush">
                <InputGroup className="mb-3">
                <FormControl
                placeholder="Product name "
                aria-label="Product name "
                aria-describedby="basic-addon2"
                />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                placeholder="Quantity"
                aria-label="Quantity"
                aria-describedby="basic-addon2"
                />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                placeholder="Quantity ID"
                aria-label="Quantity ID"
                aria-describedby="basic-addon2"
                />
                </InputGroup>
                <Button variant="primary">Submit</Button>
            </ListGroup>
            </Card>
        </td>
        <td>
        <Card style={{ width: '18rem' }}>
            <Card.Header>Update Log</Card.Header>
            <ListGroup variant="flush">
                <InputGroup className="mb-3">
                <FormControl
                placeholder="Date in"
                aria-label="Date in"
                aria-describedby="basic-addon2"
                />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                placeholder="Date out"
                aria-label="Date out"
                aria-describedby="basic-addon2"
                />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                placeholder="Product name / ID"
                aria-label="Product name / ID"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                <Button variant="outline-secondary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
            </ListGroup>
            </Card>
        </td>
    </tr>
</Table>
            

            
        </div>
    
)


import React from 'react'
import { FormControl,Navbar ,Nav, Form, Row,Button } from 'react-bootstrap'
import {Home} from './Home';
import {FindLogStack} from './FindLogStack';
import {Timesheet} from './Timesheet';

export const EntryLog = () => (
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
            <h1>This is EntryLog Page</h1>
            <Form>
            <Row>
                <Form.Control placeholder="Product name" />
                <Form.Control placeholder="Log id" />
                <Form.Control placeholder="Date in" />
                <Form.Control placeholder="Employee first name" />
                <Button variant="secondary" size="lg">Submit</Button>
            </Row>
            </Form>

        </div>
)


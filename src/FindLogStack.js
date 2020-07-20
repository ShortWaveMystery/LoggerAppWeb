import React from 'react'
import { FormControl,Navbar ,Nav, Form, Row,Button } from 'react-bootstrap'
import {Home} from './Home';
import {EntryLog} from './EntryLog';
import {Timesheet} from './Timesheet';

export const FindLogStack = () => (
    
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
            <h1>This is FindLogStack Page</h1>
            <Form>
            <Row>
                <Form.Control placeholder="Log id" />
                <Button variant="secondary" size="lg">Submit</Button>
            </Row>
            </Form>
        </div>
    
)


import React from 'react'

import { Form, FormGroup, FormControl, FormLabel, Button, Well, Col, Row } from "react-bootstrap";

import {Home} from './Home';
import {EntryLog} from './EntryLog';
import {FindLogStack} from './FindLogStack';


export const Timesheet = () => (

  
        <div>
          <h3>Pilot Registration Form</h3>
          <h6>The student wants to register as an ultralight student pilot. The student needs to find a authroized FAA flight instructor, to conduct flight instruction for an ultralight student pilot.</h6> 
          <h3>This shows that the student has been trained and tested to a minimum standard.</h3>

          <Row>
          <Col md={12} lg={6}>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='pilotname'
              placeholder='Pilot Name'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='pilot #'
              placeholder='Pilot #'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='pilotaddress'
              placeholder='Pilot Address'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='pilotcity'
              placeholder='Pilot City'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='pilotstate'
              placeholder='Pilot State'
              required
              maxLength={2} />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='pilotzip/postalcode'
              placeholder='Pilot Zip/Postal Code'
              required
              maxLength={5} />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='tel'
              name='pilotphone'
              placeholder='Pilot Phone'
              data-format='(999) 999-9999'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='email'
              name='pilotemail'
              placeholder='Pilot E-mail Address'
              required />
          </FormGroup>
          </Col>
        </Row>
        <Row>
          <div className='hidden-lg'>
            <hr />
          </div>
        </Row>
        <Row>
          <Col md={12} lg={6}>
          

          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='instructorname'
              placeholder='Instructor Name'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='instructoraddress'
              placeholder='Instructor Address'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='instructorcity'
              placeholder='Instructor City'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='instructorstate'
              placeholder='Instructor State'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='instructorzip'
              placeholder='Instructor Zip/PostalCode'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='tel'
              name='instructorphone'
              placeholder='Instructor Phone'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='email'
              name='instructoremail'
              placeholder='Instructor E-mail'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='instructor'
              placeholder='Instructor #'
              required />
          </FormGroup>
          </Col>
          <Col md={12} lg={6}>
          <FormGroup>
          </FormGroup>
          </Col>
        </Row>

        <p>Fill in the information above</p>
        <p>P.O. Box 3086</p>
        <p>Whtiby, ON L1P 1V4</p>
        <p>Telephone: 647-913-4357</p>
        <p>E-mail: warren.leslie@hotmail.com</p>

        </div>

        
        

)
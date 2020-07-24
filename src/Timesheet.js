import React from 'react'

import { Form, FormGroup, FormControl, FormLabel, Button, Well, Col, Row } from "react-bootstrap";

import {Home} from './Home';
import {EntryLog} from './EntryLog';
import {FindLogStack} from './FindLogStack';


export const Timesheet = () => (
        

        <div>
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
        </div>

        

)

export const Timesheet = () => (
        
    
  <div>
    <Row>
    <Col md={12} lg={6}>
    <FormGroup>
      <input
        className='form-control'
        type='text'
        name='studentname'
        placeholder='Student Name'
        required />
    </FormGroup>
    <FormGroup>
      <input
        className='form-control'
        type='text'
        name='student #'
        placeholder='Student #'
        required />
    </FormGroup>
    <FormGroup>
      <input
        className='form-control'
        type='text'
        name='studentaddress'
        placeholder='Student Address'
        required />
    </FormGroup>
    <FormGroup>
      <input
        className='form-control'
        type='text'
        name='studentcity'
        placeholder='Student City'
        required />
    </FormGroup>
    <FormGroup>
      <input
        className='form-control'
        type='text'
        name='studentstate'
        placeholder='Student State'
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
        type='tel'
        name='studentphone'
        placeholder='Student Phone'
        data-format='(999) 999-9999'
        required />
    </FormGroup>
    <FormGroup>
      <input
        className='form-control'
        type='email'
        name='studentemail'
        placeholder='Student E-mail Address'
        required />
    </FormGroup>
    
    <FormGroup>
            <input
              className='form-control'
              type='name'
              name='instructorname'
              placeholder='Instructor Name'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='address'
              name='instructoraddress'
              placeholder='Instructor Address'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='city'
              name='instructorcity'
              placeholder='Instructor City'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='state'
              name='instructorstate'
              placeholder='Instructor State'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='zip'
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
              name='instructor #'
              placeholder='Instructor #'
              required />
          </FormGroup>
    </Col>
    <Col md={12} lg={6}>
    <FormGroup>
    </FormGroup>
    </Col>
  </Row>
  </div>

)


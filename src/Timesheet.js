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
              name='firstname'
              placeholder='First Name'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='lastname'
              placeholder='Last Name'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='middleinitial'
              placeholder='Middle Initial'
              maxLength={1} />
          </FormGroup>
          </Col>
          <div className='hidden-lg'>
            <hr />
          </div>
          <Col md={12} lg={6}>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='address'
              placeholder='Address'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='city'
              placeholder='City'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='state'
              placeholder='State'
              required
              maxLength={2} />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='zip'
              placeholder='Zip'
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
              name='phone'
              placeholder='Phone'
              data-format='(999) 999-9999'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='tel'
              name='alternate'
              placeholder='Alternate Phone'
              data-format='(999) 999-9999' />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='email'
              name='email'
              placeholder='Email Address'
              required />
          </FormGroup>
          </Col>
          <Col md={12} lg={6}>
          <FormGroup>
            <FormGroup>
              <FormLabel>Date of Birth</FormLabel>
              <input
                type='date'
                className='form-control'
                name='dob'
                required />
            </FormGroup>
            <FormGroup>
              <input
                type='text'
                className='form-control'
                name='social'
                placeholder='Social Security #'
                required />
            </FormGroup>
          </FormGroup>
          </Col>
        </Row>
        </div>
    
)


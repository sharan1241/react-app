import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../styles/entries.css'

function Entries() {
  return (
    <div id='en'>
        <Row>
        <Col xs={3}>
          customer
        <FloatingLabel
        controlId="floatingInput"
        label="enter customer name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="enter customer name" />
      </FloatingLabel>
        </Col>
        <Col xs={3}>
          invoice id
        <FloatingLabel
        controlId="floatingInput"
        label="enter invoice id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="enter invoice id" />
      </FloatingLabel>
        </Col>
        <Col xs={3}>
          start date
        <FloatingLabel
        controlId="floatingInput"
        label="start date"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="start date" />
      </FloatingLabel>
        </Col>
        <Col xs={3}>
          end date
        <FloatingLabel
        controlId="floatingInput"
        label="end date"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="end date" />
      </FloatingLabel>
        </Col>
      </Row>
    </div>
  )
}

export default Entries
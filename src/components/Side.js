import React from 'react'
import '../styles/side.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Side() {
  return (
    <div id='side'>
        <p id='guvi'>guvi sales</p>
        <ButtonGroup vertical id='btn'>
        <Button variant="primary">dashboard</Button>{' '}
        <Button variant="light">lab test</Button>{' '}

        <Button variant="light">appointment</Button>{' '}
        <Button variant="light">medicine order</Button>{' '}
        <Button variant="light">message</Button>{' '}
        <Button variant="light">payment</Button>{' '}
        <Button variant="light">settings</Button>{' '}
    </ButtonGroup>
    <p id='help'>? help</p>
    </div>
  )
}

export default Side
import React from 'react';
import useValidation from '../hooks/useValidation';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Step1 = ({steps, registrations}) => {
    const {step, addCurrentStep, backCurrentStep} = steps;
    const {registration, setRegistration} = registrations;

    const [validated, setValidated] = useValidation();


    const handleSubmit = event => {
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            setValidated(true);
            event.preventDefault();
            event.stopPropagation();
        } else {
            setValidated(false);
            addCurrentStep();
        }
      };
    const addToRegistration = (obj) => {
        // Overwrite registration with obj which has subset of key of registration.
        // https://oprearocks.medium.com/what-do-the-three-dots-mean-in-javascript-bc5749439c9a
        let parentInfo = {...registration, ...obj};
        setRegistration(parentInfo);
    }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h3>Parent Information</h3>

        <Form.Group controlId="formGridName">
            <Form.Label>성명 | Full Name *</Form.Label>
            <Form.Control required placeholder="Name" type="text"
                
                value={
                    registration.parentName ? registration.parentName : ''
                }
                onChange={e => {
                    addToRegistration({parentName: e.target.value});
                }}/>
        </Form.Group>

        <Form.Group controlId="formGridEmail">
            <Form.Label>Email *</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" 
                value={
                    registration.email ? registration.email : ''
                }
                onChange={e => {
                    addToRegistration({email: e.target.value});
                }}/>
        </Form.Group>


        <Row>
            <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>전화 번호 | Phone Number *</Form.Label>
            <Form.Control required type="phone" placeholder="Primary Phone #" 
                value={
                    registration.phone ? registration.phone : ''
                }
                onChange={e => {
                    addToRegistration({phone: e.target.value});
                }}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>비상 연락 번호 | Emergency Phone Number</Form.Label>
            <Form.Control type="phone" placeholder="Emergency Phone #" 
                value={
                    registration.otherPhone ? registration.otherPhone : ''
                }
                onChange={e => {
                    addToRegistration({otherPhone: e.target.value});
                }}/>
            </Form.Group>
        </Row>

        <Form.Group controlId="formGridAddress1">
            <Form.Label>Address *</Form.Label>
            <Form.Control required placeholder="1234 Main St" 
                value={
                    registration.address ? registration.address : ''
                }
                onChange={e => {
                    addToRegistration({address: e.target.value});
                }}/>
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" 
                value={
                    registration.address2 ? registration.address2 : ''
                }
                onChange={e => {
                    addToRegistration({address2: e.target.value});
                }}/>
        </Form.Group>

        <Row>
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City *</Form.Label>
            <Form.Control required placeholder="Seattle"
                value={
                    registration.city ? registration.city : ''
                }
                onChange={e => {
                    addToRegistration({city: e.target.value});
                }}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" required
                value={
                    registration.state ? registration.state : undefined
                }
                onChange={e => {
                    addToRegistration({state: e.target.value});
                }}>
                <option>Choose...</option>
                <option>WA</option>
                <option>Other</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip *</Form.Label>
            <Form.Control required 
                value={
                    registration.zip ? registration.zip : ''
                }
                onChange={e => {
                    addToRegistration({zip: e.target.value});
                }}/>
            </Form.Group>
        </Row>

        <ButtonGroup>
            <Button
                variant="info" 
                type="submit"
                >
                Next >
            </Button>
        </ButtonGroup>
    </Form>
  )
}

export default Step1;
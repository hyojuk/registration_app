import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stein from './Stein';
import useValidation from '../hooks/useValidation';

const Finish = ({steps, registrations, studentList}) => {
  const {step, addCurrentStep, backCurrentStep} = steps;
  const {registration, setRegistration} = registrations;    
  const {students, setStudents} = studentList;

  const [validated, setValidated] = useValidation();

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setValidated(true);
      event.stopPropagation();
    } else {
      setValidated(false);
      await Stein.writeToDatabase(registration, students, () => {
        setStudents({});
        backCurrentStep();
      });
    }
  }; 

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Container>
          <h3>Registration Summary</h3>
          Registering for: {students.krName + " (" + students.engName + ")"} <br/>
          <h4>Terms and Conditions</h4>
            한국 학교 교장 귀하 (To: Head of the School)<br/><br/>
            저는 위의 학생을 귀교에 입학시키기를 원하며 학부모로서의 의무를 충실히 이행할 것을 서약합니다.
            <br/>(I would like to register our child in your school and promise to support the academic & extracurricular activites of your school.) 
            <br/>
            또한 학생들 간식준비를 위해 기꺼이 도울것을 약속합니다. 
            <br/>(I also agree to volunteer to prepare and assist during the students' snack time.)
            <br/>
            <br/>
            <br/>
        <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="동의 합니다 (I agree with the Terms and Conditions)" required/>
        </Form.Group>
        </Container>
       

          <Button 
              inline
              variant="info" 
              onClick={e => {
                  e.preventDefault()
                  backCurrentStep();
              }}>
              &lt; Previous
          </Button>
          <Button inline variant="success" 
            style={{float:'right'}}
            type="submit"
            >
            Submit
          </Button>
    </Form>
  )
}

export default Finish;
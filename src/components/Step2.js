import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import useStudents from '../hooks/useStudents';
import useValidation from '../hooks/useValidation';
import Student from './Student';

const Step2 = ({steps, studentList}) => {
    const {step, addCurrentStep, backCurrentStep} = steps;
    const {students, setStudents} = studentList;
    const [validated, setValidated] = useValidation();

    // const handleAdd = () => {
    //     let curStudents = students.concat([{}]);
    //     setStudents(curStudents);
    //     console.log(students);
    // }

    // const handleRemove = () => {
    //     let tempStudents = students;
    //     tempStudents.pop();
    //     setStudents(tempStudents);
    // }
    
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
    // const getStudents = () => {
    //     for(let i = 0; i < students.length; i++) {
    //         console.log()
    //         return <Student key={i} studentList={students} setStudents={setStudents} studentCount={i}></Student>
    //     }
    // }
  return (
    <div>
        <h3>Student Information</h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Student studentList={students} setStudents={setStudents}></Student>
        <div>
        <br></br>
        {/* <OverlayTrigger
            key="right"
            placement="right"
            overlay={
                <Tooltip id={'tooltip-right'}>
                등록 추가 | Add another student 
                </Tooltip>
                }
        >
        <Button  
            onClick={e => {
                e.preventDefault();
                handleAdd();
            }}
            variant="outline-success">
            + Add
        </Button>
        </OverlayTrigger>
        {
            students > 1 && 
            <Button 
                style={{marginLeft:"5px"}} 
                onClick={e => {
                    e.preventDefault();
                    handleRemove();
                }}
                variant="outline-danger">
                - Remove
            </Button>
        } */}
        </div>
        <br></br>
        <ButtonGroup>
            <Button 
                variant="info" 
                onClick={e => {
                    e.preventDefault();
                    backCurrentStep();
                }}>
                &lt; Previous
            </Button>
            <Button
                style={{marginLeft:'5px'}}
                variant="info"
                type="submit" 
                >
                Next >
            </Button>
        </ButtonGroup>
        </Form>
    </div>
  )
}

export default Step2;
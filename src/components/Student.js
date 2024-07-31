import React from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Student = (props) => {
    const {studentList, setStudents} = props;
    const handleChange = (value, fieldName) => {
        // let tempStudents = studentList; // [{},{},...]
        // tempStudents = {...tempStudents, ...{[fieldName]: value}};
        setStudents({...studentList, ...{[fieldName]: value}});
    }

  return (
    <Container style={{
        borderColor:'#DDDDDD', 
        borderWidth: '0.5px', 
        borderStyle:'solid', 
        borderRadius: '7px', 
        padding: '20px',
        backgroundColor:'#F3F3F3',
        marginTop:'10px'}}>
    {/* <Form noValidate validated={validated}> */}
        <Row>
            <Form.Group as={Col} controlId="formGridName">
                <Form.Label>한글 성명 | Korean Name *</Form.Label>
                <Form.Control required placeholder="Last First Name" 
                    value={
                        studentList.krName //!= '' ? studentList.krName : ''
                    }
                    onChange={e => {
                        e.preventDefault();
                        handleChange(e.target.value, 'krName');
                    }} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridName">
                <Form.Label>영문 성명 | English Name *</Form.Label>
                <Form.Control required placeholder="First Last Name" 
                    value={
                        studentList.engName !== '' ? studentList.engName : ''
                    }
                    onChange={e => {
                       // e.preventDefault();
                        handleChange(e.target.value, 'engName');
                    }}/>
            </Form.Group>
        </Row> 
        <Row>
            <Form.Group as={Col} controlId="formGridBirth">
                <Form.Label>Birthdate *</Form.Label>
                <Form.Control required type="date" 
                    value={
                        studentList.birthdate !== '' ? studentList.birthdate : ''
                    }
                    onChange={e => {
                        handleChange(e.target.value, 'birthdate');
                    }}/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridGrade">
                <Form.Label>학년 | Grade *</Form.Label>
                <Form.Control required as="select"
                    value={
                        studentList.grade !== '' ? studentList.grade : undefined
                    }
                    onChange={e => {
                        handleChange(e.target.value, 'grade');
                    }}>
                    <option>Choose...</option>
                    <option>K</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>N/A</option>
                </Form.Control>
            </Form.Group>
        </Row>
        <Form.Group>
            <Form.Label>성별 | Gender *</Form.Label>
            <Form.Check style={{paddingLeft:"20px"}}
                required
                inline
                type="radio"
                label="F"
                name="formgender"
                checked={
                    studentList.gender === 'F' ? "checked" : undefined
                }
                onChange={e => {
                    handleChange('F', 'gender');
                }}/>
            <Form.Check
                inline
                type="radio"
                label="M"
                name="formgender"
                checked={
                    studentList.gender === 'M' ? "checked" : undefined
                }
                onChange={e => {
                    handleChange('M', 'gender');
                }}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>한국어 능력 | Korean Fluency Level</Form.Label>
                <Form.Check style={{paddingLeft:"20px"}}
                    inline
                    type="radio"
                    label="전혀 못함 (Not at all)"
                    name="formRadioSkill"
                    checked={
                        studentList.fluency === "전혀 못함 (Not at all)" ? "checked" : undefined
                    }
                    onChange={e => {
                        handleChange("전혀 못함 (Not at all)", 'fluency');
                    }}
                />
                <Form.Check
                    inline
                    type="radio"
                    label="조금 (A little)"
                    name="formRadioSkill" 
                    checked={
                        studentList.fluency === "조금 (A little)" ? "checked" : undefined
                    }
                    onChange={e => {
                        handleChange( "조금 (A little)", 'fluency');
                    }}
                />
                <Form.Check
                    inline
                    type="radio"
                    label="잘함 (Well)"
                    name="formRadioSkill"
                    checked={
                        studentList.fluency === "잘함 (Well)" ? "checked" : undefined
                    }
                    onChange={e => {
                        handleChange("잘함 (Well)", 'fluency');
                    }}
                />
        </Form.Group>
        <Form.Group controlId="formGridReligion">
            <Form.Label>종교 | Religion</Form.Label>
            <Form.Control 
                value={
                    studentList.religion !== '' ? studentList.religion : ''
                }
                onChange={e => {
                    handleChange(e.target.value, 'religion');
                }} />
        </Form.Group>
        <Form.Group controlId="formGridDietary">
            <Form.Label>음식물 규정식 사항 | Dietary Notes</Form.Label>
            <Form.Control placeholder="Peanut allergy, etc" 
                value={
                    studentList.dietaryNotes !== '' ? studentList.dietaryNotes : ''
                }
                onChange={e => {
                    handleChange(e.target.value, 'dietaryNotes');
                }}/>
        </Form.Group>

        <Form.Group controlId="formGridNote">
            <Form.Label>비고 | Other comments</Form.Label>
            <Form.Control 
                value={
                    studentList.comments !== '' ? studentList.comments : ''
                }
                onChange={e => {
                    handleChange(e.target.value, 'comments');
                }}/>
        </Form.Group>

        <Form.Group id="formGridClass">
        <Form.Label><b>희망하는 수업일 | Day of Class *</b></Form.Label>
            <Form.Check style={{paddingLeft:"20px"}}
                required
                inline
                type="radio"
                label="금 | Friday"
                name="formRadioClass"
                checked={
                    studentList.classDay === "금" ? "checked" : undefined
                }
                onChange={e => {
                    handleChange("금", 'classDay');
                }}
            />
            <Form.Check
                inline
                type="radio"
                label="토 | Saturday"
                name="formRadioClass"
                checked={
                    studentList.classDay === "토" ? "checked" : undefined
                }
                onChange={e => {
                    handleChange("토", 'classDay');
                }}
            />
        </Form.Group>
    {/* </Form> */}
    </Container>
  )
}

export default Student
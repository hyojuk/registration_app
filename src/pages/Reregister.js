import React from 'react';
import useSearch from '../hooks/useSearch';
import Stein from '../components/Stein';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Reregister = ({year}) => {
    const {email, setEmail, results, setResults} = useSearch();
    const handleSubmit = async event => {
        event.preventDefault();
        // console.log(email);
        const results = await Stein.searchDatabase(email);
        // console.log(results);
        setResults(results);
    };
  const handleRegister = async event => {
    event.preventDefault();
    results.forEach(async element => {
      // console.log(element);
      await Stein.writeRegistration(element, () => {
        window.location.href = '/confirmation';
      });
    });
  };
  return (
    <Container style={{marginTop:'50px'}}>
    <Form onSubmit={handleSubmit}>
     <Container>
          <h2>재등록 | Reregister </h2>
          <h4><div dangerouslySetInnerHTML={{ __html: year }} /></h4>
          <p>1-2학기 재학생만 가능, 신입생은 새로 등록해주세요. <br/>
          Only for returning students, for new students please use the other <a href="/register">form</a>.
          </p>
          <Form.Label><strong>부모 이메일 주소 | Parent Email</strong></Form.Label>
          <Row>
            <Col>
                <Form.Control required placeholder="abc@gmail.com" type="email"
                    value={
                        email ? email : ''
                    }
                    onChange={e => {
                        setEmail(e.target.value);
                    }}/>
            </Col>
            <Col>
            <Button variant="info" type="submit">
                Search
            </Button>
            </Col>
          </Row>
      </Container>
    </Form>
    <Form onSubmit={handleRegister}>
    <Container style={{marginTop:'10px'}}>
      {results ? 
      <div>Found {results.length} student(s): <br/>
        {results.map(element => 
        <b>{element.engName}<br/></b>)}
        {results.length === 0 ? <p>Please register <a href="/register">here</a>.</p>: <Button variant="success" type="submit" style={{marginTop:'10px'}}>
          Reregister all
        </Button> }
      </div>
      : ''
      }
    </Container>
    </Form>
    </Container>
  );
}

export default Reregister;
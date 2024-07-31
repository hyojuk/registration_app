import React from 'react';
import Button from 'react-bootstrap/Button';

const Home = ({year}) => {
  return (
    <div>
        <br/>
        {/* <Alert variant='success'>You can access online classes by clicking 
        <a href="/class"> here</a> and selecting your child's class. <br/><br/>
        해당 자녀 <a href="/class">수업반</a>을 들어가시면 온라인 수업/숙제를 보실 수 있습니다. </Alert> */}
        <div className="jumbotron jumbotron-fluid bg-dark text-center">
        <div className="jumbotron-background">
            <img src="../students.jpg" className="blur img-fluid "/>
        </div>
        <div className="container text-white">
            <h1>St. Andrew Kim Korean School</h1>
            <h2>성 김대건 한국 학교</h2><br></br>
            <div dangerouslySetInnerHTML={{ __html: year }} />
            <p><strong>Now accepting registrations</strong></p> 
            <p>
            <Button variant="success" href="/register">등록 | Register</Button>
           </p>
           <p> OR </p>
            <Button variant="primary" href="/reregister">재등록 | Reregister</Button>
        </div>
        </div>
    </div>
  )
}

export default Home;

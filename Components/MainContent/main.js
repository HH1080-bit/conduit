import './main.css'
import { Container } from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap';

import Slider from './Slider/slider';
import Posts from './Posts/Posts';
import Tags from './Aside/Tags/Tags';
import Contacts from './Aside/Contacts/Contacts';


const Main = () => {
  return (
    <div className='main'>
        <Container>
            <Row>
            <Col md={12} lg={7}><Slider/></Col>
            </Row>
            <Row>
            <Col lg={7}><Posts/></Col>  
            <Col xs={1}></Col>    
            <Col className='d-none d-lg-block' lg={4}><Tags/></Col>        
            </Row>
            <Row>
            <Col md={12} lg={7}><Posts btnColor="#B248D8"/></Col>  
            <Col xs={1}></Col>    
            <Col xs={4} className='d-none d-lg-block'><Contacts/></Col>        
            </Row>
            <Row>
            <Col md={12} lg={7}><Posts btnColor="#B248D8"/></Col>  
            <Col className='d-lg-none'><Contacts/></Col>
            </Row>
        </Container>
    </div>
  )
}

export default Main
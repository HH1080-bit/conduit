import { Navbar,Nav,Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    return <Navbar bg="dark" expand="lg" className='nav'>
        <Container>
    <Navbar.Brand href="#home" className='nav-head'>Conduit</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className='nav-collapse'>
      <Nav className="ml-auto">
        <Nav.Link href="#home"    className='nav-link'><NavLink to='/'>Home</NavLink></Nav.Link>
        <Nav.Link href="#Sign_in" className='nav-link'><NavLink to='/signIn'>Sign In</NavLink></Nav.Link>
        <Nav.Link href="#Sign_up" className='nav-link'><NavLink to='/signUp'>Sign Up</NavLink></Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
} 

export default NavBar
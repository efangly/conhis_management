import Logo from "../assets/images/logo1.png"
import { Link } from "react-router-dom"
import { FaChartLine,FaPills } from "react-icons/fa"
import { Container,Navbar,Nav } from 'react-bootstrap'

const NavigationBar = ()=>{
  return(
    <Navbar className="bg-navbg py-0 text-gray" expand="md" sticky="top" >
    <Container className="px-0" fluid="lg">
        <Navbar.Brand href='/' className="py-0">
          <img alt="" src={Logo} width="180" height="55" className="d-inline-block align-top"/>
        </Navbar.Brand>
        <Navbar.Toggle className="me-2" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='ms-auto' style={{ padding: 5 }}>
          <Link className="nav-link me-1" to='/' align="center"><FaChartLine size={28} style={{ color: "#27AE60" }} /> Interface</Link>
          <Link className="nav-link me-1" to='/drug' align="center"><FaPills size={28} style={{ color: "#3498DB" }} /> Drug Profile</Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default NavigationBar
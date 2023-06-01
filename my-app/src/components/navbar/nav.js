
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { isLogin } from '../../utils';
import './nav.css'

function MyNavbar(){

  const [loginStatus , setLoginStatus] = useState(isLogin() ? 'خروج' : 'ورود')
  const logoutHandler = ()=>{
    document.cookie = "username=admin; expires=Thu, 01 Jan 2021 00:00:00 UTC; path=/;";
    setLoginStatus('ورود')

  }
  
  
  const expand = 'md'
    return(
        <Navbar style={{backgroundColor:'rgb(186 , 182 ,253)'}} expand={expand} className="mb-3">
          <Container >
            <Navbar.Brand style={{font:'lalezar' , fontSize:"25px"}} href="#">design by Reza</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                 <NavLink to='/' className='nav-link'>صفحه اصلی</NavLink>
                 <NavLink to='/about' className='nav-link'> درباره ما</NavLink>
                 <NavLink to='/article' className='nav-link'> مقالات</NavLink>
                 <NavLink to='/Panel' className='nav-link'> پنل</NavLink>
                  {
                    isLogin() ?
                    <NavLink to='/Login' onClick={logoutHandler} className='nav-link'> {loginStatus}</NavLink>
                    :
                    <NavLink to='/Login' className='nav-link'> {loginStatus}</NavLink>

                  }
                              

                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    )
}
export default MyNavbar;
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import IMAGES from '../../images/images';
import './NavbarMenu.css'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoMail } from 'react-icons/io5'

export default function NavbarMenu() {
    return (
        <Navbar className='navbar' expand='md' className='mb-3'>
            <Container fluid>
                <Navbar.Brand href='#'>
                    <img src={IMAGES.person1} alt="" />
                    <p>Bussiness<br />
                        Consultant</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-sm`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    placement='end'
                >
                    <Offcanvas.Body>
                        <Nav className='justify-content-center  flex-grow-1 pe-3'>
                            <Nav.Link href='#action2' className='link_phone_mail'>
                                <IoMail />
                                <BsFillTelephoneFill />
                            </Nav.Link>
                            <Nav.Link href='#contact'>CONTACT US</Nav.Link>
                            <Nav.Link href='#news'>NEWS</Nav.Link>
                            <Nav.Link href='#service'>SERVICES</Nav.Link>
                            <Nav.Link href='#about'>ABOUT US</Nav.Link>
                            <Nav.Link href='#home'> HOME </Nav.Link>
                        </Nav>
                        {/* <Navbar.Brand
                            className='justify-content-end flex-grow-1 pe-3'
                            href='#'
                        >
                            <span className='brand txt_green'>Main</span> Wp
                        </Navbar.Brand> */}
                    </Offcanvas.Body>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                            بستن صفحه
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

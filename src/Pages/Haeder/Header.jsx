import React, { useState } from 'react'
//! custom css
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import IMAGES from '../../images/images'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoMail } from 'react-icons/io5'

export default function Header() {
    return (
        <>
            <div className='header'>
                {NavbarMenu()}

                <div className="img_background">
                    <img src={IMAGES.back_header2} alt="" />
                </div>
                <div className="header_content">
                    <h2 className='header_content_title'>Hello!  We'r Business<br />
                        Consultancy</h2>
                    <p className="content_sub_title">Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl, consectetur et luctus et, porta ut dolor. Curabitur ultricies ultrices nulla. Morbi blandit nec est vitae dictum. Etiam vel consectetur diam.</p>
                    <button className="content_btn btn btn-warning">Read More</button>
                </div>
            </div>
        </>
    )
}


//! navbar component
function NavbarMenu() {
    return <Navbar expand='md' className='bg-transparent mb-3'>
        <Container fluid>
            <Navbar.Brand href='#'>
                <div className="my_logo">
                    <img className='logotop' src={IMAGES.logoBlue} alt="" />
                    <img className='logobottom' src={IMAGES.logoYellow} alt="" />
                </div>
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
                    <Nav className='justify-content-center flex-grow-1 pe-3'>
                        <Nav.Link href='#home'> HOME </Nav.Link>
                        <Nav.Link href='#about'>ABOUT US</Nav.Link>
                        <Nav.Link href='#service'>SERVICES</Nav.Link>
                        <Nav.Link href='#news'>NEWS</Nav.Link>
                        <Nav.Link href='#contact'>CONTACT US</Nav.Link>
                        <Nav.Link href='#relation' className='link_phone_mail'>
                            <IoMail />
                            <BsFillTelephoneFill />
                        </Nav.Link>

                    </Nav>

                </Offcanvas.Body>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                        CLOSE
                    </Offcanvas.Title>
                </Offcanvas.Header>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>;
}

import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg">
            <div class="container"> <a class="navbar-brand navbar-logo" href="#"> <img src='' alt="logo" class="logo-1" /> </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="fas fa-bars"></span> </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"> <a class="nav-link" href="" data-scroll-nav="0">Home</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="#" data-scroll-nav="1">About</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="#" data-scroll-nav="2">Features</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="#" data-scroll-nav="3">Team</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="#" data-scroll-nav="4">Testimonials</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="#" data-scroll-nav="5">Faq</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="#" data-scroll-nav="6">Contact</a> </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

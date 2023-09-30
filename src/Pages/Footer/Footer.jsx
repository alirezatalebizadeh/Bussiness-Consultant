import React from 'react'
import './Footer.css'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import IMAGES from './../../images/images'

export default function Footer() {
  return (
    <div className='Footer'>
      {/* footer form */}
      <div className='footer_form'>
        <h2 className='form_title'>Connect Our Consulting Services</h2>
        <div className='form_desc'>
          <p className='text-white subTitle'>
            Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl,
            consectetur et luctus et,
            <br /> porta ut dolor. Curabitur ultricies ultrices nulla.{' '}
          </p>
          <button className='btn btn-warning btn_form text-white'>
            Start Your Project Now
          </button>
        </div>
        {/* //!form  */}
        {FormEmail()}
      </div>
      {/* //! footer links */}
      {LinksFooter()}

      {/* //!footer sotial and copy */}
      {CopySotial()}
    </div>
  )
}




//
//
//
//
//
//
function FormEmail() {
  return <div className='form_container'>
    <div className='wrapper px-1'>
      <h2 className='form_title mt-5 title'>
        Subscribe To Our Newsletter
      </h2>
      <p className='text-white subTitle'>
        Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl,
        consectetur et luctus et,
        <br /> porta ut dolor. Curabitur ultricies ultrices nulla.{' '}
      </p>
      <div className='form_email'>
        <input
          type='email'
          placeholder='Enter Your Email'
          className='form_input' />
        <button className='btn btn-warning btn_email text-white'>
          Subscribe Now
        </button>
      </div>
    </div>
  </div>
}

function LinksFooter() {
  return (
    <div className='footer_links' id='contact'>
      <div className='footer_logo'>
        <div className='logo_top'>
          <h2 className='brand_name'>
            Bussiness <br /> Consultant
          </h2>
          <div className='logo'>
            <img src={IMAGES.logoBlue} className='img1' alt='logo' />
            <img src={IMAGES.logoYellow} className='img2' alt='logo' />
          </div>
        </div>
        <p className='subTitle'>
          123, Street Name, City Name,
          <br /> New York, NY
        </p>
      </div>
      <ul className='Footer_links_container'>
        <li className='link_item'>
          <a href='#' className='link_target'>
            Home
          </a>
        </li>
        <li className='link_item'>
          <a href='#' className='link_target'>
            About Us
          </a>
        </li>
        <li className='link_item'>
          <a href='#' className='link_target'>
            Services
          </a>
        </li>

        <li className='link_item'>
          <a href='#' className='link_target'>
            News
          </a>
        </li>
      </ul>

      <ul className='Footer_links_container'>
        <li className='link_item'>
          <a href='#' className='link_target'>
            Blog
          </a>
        </li>
        <li className='link_item'>
          <a href='#' className='link_target'>
            Career
          </a>
        </li>
        <li className='link_item'>
          <a href='#' className='link_target'>
            Team
          </a>
        </li>

        <li className='link_item'>
          <a href='#' className='link_target'>
            Privacy
          </a>
        </li>
      </ul>

      <ul className='Footer_links_container'>
        <li className='link_item'>
          <a href='#' className='link_target'>
            Contact
          </a>
        </li>
        <li className='link_item'>
          <a href='#' className='link_target'>
            Phone: 09036439883
          </a>
        </li>
        <li className='link_item'>
          <a href='#' className='link_target'>
            Fax: 9840978726
          </a>
        </li>

        <li className='link_item' id='relation'>
          <a href='#' className='link_target'>
            Email: alireza.talebizadeh78@gmail.com
          </a>
        </li>
      </ul>
    </div>
  )
}

function CopySotial() {
  return (
    <div className='footer_bottom'>
      <h5 className='subTitle'>
        ©Business Consultant. All Right Reserved 2020.
      </h5>
      <div className='sosial'>
        <a href='#'>
          <FaFacebookF className='sotial_link' />
        </a>
        <a href='#'>
          <AiOutlineTwitter className='sotial_link' />
        </a>
        <a href='#'>
          <FaLinkedinIn className='sotial_link' />
        </a>
        <a href='#'>
          <AiFillInstagram className='sotial_link' />
        </a>
      </div>
    </div>
  )
}

import React from 'react'
import './Footer.css'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import IMAGES from './../../images/images'

export default function Footer () {
  console.log(IMAGES)
  return (
    <div className='Footer'>
      {/* footer form */}
      <div className='footer_form'>
        
      </div>
      {/* footer links */}
      <div className='footer_links'>
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

          <li className='link_item'>
            <a href='#' className='link_target'>
              Email: alireza.talebizadeh78@gmail.com
            </a>
          </li>
        </ul>
      </div>

      {/* footer bottom */}
      <div className='footer_bottom'>
        <h5>©Business Consultant. All Right Reserved 2020.</h5>
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
    </div>
  )
}

import React from 'react'
import NavbarMenu from '../../Component/Navbar/NavbarMenu'
import './Header.css'
import IMAGES from '../../images/images'

export default function Header() {
    return (
        <>
            <div className='header'>
                <NavbarMenu />
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

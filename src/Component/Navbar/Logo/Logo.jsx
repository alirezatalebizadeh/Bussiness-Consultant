import React from 'react'
import './Logo.css'
import IMAGES from '../../../images/images'
export default function Logo(props) {
    return (
        <div className='MyLogo' style={{ textAlign: `${props.location}` }}>
            <img className='logo_item top' src={IMAGES.logoBlue} alt="" />
            <img className='logo_item bottom' src={IMAGES.logoYellow} alt="" />
        </div>
    )
}

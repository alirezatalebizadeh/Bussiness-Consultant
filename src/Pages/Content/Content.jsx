import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import IMAGES from '../../images/images'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import required modules
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules'
import './Content.css'

export default function Content () {
  return (
    <div className='main_content'>
      <div className='Our_Project'>
        <ul className='menu_brand'>
          <li className='brand_item'>
            <a href='#'>
              <img
                loading='lazy'
                src={IMAGES.brand1}
                className='logo_brand_img'
                alt='brand1'
              />
            </a>
          </li>
          <li className='brand_item'>
            <a href='#'>
              <img
                loading='lazy'
                src={IMAGES.brand2}
                className='logo_brand_img'
                alt='brand1'
              />
            </a>
          </li>
          <li className='brand_item'>
            <a href='#'>
              <img
                loading='lazy'
                src={IMAGES.brand3}
                className='logo_brand_img'
                alt='brand1'
              />
            </a>
          </li>
          <li className='brand_item'>
            <a href='#'>
              <img
                loading='lazy'
                src={IMAGES.brand4}
                className='logo_brand_img'
                alt='brand1'
              />
            </a>
          </li>
          <li className='brand_item'>
            <a href='#'>
              <img
                loading='lazy'
                src={IMAGES.brand5}
                className='logo_brand_img'
                alt='brand1'
              />
            </a>
          </li>
          <li className='brand_item'>
            <a href='#'>
              <img
                loading='lazy'
                src={IMAGES.brand6}
                className='logo_brand_img'
                alt='brand1'
              />
            </a>
          </li>
          <li className='brand_item'>
            <a href='#'>
              <img
                loading='lazy'
                src={IMAGES.brand7}
                className='logo_brand_img'
                alt='brand1'
              />
            </a>
          </li>
          <li className='brand_item'>
            <a href='#'>
              <img
                loading='lazy'
                src={IMAGES.brand8}
                className='logo_brand_img'
                alt='brand1'
              />
            </a>
          </li>
        </ul>
      </div>
      <div className='main_content_slider_accordion'>
        <div className='slider_opinion'>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }}
            pagination={{
              clickable: true
            }}
            modules={[EffectCoverflow, Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <div className='card'>
                <img src={IMAGES.person1} alt='person' />
                <div className='card_body'>
                  <p className='card_title'>
                    I have these guys taking care of my SEO and lead generation.
                    Since using these guys, I have noticed.
                  </p>
                  <div className='body_footer'>
                    <div className='body_line'></div>
                    <span>Dennis Jones</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img src={IMAGES.person2} alt='person' />
                <div className='card_body'>
                  <p className='card_title'>
                    Maecenas interdum lorem eleifend orci aliquam mollis.
                    Aliquam non rhon magna. Suspendisse aliquot.
                  </p>
                  <div className='body_footer'>
                    <div className='body_line'></div>
                    <span>Dennis Brewer</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img src={IMAGES.person3} alt='person' />
                <div className='card_body'>
                  <p className='card_title'>
                    Fusce at nisi eget dolor rhoncus facilisis. Mauris ante
                    nisl, consec et luctus et, porta ut dolor. Curabitur
                    ultricies ultrices nulla. Morbi blandit nec est vitae
                    dictum.
                  </p>
                  <div className='body_footer'>
                    <div className='body_line'></div>
                    <span>Dorothy Collins</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img src={IMAGES.person1} alt='person' />
                <div className='card_body'>
                  <p className='card_title'>
                    I have these guys taking care of my SEO and lead generation.
                    Since using these guys, I have noticed.
                  </p>
                  <div className='body_footer'>
                    <div className='body_line'></div>
                    <span>Dennis Jones</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img src={IMAGES.person2} alt='person' />
                <div className='card_body'>
                  <p className='card_title'>
                    Maecenas interdum lorem eleifend orci aliquam mollis.
                    Aliquam non rhon magna. Suspendisse aliquot.
                  </p>
                  <div className='body_footer'>
                    <div className='body_line'></div>
                    <span>Dennis Brewer</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img src={IMAGES.person3} alt='person' />
                <div className='card_body'>
                  <p className='card_title'>
                    Fusce at nisi eget dolor rhoncus facilisis. Mauris ante
                    nisl, consec et luctus et, porta ut dolor. Curabitur
                    ultricies ultrices nulla. Morbi blandit nec est vitae
                    dictum.
                  </p>
                  <div className='body_footer'>
                    <div className='body_line'></div>
                    <span>Dorothy Collins</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='Fag'>
          <h2 className='title_section'>
            FAQ
            <div className='border_bottom'></div>
          </h2>
          <Accordion defaultActiveKey='0'>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>
                Is it a ‘hard sell’ by the consultant carrying out the Free
                Business Health Assessment?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
              <Accordion.Header>
                If I employ an Illumina consultant will it disrupt my company?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='2'>
              <Accordion.Header>
                Will the associated work be strictly confidential?{' '}
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='3'>
              <Accordion.Header>
                If I employ an Illumina consultant will it disrupt my company?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='4'>
              <Accordion.Header>
                How will it differ from advice from my accountant or bank
                manager?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='5'>
              <Accordion.Header>
                How do I know I am getting the right specialist?{' '}
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='6'>
              <Accordion.Header>
                How do you guarantee your services?{' '}
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

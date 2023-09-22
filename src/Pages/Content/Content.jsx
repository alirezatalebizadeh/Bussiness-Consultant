import React, { useState } from 'react'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
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
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Virtual
} from 'swiper/modules'
import './Content.css'

export default function Content () {
  const [paragrah1, setParagraph1] = useState(
    'Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet,'
  )
  const [paragrah2, setParagraph2] = useState(
    'Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet,'
  )
  const [paragrah13, setParagraph3] = useState(
    'Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet,'
  )
  const [paragrah14, setParagraph4] = useState(
    'Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet,'
  )
  return (
    <div className='main_content'>
      <div className='slider_project'>
        <h2 class='title_section'>
          OUR PROJECTS<div class='border_bottom'></div>
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10
            }
          }}
          modules={[Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className='card_project'>
              <img src={IMAGES.team1} alt='team' className='card_background' />
              <h4 className='card_title'>Praesent dictum quis </h4>
              <div className='card_hover'>
                <h3 className='hover_title'>Praesent dictum quis </h3>
                <p className='subTitle'>{paragrah1}</p>
                <a
                  href='#'
                  onClick={() => {
                    setParagraph1(
                      'Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet nibh. Curabitur auctor leo et libero consectetur gravida. Morbi gravida et sem dictum varius. Proin eget viverra sem, non euismod est. Maecenas facilisis urna in lectus aliquet venenatis. Etiam et metus nec mauris condimentum vulputate. Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate luctus. Pellentesque vulputate viverra ex eget elementum. Aliquam ut feugiat felis.'
                    )
                  }}
                  className='hover_link'
                >
                  Read More <BsFillArrowUpRightCircleFill />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card_project'>
              <img src={IMAGES.team2} alt='team' className='card_background' />
              <h4 className='card_title'>Praesent dictum quis </h4>
              <div className='card_hover'>
                <h3 className='hover_title'>Praesent dictum quis </h3>
                <p className='subTitle'>{paragrah2}</p>
                <a
                  href='#'
                  onClick={() => {
                    setParagraph2(
                      'Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet nibh. Curabitur auctor leo et libero consectetur gravida. Morbi gravida et sem dictum varius. Proin eget viverra sem, non euismod est. Maecenas facilisis urna in lectus aliquet venenatis. Etiam et metus nec mauris condimentum vulputate. Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate luctus. Pellentesque vulputate viverra ex eget elementum. Aliquam ut feugiat felis.'
                    )
                  }}
                  className='hover_link'
                >
                  Read More <BsFillArrowUpRightCircleFill />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card_project'>
              <img src={IMAGES.team3} alt='team' className='card_background' />
              <h4 className='card_title'>Praesent dictum quis </h4>
              <div className='card_hover'>
                <h3 className='hover_title'>Praesent dictum quis </h3>
                <p className='subTitle'>{paragrah13}</p>
                <a
                  href='#'
                  onClick={() => {
                    setParagraph3(
                      'Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet nibh. Curabitur auctor leo et libero consectetur gravida. Morbi gravida et sem dictum varius. Proin eget viverra sem, non euismod est. Maecenas facilisis urna in lectus aliquet venenatis. Etiam et metus nec mauris condimentum vulputate. Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate luctus. Pellentesque vulputate viverra ex eget elementum. Aliquam ut feugiat felis.'
                    )
                  }}
                  className='hover_link'
                >
                  Read More <BsFillArrowUpRightCircleFill />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card_project'>
              <img src={IMAGES.team4} alt='team' className='card_background' />
              <h4 className='card_title'>Praesent dictum quis </h4>
              <div className='card_hover'>
                <h3 className='hover_title'>Praesent dictum quis </h3>
                <p className='subTitle'>{paragrah14}</p>
                <a
                  href='#'
                  onClick={() => {
                    setParagraph4(
                      'Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet nibh. Curabitur auctor leo et libero consectetur gravida. Morbi gravida et sem dictum varius. Proin eget viverra sem, non euismod est. Maecenas facilisis urna in lectus aliquet venenatis. Etiam et metus nec mauris condimentum vulputate. Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate luctus. Pellentesque vulputate viverra ex eget elementum. Aliquam ut feugiat felis.'
                    )
                  }}
                  className='hover_link'
                >
                  Read More <BsFillArrowUpRightCircleFill />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card_project'>
              <img src={IMAGES.team1} alt='' className='card_background' />
              <h4 className='card_title'>Praesent dictum quis </h4>
              <div className='card_hover'>
                <h3 className='hover_title'>Praesent dictum quis</h3>
                <p className='subTitle'>{paragrah1}</p>
                <a
                  href='#'
                  onClick={() => {
                    setParagraph1(
                      'Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet nibh. Curabitur auctor leo et libero consectetur gravida. Morbi gravida et sem dictum varius. Proin eget viverra sem, non euismod est. Maecenas facilisis urna in lectus aliquet venenatis. Etiam et metus nec mauris condimentum vulputate. Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate luctus. Pellentesque vulputate viverra ex eget elementum. Aliquam ut feugiat felis.'
                    )
                  }}
                  className='hover_link'
                >
                  Read More <BsFillArrowUpRightCircleFill />
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='Our_Project'>
        <h2 class='title_section'>
          TRUSTED BY CUSTOMERS<div class='border_bottom'></div>
        </h2>
        <p class='card_title text-center mb-5'>
          In consequat, quam id sodales hendrerit, eros mi molestie leo, nec
          <br />
          lacinia risus neque tristique augue. Proin tempus
        </p>
        {newFunction_2()}
      </div>
      <div className='main_content_slider_accordion'>
        {newFunction_1()}
        {newFunction()}
      </div>
    </div>
  )
}

function newFunction_2 () {
  return (
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
  )
}

function newFunction_1 () {
  return (
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
                Maecenas interdum lorem eleifend orci aliquam mollis. Aliquam
                non rhon magna. Suspendisse aliquot.
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
                Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl,
                consec et luctus et, porta ut dolor. Curabitur ultricies
                ultrices nulla. Morbi blandit nec est vitae dictum.
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
                Maecenas interdum lorem eleifend orci aliquam mollis. Aliquam
                non rhon magna. Suspendisse aliquot.
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
                Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl,
                consec et luctus et, porta ut dolor. Curabitur ultricies
                ultrices nulla. Morbi blandit nec est vitae dictum.
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
  )
}

function newFunction () {
  return (
    <div className='Fag'>
      <h2 className='title_section'>
        FAQ
        <div className='border_bottom'></div>
      </h2>
      <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            Is it a ‘hard sell’ by the consultant carrying out the Free Business
            Health Assessment?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='1'>
          <Accordion.Header>
            If I employ an Illumina consultant will it disrupt my company?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='2'>
          <Accordion.Header>
            Will the associated work be strictly confidential?{' '}
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='3'>
          <Accordion.Header>
            If I employ an Illumina consultant will it disrupt my company?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='4'>
          <Accordion.Header>
            How will it differ from advice from my accountant or bank manager?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='5'>
          <Accordion.Header>
            How do I know I am getting the right specialist?{' '}
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='6'>
          <Accordion.Header>
            How do you guarantee your services?{' '}
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

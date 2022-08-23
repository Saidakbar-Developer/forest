import './corusel.css'
// import react carusel
import React, { Component } from "react";
import Slider from "react-slick";
// import img
import img from '../../images/villa (1).png'
import img1 from '../../images/villa (2).png'
import img2 from '../../images/villa (3).png'
import img3 from '../../images/villa (3).png'
import img4 from '../../images/villa (3).png'
import img5 from '../../images/villa (3).png'

// ICON
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
import {FiArrowRight} from 'react-icons/fi'
// import usestate
import { useState } from 'react';

const data = [
    {
      id: 1,
      img: img,
      nomi: 'лесный дом в Новосибирске',
      nomi1: 'Continue Reading'
    },
    {
      id: 2,
      img: img1,
      nomi: 'Коттедж в Краснодаре',
      nomi1: 'Continue Reading'
    },
    {
      id: 3,
      img: img2,
      nomi: 'Коттедж в Новгороде',
      nomi1: 'Continue Reading'
    },
    {
      id: 4,
      img: img3,
      nomi: 'лесный дом в Новосибирске',
      nomi1: 'Continue Reading'
    },
    {
      id: 5,
      img: img4,
      nomi: 'лесный дом в Новосибирске',
      nomi1: 'Continue Reading'
    },
    {
      id: 6,
      img: img5,
      nomi: 'лесный дом в Новосибирске',
      nomi1: 'Continue Reading'
    }
    
]

const ReactCarusel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
    // CARUSEL SETTINGS
  const settings = {
    dots: true,
    infinite: true,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ],
    afterChange: function(index) {
      setActiveSlide(index)
    },
    className: "center",
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className='Carusel'>
    <div className='container karusel_me'>
       <div className="reactcarusel_p">
        </div>
        <div className="carusel_main_bx_img">
        </div>
        <Slider {...settings}>
          {
            data.map((item, index)=>(
                <div className={activeSlide === index ? "karusel_slide active" : "karusel_slide"} key={item.id} >
                    <div className="karusel_img">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="karusel_text">
                        <div className="carusel_main_box_p">
                            <p className='karusel_p'>{item.nomi}</p>
                        </div>
                        <div className="carusel_main_box_arow">
                        </div>
                    </div>
                </div>
            ))
          }
        </Slider>
        <div className="carusel_main_bx_img1">
        </div>
    </div>
    </div>
  )
}

export default ReactCarusel
const NextArrow = ({onClick}) => {
    return (
      <div className='nextt_me next_leftt'  onClick={onClick}>
        <IoIosArrowForward/>
      </div>
    )
  }
  
  
  const PrevArrow = ({onClick}) => {
    return (
      <div className='nextt_me prev_leftt' onClick={onClick}>
        <IoIosArrowBack/>
      </div>
    )
  }
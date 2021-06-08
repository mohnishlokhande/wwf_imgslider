import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageData } from "./Data";
import "./Slider.css";


const ImgSlider = () => {

    const settings = {
    //   dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    };

    // const [activeSlide0, setActiveSlide0] = useState(0)
    // const [activeSlide1, setActiveSlide1] = useState(1)
    // const [activeSlide2, setActiveSlide2] = useState(2)
    // const DataLeng = ImageData.length
    // const Left = () => {
    //   return (
    //     <>
    //       <img
    //         src="long-arrow-left.png"
    //         alt=""
    //         style={{
    //           width: "40px",
    //           height: "30px",
    //         }}
    //       />
    //     </>
    //   )
    // }
    // const Right = () => {
    //   return (
    //     <>
    //       <img
    //         src="long-arrow-right .png"
    //         alt=""
    //         style={{
    //           width: "40px",
    //           height: "30px",
    //         }}
    //       />
    //     </>
    //   )
    // }
  
    // const Sliderhandler = (i) => {
    //   setActiveSlide1(i)
    //   let k = i
    //   k++
    //   if (k >= DataLeng) {
    //     setActiveSlide2(0)
    //   } else {
    //     setActiveSlide2(k)
    //   }
    //   let y = i
    //   y--
    //   if (y < 0) {
    //     setActiveSlide0(DataLeng - 1)
    //   } else {
    //     setActiveSlide0(y)
    //   }
    // }

    return (
      <div style={{width:"100%"}}>
        <h2>Spotlight</h2>
        <p>Lorem Ipsum has been the industry’s standard dummy text ever</p>
        <div>
        <div className="backimg__for__slider"></div>
        <Slider {...settings}>
          
            {ImageData &&
              ImageData.map((res, i) => {
                return (
                 
                    <div className="ImageSlider__widthset" key={i}>
                      <div
                        style={{
                          alignSelf: "center",
                          width: "95%",
                          borderRadius: "10px",
                          overflow: "hidden",
                          backgroundImage: res.img ? `url(${res.img})` : "",
                          height:"100%",
                          backgroundSize:"100% 100%"
                        //   height: activeSlide0 === i ? "250px" : "",
                        }}
                        className="gggg"
                        key={i}
                      >
                        <div
                          style={{
                            backgroundImage: res.img ? `url(${res.img})` : "",
                            backgroundPosition:"cover",
                            // height: activeSlide1 === i ? "250px" : "",
                            transition: "all 0.8s",
                          }}
                          key={i}
                        >
                          <div
                            style={{
                              backgroundImage: res.img ? `url(${res.img})` : "",
                            //   height: activeSlide2 === i ? "250px" : "",
                              transition: "all 0.8s",
                            }}
                            key={i}
                          >
                            <div
                              style={{
                                backgroundImage: res.img
                                  ? `url(${res.img})`
                                  : "",
                                // height: "200px",
                                transition: "all 0.8s",
                              }}
                            >
                              <div
                                className="ImageSlider"
                                // style={{

                                //   opacity: "0.7",
                                // }}
                              >
                                <div className="ImagesliderBG">
                                  <div className="ImageSlidertxt1">
                                    {res.title}
                                  </div>
                                  <div className="ImageSlidertxt2">
                                    {res.txt}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                )
              })}
        </Slider>
        </div>
      </div>
    );
 
}

export default ImgSlider
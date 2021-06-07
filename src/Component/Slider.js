import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageData } from "./Data";
import "./Slider.css";


const ImgSlider = () => {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
      cssEase: "linear"
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
      <div>
        <h2>Spotlight</h2>
        <p>Lorem Ipsum has been the industry’s standard dummy text ever</p>
        <Slider {...settings}>
          
            {ImageData &&
              ImageData.map((res, i) => {
                return (
                 
                    <div className="ImageSlider__widthset" key={i}>
                      <div
                        style={{
                          alignSelf: "center",
                          width: "97%",
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
    );
 
}

export default ImgSlider
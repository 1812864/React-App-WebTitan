import { render } from '@testing-library/react'
import React from 'react'
import back from '../img/back.svg'
import next from '../img/next.svg'

export default class SliderPage extends React.Component {
    // constructor ( props ) {
    //     super ( props )
    //     this.handleBack = this.handleBack.bind ( this )
    //     this.handleNext = this.handleNext.bind ( this )
    //     this.topSliderItemWidth = document.getElementsByClassName("slider1")[0].clientWidth
    //     this.topSliderItemCount = 4
    //     this.currentTopSliderItem = 1
    //     // this. topSliderInterval = setInterval(nextTopSlider, 2000);
    //     // var subSliderInterval = setInterval(nextSubSlider1, 5000);
    //  }

    //  componentDidMount ( ) {
    //     window.addEventListener("load", function() {
    //         let topSlider = document.getElementById("top-slider")
    //         if (topSlider) {
    //           topSlider.style.width = topSliderItemWidth * topSliderItemCount + "px"
    //         }
    //       let subSlider1Items = document.querySelectorAll("#sub-slider-1-items .slide-item")
    //       subSlider1Items.forEach((elm) => {
    //         elm.style.width = subSlider1ItemWidth + "px"
    //       })
    //     })
    //  }
    //  componentWillUnmount ( ) {
    //     window.addEventListener("unload", function() {
    //         clearInterval(topSliderInterval)
    //         clearInterval(subSliderInterval)
    //     });
    //  }
     
    // handleNext() {
    //     function nextTopSlider () {
    //         if (currentTopSliderItem === topSliderItemCount) {
    //           currentTopSliderItem = 1
    //         } else {
    //           currentTopSliderItem++
    //         }
          
    //         let leftPosition = (currentTopSliderItem - 1) * topSliderItemWidth
    //         let sliderElement = document.getElementById("top-slider")
    //         if (sliderElement) {
    //           if (currentTopSliderItem === 1) {
    //             sliderElement.style.left = "0"
    //           } else {
    //             sliderElement.style.left = "-" + leftPosition + "px"
    //           }
    //         }
          
    //         let pagingElement = document.getElementById("slider-paging")
    //         if (pagingElement) {
    //           pagingElement.innerHTML = currentTopSliderItem + "/" + topSliderItemCount
    //         }
    //       }
    // }
    // handleBack() {
    //     function backTopSlider () {
    //         if (currentTopSliderItem === 1) {
    //           currentTopSliderItem = topSliderItemCount;
    //         } else {
    //           currentTopSliderItem--
    //         }
          
    //         let leftPosition = (currentTopSliderItem - 1) * topSliderItemWidth
    //         let sliderElement = document.getElementById("top-slider")
    //         if (sliderElement) {
    //           if (currentTopSliderItem === 1) {
    //             sliderElement.style.left = "0"
    //           } else {
    //             sliderElement.style.left = "-" + leftPosition + "px"
    //           }
    //         }
          
    //         let pagingElement = document.getElementById("slider-paging");
    //         if (pagingElement) {
    //           pagingElement.innerHTML = currentTopSliderItem + "/" + topSliderItemCount;
    //         }
    //     }
    // }
    render() {
        return(
            <div className="slider">
                <div className="slider-main" id="top-slider">
                    <div className="slide-item slider1">
                        <section>
                            <div className="contain-container">
                                <div className="contain1">
                                    <div className="main-tittle">
                                    {" "}
                                    <span className="tittle">
                                        <strong>INSPIRE</strong> YOUR WORK
                                    </span>
                                    </div>
                                    <div className="main-decription">
                                    <span className="decription">
                                        Founded on trust and experience, by a professional team, with a
                                        big vision and mission to provide the best services to our
                                        clients.
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="slide-item slider1-1">
                        <section>
                            <div className="contain-container">
                                <div className="contain1">
                                    <div className="main-tittle">
                                    {" "}
                                    <span className="tittle">
                                        <strong>COMPREHENSIVE</strong> INNOVATIONS
                                    </span>
                                    </div>
                                    <div className="main-decription">
                                    <span className="decription">
                                        A dedicated and professional team that offers a wide range of
                                        advanced solution for offshore software testing and
                                        comprehensive development services.
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="slide-item slider1-2">
                        <section>
                            <div className="contain-container">
                                <div className='contain1'>
                                    <div className="main-tittle">
                                    {" "}
                                    <span className="tittle">
                                        <strong>INSPIRE</strong> YOUR WORK
                                    </span>
                                    </div>
                                    <div className="main-decription">
                                    <span className="decription">
                                        Founded on trust and experience, by a professional team, with a
                                        big vision and mission to provide the best services to our
                                        clients.
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="slide-item slider1-3">
                    <section>
                        <div className="contain-container">
                            <div className='contain1'>
                                <div className="main-tittle">
                                {" "}
                                <span className="tittle">
                                    <strong>INSPIRE</strong> YOUR WORK
                                </span>
                                </div>
                                <div className="main-decription">
                                <span className="decription">
                                    Founded on trust and experience, by a professional team, with a
                                    big vision and mission to provide the best services to our
                                    clients.
                                </span>
                                </div>
                            </div>
                        </div>
                    </section>
                    </div>
                </div>
                <div className="contain2">
                    <button className="control-back" onclick={this.handleBack}>
                    <img src={back} alt="" />
                    </button>
                    <span style={{ fontSize: 35 }} id="slider-paging">
                    1/4
                    </span>
                    <button className="control-next" onclick={this.handleNext}>
                    <img src={next} alt="" />
                    </button>
                </div>
            </div>
    
        )
    }
}
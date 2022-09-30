
import React from 'react'
import back from '../img/back.svg'
import next from '../img/next.svg'

export default class SliderPage extends React.Component {
    constructor(props) {
        super(props)
        this.topSliderItemWidth = 0
        this.topSliderItemCount = 4
        this.currentTopSliderItem = 1
        setInterval(() => {
          this.nextTopSlider(this.topSliderItemWidth, this.topSliderItemCount)
        }, 5000);
    }
    loadTopSlider(topSliderItemWidth, topSliderItemCount) {
        topSliderItemWidth = document.getElementsByClassName("slide-item")[0].clientWidth
        let topSlider = document.getElementById("top-slider")
        if (topSlider) {
            topSlider.style.width = topSliderItemWidth * topSliderItemCount + 1 + "px" 
        }
    }
    backTopSlider(topSliderItemWidth, topSliderItemCount) {
        if (this.currentTopSliderItem === 1) {
            this.currentTopSliderItem = topSliderItemCount

            topSliderItemWidth = document.getElementsByClassName("slide-item")[this.currentTopSliderItem - 1].clientWidth
        } else {
            topSliderItemWidth = document.getElementsByClassName("slide-item")[this.currentTopSliderItem - 1].clientWidth
            this.currentTopSliderItem--
        }
        let leftPosition = (this.currentTopSliderItem - 1) * topSliderItemWidth
        let sliderElement = document.getElementById("top-slider")
        if (sliderElement) {
            if (this.currentTopSliderItem === 1) {
                sliderElement.style.left = "0"
            } else {
                sliderElement.style.left = "-" + leftPosition + "px"
            }
        }
        let pagingElement = document.getElementById("slider-paging")
        if (pagingElement) {
            pagingElement.innerHTML = this.currentTopSliderItem + "/" + topSliderItemCount
        }
    }
    nextTopSlider(topSliderItemWidth, topSliderItemCount) {
        if (this.currentTopSliderItem === topSliderItemCount) {
            this.currentTopSliderItem = 1
            topSliderItemWidth = document.getElementsByClassName("slide-item")[this.currentTopSliderItem - 1].clientWidth
        } else {
            topSliderItemWidth = document.getElementsByClassName("slide-item")[this.currentTopSliderItem - 1].clientWidth
            this.currentTopSliderItem++
        }
        let leftPosition = (this.currentTopSliderItem - 1) * topSliderItemWidth
        let sliderElement = document.getElementById("top-slider")
        if (sliderElement) {
            if (this.currentTopSliderItem === 1) {
                sliderElement.style.left = "0"
            } else {
                sliderElement.style.left = "-" + leftPosition + "px"
            }
        }
        let pagingElement = document.getElementById("slider-paging")
        if (pagingElement) {
            pagingElement.innerHTML = this.currentTopSliderItem + "/" + topSliderItemCount
        }
    }
    componentDidMount() {
        window.addEventListener("load", this.loadTopSlider(this.topSliderItemWidth, this.topSliderItemCount))
    }
    componentWillUnmount() {
        window.removeEventListener('unload', this.loadTopSlider)
    }
    render() {
        return (
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
                    <button className="control-back" onClick={() => {
                        this.backTopSlider(this.topSliderItemWidth, this.topSliderItemCount)
                    }}>
                        <img src={back} alt="" />
                    </button>
                    <span style={{ fontSize: 35 }} id="slider-paging">
                        1/4
                    </span>
                    <button className="control-next" onClick={() => {
                        this.nextTopSlider(this.topSliderItemWidth, this.topSliderItemCount)
                    }}>
                        <img src={next} alt="" />
                    </button>
                </div>
            </div>

        )
    }
}
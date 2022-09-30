import React from "react";
import back from '../img/back.svg'
import next from '../img/next.svg'
import mobie from '../img/mobile.png'
import web from '../img/web.png'
import decktop from '../img/desktop.png'

export default class SubSlider1 extends React.Component {
    constructor(props) {
        super(props)
        this.currentSubSlider1Item = 1
        this.subSlider1ItemCount = 8
        // setInterval(() => {
        //     this.nextSubSlider1(this.currentSubSlider1Item, this.subSlider1ItemCount, this.width)
        //   }, 5000);
    }
    nextSubSlider1(currentSubSlider1Item, subSlider1ItemCount, width) {
        // with: 3300px;
        if (currentSubSlider1Item === subSlider1ItemCount - 3) {
            this.currentSubSlider1Item = 1
        } else {
            this.currentSubSlider1Item++
        }
        let leftPosition = (this.currentSubSlider1Item - 1) * width
        console.log(leftPosition);
        let subSlider1Element = document.getElementById("sub-slider-1-items")
        if (subSlider1Element) {
            if (this.currentSubSlider1Item === 1) {
                subSlider1Element.style.left = "0"
            } else {
                subSlider1Element.style.left = "-" + leftPosition + "px"
            }
        }
    }
    backSubSlider1(currentSubSlider1Item, subSlider1ItemCount, width) {
        let current = currentSubSlider1Item 
        if (current === 1) {
            current = subSlider1ItemCount - 3
            this.currentSubSlider1Item = current
        } else {
            current--
            this.currentSubSlider1Item = current
        }
        let leftPosition = (current - 1) * width
        let subSlider1Element = document.getElementById("sub-slider-1-items")
        if (subSlider1Element) {
            if (current === 1) {
                subSlider1Element.style.left = "0"
            } else {
                subSlider1Element.style.left = "-" + leftPosition + "px"
            }
        }
    }
    loadSubSlider() {
        let subSlider1Elm = document.getElementById("sub-slider-1-items")
        if (subSlider1Elm) {
            subSlider1Elm.style.width = ((document.getElementsByClassName("service1")[0].clientWidth / 3) * this.subSlider1ItemCount) + "px"
        }
        
        let subSlider1Items = document.querySelectorAll("#sub-slider-1-items .icon-app")
        subSlider1Items.forEach((elm) => {
            elm.style.width = (document.getElementById("service1").clientWidth / 3) + "px"
        })
    }
    componentDidMount() {
        window.addEventListener("load", this.loadSubSlider())
    }
    componentWillUnmount() {
        window.removeEventListener('unload', this.loadSubSlider())
    }
    render() {
        return (
            <div className="slider2">
                <div className="container" id="sub-slider-1">
                    <div className="tittle3">
                        <div className="sub-tittle">
                            <a href="">Domains &amp; Technologies</a> </div>
                        <div className="sub-decription" />
                    </div>
                    <div className="service1" id="service1">
                        <div className="main-khungchua">
                            <div className="khungchua" id="sub-slider-1-items">
                                <div className="icon-app">
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie} alt="" />
                                            <h1>MOBILE DEVELOPMENT</h1>
                                        </a>
                                    </div>
                                    <div className="passage4">
                                        <p>
                                            We have expertise in building mobile applications and mobile
                                            games on multiple platforms
                                        </p>
                                    </div>
                                </div>
                                <div className="icon-app">
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={web} alt="" />
                                            <h1>WEB APP DEVELOPMENT</h1>
                                        </a>
                                    </div>
                                    <div className="passage4">
                                        <p>
                                            Our teams understand how to build web applications with insight
                                            UX/UI that help to strengthen the client businesses and brand
                                            awareness from the bottom-line
                                        </p>
                                    </div>
                                </div>
                                <div className="icon-app">
                                    <div className="icon-mobie">
                                        <a>
                                            <img src={decktop} alt="" />
                                            <h1>DESKTOP DEVELOPMENT</h1>
                                        </a>
                                    </div>
                                    <div className="passage4">
                                        <p>
                                            We develop cross-platform standalone and client-server
                                            applications which run stability scalable, and also easy to
                                            convert to other architects or business models
                                        </p>
                                    </div>
                                </div>
                                <div className="icon-app">
                                    <div className="icon-mobie">
                                        <a>
                                            <img src={decktop} alt="" />
                                            <h1>Cloud Based Development</h1>
                                        </a>
                                    </div>
                                    <div className="passage4">
                                        <p>
                                            We develop cross-platform standalone and client-server
                                            applications which run stability scalable, and also easy to
                                            convert to other architects or business models
                                        </p>
                                    </div>
                                </div>
                                <div className="icon-app">
                                    <div className="icon-mobie">
                                        <a>
                                            <img src={decktop} alt="" />
                                            <h1>Telecom & Networking</h1>
                                        </a>
                                    </div>
                                    <div className="passage4">
                                        <p>
                                            We develop cross-platform standalone and client-server
                                            applications which run stability scalable, and also easy to
                                            convert to other architects or business models
                                        </p>
                                    </div>
                                </div>
                                <div className="icon-app">
                                    <div className="icon-mobie">
                                        <a>
                                            <img src={decktop} alt="" />
                                            <h1>DESKTOP DEVELOPMENT</h1>
                                        </a>
                                    </div>
                                    <div className="passage4">
                                        <p>
                                            We develop cross-platform standalone and client-server
                                            applications which run stability scalable, and also easy to
                                            convert to other architects or business models
                                        </p>
                                    </div>
                                </div>
                                <div className="icon-app">
                                    <div className="icon-mobie">
                                        <a>
                                            <img src={decktop} alt="" />
                                            <h1>DESKTOP DEVELOPMENT</h1>
                                        </a>
                                    </div>
                                    <div className="passage4">
                                        <p>
                                            We develop cross-platform standalone and client-server
                                            applications which run stability scalable, and also easy to
                                            convert to other architects or business models
                                        </p>
                                    </div>
                                </div>
                                <div className="icon-app">
                                    <div className="icon-mobie">
                                        <a>
                                            <img src={decktop} alt="" />
                                            <h1>DESKTOP DEVELOPMENT</h1>
                                        </a>
                                    </div>
                                    <div className="passage4">
                                        <p>
                                            We develop cross-platform standalone and client-server
                                            applications which run stability scalable, and also easy to
                                            convert to other architects or business models
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="control">
                    <button className="iconlelft1" onClick={() => this.backSubSlider1(this.currentSubSlider1Item, this.subSlider1ItemCount, (document.getElementsByClassName("main-khungchua")[0].clientWidth / 3))}><img src={back} /></button>
                    <button className="iconright1" onClick={() => this.nextSubSlider1(this.currentSubSlider1Item, this.subSlider1ItemCount, (document.getElementsByClassName("main-khungchua")[0].clientWidth / 3))}><img src={next} /></button>
                </div>
            </div>
        )
    }
}

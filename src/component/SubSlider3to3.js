import React from "react";
import award1 from '../img/Award_01.png'
import award2 from '../img/Award_02.png'
import award3 from '../img/Award_03.png'
import award4 from '../img/Award_04.png'
import award5 from '../img/Award_05.png'
import award6 from '../img/Award_06.png'
import award7 from '../img/Award_07.png'
import award8 from '../img/Award_08.png'

export default class SubSlider3to3 extends React.Component {
    constructor(props) {
        super(props)
        this.currentSubSlider1Item = 1
        this.subSlider1ItemCount = 9
        setInterval(() => {
            this.nextSubSlider2(this.currentSubSlider1Item, this.subSlider1ItemCount,(document.getElementsByClassName("khungchua2")[0].clientWidth / 5))
          }, 3000);
    }   
    nextSubSlider2(currentSubSlider1Item, subSlider1ItemCount, width) {
        // with: 3300px;
        if (currentSubSlider1Item === subSlider1ItemCount - 5) {
            this.currentSubSlider1Item = 0
        } else {
            this.currentSubSlider1Item++
        }
        let leftPosition = (this.currentSubSlider1Item - 1) * width
        let subSlider1Element = document.getElementsByClassName("sub-khungchua")[0]
        if (subSlider1Element) {
            if (this.currentSubSlider1Item === 1) {
                subSlider1Element.style.left = "0"
            } else {
                subSlider1Element.style.left = "-" + leftPosition + "px"
            }
        }
    }
    loadSubSlider() {
        let subSlider1Elm = document.getElementsByClassName("sub-khungchua")[0]
        if (subSlider1Elm) {
            subSlider1Elm.style.width = ((document.getElementsByClassName("khungchua2")[0].clientWidth / 5) * this.subSlider1ItemCount) + "px"
        }
        
        let subSlider1Items = document.querySelectorAll(".sub-khungchua .icon-app2")
        subSlider1Items.forEach((elm) => {
            elm.style.width = (document.getElementsByClassName("khungchua2")[0].clientWidth / 5) + "px"
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
            <div className="slider4">
                <div className="container-2" id="sub-slider-3">
                    <div className="service3" id="service3">
                        <div className="main-khungchua2">
                            <div className="tittle3">
                                <h3>As Recognized <br/> By</h3>
                            </div>
                            <div className="khungchua2" id="sub-slider-1-items2">
                                <div className="sub-khungchua" >
                                    <div className="icon-app2">
                                        <div className="icon-mobie">
                                            <a href="">
                                                <img src={award1} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="icon-app2">
                                        <div className="icon-mobie">
                                            <a href="">
                                                <img src={award2} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="icon-app2">
                                        <div className="icon-mobie">
                                            <a href="">
                                                <img src={award3} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="icon-app2">
                                        <div className="icon-mobie">
                                            <a href="">
                                                <img src={award4} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="icon-app2">
                                        <div className="icon-mobie">
                                            <a href="">
                                                <img src={award5} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="icon-app2">
                                        <div className="icon-mobie">
                                            <a href="">
                                                <img src={award6} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="icon-app2">
                                        <div className="icon-mobie">
                                            <a href="">
                                                <img src={award7} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="icon-app2">
                                        <div className="icon-mobie">
                                            <a href="">
                                                <img src={award8} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React from "react";
import back from '../img/back.svg'
import next from '../img/next.svg'
import mobie1 from '../img/http___auvenir_com_.jpeg'
import mobie2 from '../img/http___empiregroup_vn_.jpeg'
import mobie3 from '../img/http___mindgeek_com_.jpeg'
import mobie4 from '../img/http___superhippo_com_.jpeg'
import mobie5 from '../img/http___www_collectiveclarity_net_.jpeg'
import mobie6 from '../img/http___www_digitalperformance_de_.jpeg'
import mobie7 from '../img/http___www_ecopharma_com_vn_.jpeg'
import mobie8 from '../img/http___www_greenpacket_com_.jpeg'
import mobie9 from '../img/http___www_ktcc_co_jp_.jpeg'
import mobie10 from '../img/http___www_saigonx_com_.jpeg'
import mobie11 from '../img/http___www_sssmine_com_.jpeg'
import mobie12 from '../img/http___www_techwisenetworks_com_.jpeg'
import mobie13 from '../img/http___www_televz_com_.jpeg'
import mobie14 from '../img/http___www_tpf_com_au_.jpeg'
import mobie15 from '../img/https___frogasia_com_.jpeg'
import mobie16 from '../img/https___tvt_biz_.jpeg'
import mobie17 from '../img/https___www_bgx_ai_.jpeg'
import mobie18 from '../img/https___www_etnasoft_com_.jpeg'
import mobie19 from '../img/https___www_ewerk_com_.jpeg'
import mobie20 from '../img/https___www_greencopper_com_.jpeg'
import mobie21 from '../img/https___www_mobileiron_com_.jpeg'
import mobie22 from '../img/https___www_ssense_com_.jpeg'
import mobie23 from '../img/https___www_trafficpartner_com_.jpeg'
import mobie24 from '../img/https___www_wedgenetworks_com_.jpeg'
import mobie25 from '../img/innovation.jpg'

export default class SubSlider3to2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSubSlider1Item: 1,
            subSlider1ItemCount: 26,
            width:0,
            sumWidth:0,
        }
        this.backSubSlider2 = this.backSubSlider2.bind(this)
        this.nextSubSlider2 = this.nextSubSlider2.bind(this)
        this.loadSubSlider = this.loadSubSlider.bind(this)
    }
    nextSubSlider2() {
        let currentSubSlider1Item = this.state.currentSubSlider1Item
        if (currentSubSlider1Item === this.state.subSlider1ItemCount - 4) {
            currentSubSlider1Item = 1
        } else {
            currentSubSlider1Item++
        }
        this.setState({currentSubSlider1Item: currentSubSlider1Item}, () => {
            let leftPosition = (this.state.currentSubSlider1Item - 1) * this.state.width
            let subSlider1Element = document.getElementById("sub-slider-1-items1")
        if (subSlider1Element) {
            if (this.state.currentSubSlider1Item === 1) {
                subSlider1Element.style.left = "0"
            } else {
                subSlider1Element.style.left = "-" + leftPosition + "px"
            }
        }
        } )
        
        
    }
    backSubSlider2() {
        let currentSubSlider1Item = this.state.currentSubSlider1Item
        if (currentSubSlider1Item === 1) {
            currentSubSlider1Item = this.state.subSlider1ItemCount - 4
        } else {
            currentSubSlider1Item--
        }

        this.setState({currentSubSlider1Item: currentSubSlider1Item}, () => {
            let leftPosition = (this.state.currentSubSlider1Item - 1) * this.state.width
        let subSlider1Element = document.getElementById("sub-slider-1-items1")
        if (subSlider1Element) {
            if (this.state.currentSubSlider1Item === 1) {
                subSlider1Element.style.left = "0"
            } else {
                subSlider1Element.style.left = "-" + leftPosition + "px"
            }
        }
        })
        
    }
    loadSubSlider() {
        let newWidth = document.getElementsByClassName("main-khungchua1")[0].clientWidth / 4
        this.setState({ width: newWidth, sumWidth: newWidth * this.state.subSlider1ItemCount})
    }
    componentDidMount() {
        window.addEventListener("load", this.loadSubSlider())
    }
    componentWillUnmount() {
        window.removeEventListener('unload', this.loadSubSlider())
    }
    render() {
        let {width,sumWidth} = this.state
        return (
            <div className="slider3">
                <div className="container-1" id="sub-slider-2">
                    <div className="tittle4">
                        <div className="sub-tittle">
                            <a href="">OUR CLIENTS</a> </div>
                        <div className="sub-decription" />
                    </div>
                    <div className="service2" id="service2">
                        <div className="main-khungchua1">
                            <div className="khungchua1" id="sub-slider-1-items1" style={{width:  `${sumWidth}px`}}>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie1} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie2} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie3} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie4} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie5} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie6} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie7} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie8} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie9} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie10} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie11} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie12} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie13} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie14} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie15} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie16} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie17} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie18} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie19} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie20} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie21} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie22} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie23} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie24} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-app1" style={{width:  `${width}px`}}>
                                    <div className="icon-mobie">
                                        <a href="">
                                            <img src={mobie25} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="control1">
                    <button className="iconlelft1" onClick={() => this.backSubSlider2()}><img src={back} /></button>
                </div>
                <div className="control1">
                    <button className="iconright1" onClick={() => this.nextSubSlider2()}><img src={next} /></button>
                </div>
            </div>
        )
    }
}

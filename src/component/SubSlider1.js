import React from "react";
import back from '../img/back.svg'
import next from '../img/next.svg'
import mobie from '../img/mobile.png'
import web from '../img/web.png'
import decktop from '../img/desktop.png'
export default class SubSlider1 extends React.Component{
    render() {
        return(
            <div className="slider2">
                <div className="control">
                    <div className="iconlelft1">
                    <a href="">
                        <img src={back} />
                    </a>
                    </div>
                    <div className="iconright1">
                    <a href="">
                        <img src={next} />
                    </a>
                    </div>
                </div>
                <div className="container">
                    <div className="tittle3">
                    <div className="sub-tittle">
                        <a href="">Domains &amp; Technologies</a>
                    </div>
                    <div className="sub-decription" />
                    </div>
                    <div className="service1">
                    <div className="main-khungchua">
                        <div className="khungchua">
                        <div className="icon-app">
                            <div className="icon-mobie">
                            <a href="">
                                <img src={mobie} alt="" />
                                <h1>WEB APP DEVELOPMENT</h1>
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
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}

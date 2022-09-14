import React from "react";
import innovation from '../img/innovation.jpg'
export default class SubSlider2 extends React.Component{
    render() {
        return(
            <div className="body-innovations">
                <div className="container">
                    <div className="title-ventures">
                    <h1>
                        <a href="">Innovations</a>
                    </h1>
                    <div className="decr-hidden" />
                    </div>
                    <div className="center-box">
                    <img src={innovation} alt="" />
                    <div className="content">
                        We always hunger for new idea creation by providing facilities for
                        product development and an environment where creativity leverages our
                        skills and services.
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
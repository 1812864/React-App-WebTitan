import React from "react";
import teams from '../img/teams.png'
import cost from '../img/cost.png'
import time from '../img/time.png'
export default class SubSlider3 extends React.Component{
    render() {
        return(
            <div className="body-model">
                <div className="container">
                    <div className="title-venture">
                    <h1>
                        <a href="">Engagement Models</a>
                    </h1>
                    <div className="color-desc">
                        We provide flexible business engagement models for offshore software
                        testing and development services. They can be altered or combined at any
                        stages of the business engagement.
                    </div>
                    </div>
                    <div className="model-item">
                    <div className="box-colum">
                        <div className="box-cell-item">
                        <div className="link-index">
                            <div className="img">
                            <img src={teams} alt="" />
                            </div>
                            <h1 className="title with-border">
                            <a href="">Dedicated Team</a>
                            </h1>
                        </div>
                        <ul className="model-bullet">
                            <li>Dedicated professional team work for your projects.</li>
                            <li>Virtual extension of your engineering team.</li>
                            <li>Flexible task assignments based on your needs.</li>
                            <li>Stable and scalable resources.</li>
                            <li>Budget is measured in man-months.</li>
                            <li>
                            The separate team of professionals will work over your project.
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="box-colum">
                        <div className="box-cell-item">
                        <div className="link-index">
                            <div className="img">
                            <img src={cost} alt="" />
                            </div>
                            <h1 className="title with-border">
                            <a href="">Fixed cost</a>
                            </h1>
                        </div>
                        <ul className="model-bullet">
                            <li>Task assignments are defined clearly at the requirements.</li>
                            <li>Project schedule is planned clearly.</li>
                            <li>Budget is fixed based on requirements.</li>
                            <li>
                            Fixed project budget (measured in man hours) and time limits.
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="box-colum">
                        <div className="box-cell-item">
                        <div className="link-index">
                            <div className="img">
                            <img src={time} alt="" />
                            </div>
                            <h1 className="title with-border">
                            <a href="">Time &amp; Material</a>
                            </h1>
                        </div>
                        <ul className="model-bullet">
                            <li>
                            Flexible task assignments based on your needs within time limits.
                            </li>
                            <li>Adjustable and designated resources.</li>
                            <li>
                            Budget is flexible and can be adjusted based on your requirements.
                            </li>
                            <li>Stable and scalable resources.</li>
                            <li>Budget is measured in man-months.</li>
                            <li>
                            Project budget is flexible and can be adjusted according to your
                            requirements.
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}
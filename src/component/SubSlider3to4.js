import React from "react";
import officer1 from '../img/Chief_Technical_Officer.png'
import officer2 from '../img/Director_of_Application_Development.png'
import officer3 from '../img/VP_of_Technology.png'
import officer4 from '../img/CEO_&_CTO_(co-founder).png'
import officer5 from '../img/Project_Manager.png'
import officer6 from '../img/CEO.png'

export default class SubSlider3to4 extends React.Component {
    constructor(props) {
        super(props)
        this.currentSubSlider1Item = 1
        this.subSlider1ItemCount = 6
        setInterval(() => {
            this.nextSubSlider2(this.currentSubSlider1Item, this.subSlider1ItemCount, (document.getElementsByClassName("main-khungchua3")[0].clientWidth))
        }, 3000);
    }
    nextSubSlider2(currentSubSlider1Item, subSlider1ItemCount, width) {
        // with: 3300px;
        if (currentSubSlider1Item === subSlider1ItemCount ) {
            this.currentSubSlider1Item = 0
        } else {
            this.currentSubSlider1Item++
        }
        let leftPosition = (this.currentSubSlider1Item - 1) * width
        let subSlider1Element = document.getElementsByClassName("khungchua3")[0]
        if (subSlider1Element) {
            if (this.currentSubSlider1Item === 1) {
                subSlider1Element.style.left = "0"
            } else {
                subSlider1Element.style.left = "-" + leftPosition + "px"
            }
        }
    }
    loadSubSlider() {
        let subSlider1Elm = document.getElementsByClassName("khungchua3")[0]
        if (subSlider1Elm) {
            subSlider1Elm.style.width = ((document.getElementsByClassName("main-khungchua3")[0].clientWidth) * this.subSlider1ItemCount) + "px"
        }

        let subSlider1Items = document.querySelectorAll(".item-1")
        subSlider1Items.forEach((elm) => {
            elm.style.width = (document.getElementsByClassName("main-khungchua3")[0].clientWidth) + "px"
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
            <div className="slider5">
                <div className="main-container">
                    <div className="title-venture">
                        <h1>CUSTOMER TESTIMONIALS</h1>
                        <div className="desc-3">We deeply appreciate all feedbacks from our customers and keep those as realistic results of high-quality service in Titan</div>
                    </div>
                    <div className="service-4">
                        <div className="main-khungchua3">
                            <div className="khungchua3">
                                <div className="item-1">
                                    <a className="link-index">
                                        <div className="img"><img src={officer1} /></div>
                                        <h4>Dr. Tim Parker</h4>
                                        <div className="title-border">Chief Technical Officer</div>
                                        <div className="border"></div>
                                        <div className="parag"><blockquote>“We have worked with Titan Technology for the last three years on a complex and evolving software product.  We are delighted with the quality of the deliverables, the enthusiasm of the team, and the dedication to our project.  We look forward to continuing this excellent relationship in the years to come, and I strongly recommend Titan Technology as a software outsourcing provider.”</blockquote></div>
                                    </a>
                                </div>
                                <div className="item-1">
                                    <a className="link-index">
                                        <div className="img"><img src={officer2} /></div>
                                        <h4>Thomas Santonja</h4>
                                        <div className="title-border">Director of Application Development</div>
                                        <div className="border"></div>
                                        <div className="parag"><blockquote>“A professional and dedicated team with a spirit of delivery. Successfully worked along us for delivery of years of features.”</blockquote></div>
                                    </a>
                                </div>
                                <div className="item-1">
                                    <a className="link-index">
                                        <div className="img"><img src={officer3} /></div>
                                        <h4>VALERY KHVATOV</h4>
                                        <div className="title-border">VP of Technology</div>
                                        <div className="border"></div>
                                        <div className="parag"><blockquote>“The work of Titan Technology is distinguished by high professionalism and initiative. It is a wonderful combination for a tech company. Our project consisted of building a mobile app for a blockchain platform. The team asked many right questions throughout the development process and in the end the app was even better and more thought out than in our initial view. And to add, we were on budget and schedule. The quality of development is very high as well. Another very positive factor is communication. It is of utmost importance for a remote team. We are delighted to recommend working with Titan Technology, a very mature and responsible company.”</blockquote></div>
                                    </a>
                                </div>
                                <div className="item-1">
                                    <a className="link-index">
                                        <div className="img"><img src={officer4} /></div>
                                        <h4>HONGWEN ZHANG, PH.D</h4>
                                        <div className="title-border">CEO & CTO (co-founder)</div>
                                        <div className="border"></div>
                                        <div className="parag"><blockquote>“Wedge Networks Inc, based in Canada, is a leader in Real-time Threat Prevention for the cloud networks. Our products and services are distributed world-wide. Product quality, reliability, and supportability are critical to our success. That’s why we partnered with Thanh Nguyen and his Titan team. Working as an extended team of Wedge Networks, the Titan team provided world class QA and product support services for us. The team is highly skilled, dependable, and flexible. The successes of our recent product launches are testaments of their significant contributions.”</blockquote></div>
                                    </a>
                                </div>
                                <div className="item-1">
                                    <a className="link-index">
                                        <div className="img"><img src={officer5} /></div>
                                        <h4>CHRIS HENNIGFELD</h4>
                                        <div className="title-border">Project Manager</div>
                                        <div className="border"></div>
                                        <div className="parag"><blockquote>“We greatly appreciate the reliable and cost-effective team Titan has provided to us to develop and maintain one of our systems with over a thousand internal users for several years.”</blockquote></div>
                                    </a>
                                </div>
                                <div className="item-1">
                                    <a className="link-index">
                                        <div className="img"><img src={officer6} /></div>
                                        <h4>STEPHEN COLE</h4>
                                        <div className="title-border">CEO</div>
                                        <div className="border"></div>
                                        <div className="parag"><blockquote>“In these challenging times, I wanted to say thank you for the outstanding effort and service we have experienced with Titan.They are professionals who really take customer care to the highest levels.We will definitely be using Titan services for our new upcoming projects. Your Company is exemplary in the world of software development and project management. Our projects have always been on time and within budget at Ai6 and Collective Clarity.”</blockquote></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="main-dots"></div>
                    </div>
                </div>
            </div>
        )
    }
}
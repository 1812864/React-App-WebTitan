import React from "react"
import download from '../img/download.png'
import download_1 from '../img/download (1).png'
import download_2 from '../img/download (2).png'
export default class SubSlider extends React.Component{
    render(){
        return(
            <div className="contain-container2">
                <div className="tittle2">
                    <a href="">
                    <strong>WE PROVIDE</strong>
                    </a>
                </div>
                <div className="decription2">
                    <p>
                    Professional and trusted services with cost-effective and exceptional
                    expertise to deal with any complexities in scalable projects
                    </p>
                </div>
                <div className="service">
                    <div className="development">
                    <div className="img">
                        <a href="">
                        <div className="image"><img src={download} /></div>
                        <h1>Software Development</h1>
                        </a>
                    </div>
                    <div className="passage1">
                        <p>
                        Develop software applications from business ideas to deployment,
                        develop based on product definition, the initial designs, or develop
                        modules with multiple teams for concurrent development thus reducing
                        time to market.
                        </p>
                    </div>
                    </div>
                    <div className="suppost">
                    <div className="img1">
                        <a href="">
                        <img src={download_1} />
                        <h1>Maintenance and support</h1>
                        </a>
                    </div>
                    <div className="passage2">
                        <p>
                        Maintain, enhance, and develop new features of existing software
                        applications. We also provide services to migrate from the legacy
                        systems to new technologies to help improve performance and add
                        benefits to the client's businesses.
                        </p>
                    </div>
                    </div>
                    <div className="testing">
                    <div className="img2">
                        <a href="">
                        <img src={download_2} />
                        <h1>Software Testing</h1>
                        </a>
                    </div>
                    <div className="passage3">
                        <p>
                        Provide all kind of testing services including automation tool
                        development, enhancement and execution to assure the quality of our
                        clients products.
                        </p>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}
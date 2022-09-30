import React from "react";
import fb from '../img/FB.svg'
import tw from '../img/Twitter.svg'
import linkdin from '../img/Linkdin.svg'
import yt from '../img/Youtube.svg'
import top from '../img/R.png'

export default class SubFooterPage extends React.Component {
    render() {
        return(
            <div className="sub-footer" id="bottom">
                <span>© 2022 Titan Technology Corporation. All rights reserved. Privacy & Terms of Use</span>
                <div className="socical"><strong>Connect with us</strong>
                    <img src={fb}/>
                    <img src={tw}/>
                    <img src={linkdin}/>
                    <img src={yt}/>
                </div>
                <div className="back-to-top"><a href="#top-slider"><img src={top}/></a></div>
            </div>
        )
    }
}
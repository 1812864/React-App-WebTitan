import React from "react";
import map from '../img/map.svg'
import mail from '../img/Mail-solid.svg'
import sky from '../img/Skype.svg'
import talk from '../img/talk-with-us.svg'
import chat from '../img/chat-with-us.svg'
export default class FooterPage extends React.Component {
    render() {
        return(
            <div className="Main-footer">
                <div className="menu-footer">
                    <div className="box-content-footer">
                        <a>contact us</a>
                        <span> FIND OUT US ON GOOGLE MAP  <img src={map}/></span>
                        
                    </div>
                </div>
                <div className="content-footer">
                    <div className="col1-footer colum">
                        <h3>Headquarters:</h3>
                        <p>40 Lam Son Street, Ward 2, Tan Binh District,
Ho Chi Minh City, Vietnam</p>
                        <a>Tel: +84-28-3997-7233</a>
                        <div className="title">
                            <h3>General Inquiries:</h3>
                            <a><img src={mail}/> info@titancorpvn.com</a>
                            <br/>
                            <a><img src={sky}/> titancorpvn</a>
                        </div>
                    </div>
                    <div className="col2-footer colum">
                        <h3>Branch office:</h3>
                        <p>50 Cuu Long Street, Ward 2, Tan Binh District,
Ho Chi Minh City, Vietnam.</p>
                        <a>Tel: +84-28-3997-7233</a>
                        <div className="title">
                            <h3>Sales & Support:</h3>
                            <a><img src={mail}/> sales@titancorpvn.com</a>
                            <br/>
                            <a><img src={mail}/> support@titancorpvn.com</a>
                        </div>
                    </div>
                    <div className="col3-footer colum">
                        <h3>Branch office:</h3>
                        <p>9/1/2 Tran Dai Nghia Street, Ward 8,
Da Lat City, Vietnam.VN</p>
                        <a>Tel: +84-28-3997-7233</a>
                        <div className="title">
                            <h3>General Inquiries:</h3>
                            <button><img src={talk}/>Talk With Us</button>
                            <button><img src={chat}/>Chat With Us</button>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
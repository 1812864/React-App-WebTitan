import React from "react";

export default class SubSlider4 extends React.Component{
    render() {
        return(
            <div className="box-request">
                <div className="container-request">
                    <div className="title-venture-request">
                    <h1 className="h1-request">REQUEST FOR INFORMATION</h1>
                    <span className="span-request">
                        Thank for your interest in Titan. Please fill out the form to tell us
                        about your area of needs. Our representative will contact you shortly.
                    </span>
                    </div>
                    <div className="colum-request">
                    <div className="form-colum item1">
                        <div className="name">
                        <input type="text" className="form-control" placeholder="Name *" />
                        </div>
                        <div className="email">
                        <input type="text" className="form-control" placeholder="Email *" />
                        </div>
                        <div className="phone">
                        <input type="text" className="form-control" placeholder="Phone *" />
                        </div>
                    </div>
                    <div className="form-colum item2">
                        <div className="subject">
                        <input type="text" className="form-control" placeholder="Subject *" />
                        </div>
                        <div className="what">
                        <textarea
                            name="message"
                            id="what"
                            placeholder="You're looking for *"
                            className="form-control"
                            defaultValue={""}
                        />
                        </div>
                    </div>
                    <div className="form-colum item3">
                        <button className="button-request">REQUEST NOW</button>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}
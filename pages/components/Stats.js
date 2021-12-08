import React from 'react'
import {zoomIn} from 'react-animations'
import CountUp from 'react-countup';

import MailchimpSubscribe from "react-mailchimp-subscribe"


function Stats() {
    return (
        <div className=" text-dark">
            <h1 className="fw-bold text-center me-4  mb-4">My results</h1>
            <div className="container text-center ">
                <div className="row">
                    <div className="col-sm-12 col-lg-4  rounded-top">
                    <h1 className=" fw-bold mt-4">1000+</h1>
                <p className=" text-lead fw-bold ">Students that I have worked with.</p>
                <br/>
                    </div>
                    <div className="col-sm-12 col-lg-4  rounded-top">
                <h1 className=" fw-bold mt-4">100% </h1>
                <p className=" text-lead fw-bold ">Have said they felt progress after a couple of weeks.</p>
                
                
                    </div>
                    <div className="col-sm-12 col-lg-4  rounded-top">
                <h1 className=" fw-bold mt-4">100%</h1>
                <p className=" text-lead fw-bold ">Have referred me to others.</p>
                    </div>
                    
                </div>
                
            </div>
            <br/>
                <br/>
                <br/>
                <br/>
        </div>
           )
}

export default Stats

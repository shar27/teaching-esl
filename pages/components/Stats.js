import React from 'react'

import CountUp from 'react-countup';

import MailchimpSubscribe from "react-mailchimp-subscribe"


function Stats() {
    return (
        <div className="bg-primary">
            <h1 className="fw-bold text-center me-4 text-white mb-4">My results</h1>
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-12 col-lg-4">
                    <h1 className="text-white fw-bold mt-4">1000+</h1>
                <p className=" text-lead fw-bold text-white">Students that I have worked with.</p>
                <br/>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                <h1 className="text-white fw-bold mt-4">100% </h1>
                <p className=" text-lead fw-bold text-white">Have said they felt progress after a couple of weeks.</p>
                
                
                    </div>
                    <div className="col-sm-12 col-lg-4">
                <h1 className="text-white fw-bold mt-4">100%</h1>
                <p className=" text-lead fw-bold text-white">Have referred me to others.</p>
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

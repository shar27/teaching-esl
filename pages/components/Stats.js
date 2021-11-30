import React from 'react'

import CountUp from 'react-countup';

import MailchimpSubscribe from "react-mailchimp-subscribe"


function Stats() {
    return (
        <div className="bg-primary">
            <h1 className="fw-bold text-center me-4 text-white mb-4">My results</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <h1 className="text-white fw-bold mt-4">1000+</h1>
                <p className=" text-lead  text-white">Students that I have worked with.</p>
                <br/>
                    </div>
                    <div className="col">
                <h1 className="text-white fw-bold mt-4">100% </h1>
                <p className=" text-lead  text-white">Have said they felt progress after a couple of weeks.</p>
                <br/>
                <br/>
                <br/>
                <br/>
                    </div>
                    <div className="col">
                <h1 className="text-white fw-bold mt-4">100%</h1>
                <p className=" text-lead  text-white">Have referred me to others.</p>
                    </div>
                    
                </div>
            </div>
        </div>
           )
}

export default Stats

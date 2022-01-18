import React from 'react'
import Countdown from 'react-countdown';

function CountDown() {
    const Completionist = () => <span>You are good to go!</span>;
    return (
    <div className="text-center fw-bold">
    <Countdown
    autoStart={true}
    date={Date.now() + 1000000}
    intervalDelay={1}
    precision={3}
    renderer={props => <div>{props.total}</div>}
  />,
        </div>
    )
}

export default CountDown

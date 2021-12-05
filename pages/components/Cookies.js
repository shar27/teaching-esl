import React from 'react'
import CookieConsent from "react-cookie-consent";


function Cookies() {
    return (
        <div>
<CookieConsent

enableDeclineButton
  onDecline={() => {
    alert("nay!");
  }}

onAccept={(acceptedByScrolling) => {
    if (acceptedByScrolling) {
      // triggered if user scrolls past threshold
      alert("Accept was triggered by user scrolling");
    } else {
      alert("Accept was triggered by clicking the Accept button");
    }
  }}

  location="bottom"
  buttonText="Sure man!!"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "white", fontSize: "13px", backgroundColor: "blue" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
  
</CookieConsent>
        </div>
    )
}

export default Cookies

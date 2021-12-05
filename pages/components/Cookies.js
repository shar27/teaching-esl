import React from 'react'
import CookieConsent, { Cookies, resetCookieConsentValue } from "react-cookie-consent";


function CookiesConsent() {
    
    console.log(resetCookieConsentValue());

    return (
        <div>
<CookieConsent




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

export default CookiesConsent

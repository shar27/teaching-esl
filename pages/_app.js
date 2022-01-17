import '../styles/globals.css'
import '../styles/Home.module.scss'


import Script from 'next/script'




function MyApp({ Component, pageProps }) {
  

  
  return (
    <>
 
  <Script 
   
   strategy="lazyOnload"
   src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE}`}/>

<Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE}', {
              page_path: window.location.pathname,
            });
                `}
      </Script> 
      
      <Script
        dangerouslySetInnerHTML={{
            __html: `
        
    adroll_adv_id = "${process.env.NEXT_PUBLIC_ADROLL};"
    adroll_pix_id = ${process.env.NEXT_PUBLIC_ADROLL_PIX};
    adroll_version = "2.0";

    (function(w, d, e, o, a) {
        w.__adroll_loaded = true;
        w.adroll = w.adroll || [];
        w.adroll.f = [ 'setProperties', 'identify', 'track' ];
        var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id
                + "/roundtrip.js";
        for (a = 0; a < w.adroll.f.length; a++) {
            w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) {
                return function() {
                    w.adroll.push([ n, arguments ])
                }
            })(w.adroll.f[a])
        }

        e = d.createElement('script');
        o = d.getElementsByTagName('script')[0];
        e.async = 1;
        e.src = roundtripUrl;
        o.parentNode.insertBefore(e, o);
    })(window, document);
    adroll.track("pageView");
`
        }}
    />    

      
       <Component {...pageProps} />
  </>
  )
}

export default MyApp

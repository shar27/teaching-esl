import '../styles/globals.css'
import '../styles/Home.module.scss'
import 'bootstrap/dist/css/bootstrap.css';

import Script from 'next/script'




function MyApp({ Component, pageProps }) {
  
  import('bootstrap/dist/css/bootstrap.css');
  
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
      </Script>  <Component {...pageProps} />
  </>
  )
}

export default MyApp

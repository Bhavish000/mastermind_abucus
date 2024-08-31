import FooterBottom from '@/component/layout/Footer/FooterBottom';
import { useInquiry } from '@/context/inquiryContext';
import Franchise_Header from '@/sectionPage/franchisee_inquiry_form/Franchise_Header';
import Successfully from '@/sectionPage/Student Landing page/Submitted_Successfully_Page/SubmittedSuccessfully';
import Head from 'next/head';
import Script from 'next/script';
import React, { useEffect } from 'react';

const Submitted = () => {

    const { data } = useInquiry();
    console.log('data ' + data)

    const onclick = () => {
        if (data) {
            window.location.replace(data);
        }
    }
    useEffect(() => {
        if (data) {
            // Wait for 3 seconds before redirecting
            const timer = setTimeout(() => {
                window.location.replace(data);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [data]);

    // if(!data){
    //     return(
    //         <div style={{backgroundColor:'#fff'}}></div>
    //     )
    // }
    return (
        <React.Fragment>

            <Head>
                <title>Abacus Student | Mastermind Abacus</title>
                <link rel="icon" href='https://tt.mastermindschool.co.in/ab_images/favicon.png' />

                <Script defer id="gtm-loader" strategy="afterInteractive">
                    {`
              (function (w, d, s, l, i) {
                w[l] = w[l] || []; w[l].push({
                  'gtm.start': new Date().getTime(), event: 'gtm.js'
                }); 
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; 
                j.async = true; 
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; 
                f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', 'GTM-MKS6BGK');
            
          `}
                </Script>

                <Script defer
                    src="https://www.googletagmanager.com/gtag/js?id=G-ZN1X5CY96X"
                    strategy="afterInteractive"
                />

                <Script defer id="gtag-init" strategy="afterInteractive">
                    {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZN1X5CY96X');
          `}
                </Script>
            </Head>


            {/* <Franchise_Header
                parentMenu='home'
                TopBar='enable'
                // CanvasClass='right_menu_togle hidden-md'
                headerClass='full-width-header header-style2'
                TopBarClass='topbar-area dark-parimary-bg'
                emailAddress='support@website.com'
                phoneNumber='(+088) 589-8745'
            /> */}
            <Successfully click={onclick} />
            <FooterBottom />
            {/* <SearchModal /> */}
        </React.Fragment>
    );
}


export default Submitted;
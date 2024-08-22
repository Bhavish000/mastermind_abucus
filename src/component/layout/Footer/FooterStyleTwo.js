import { HomeModal } from '@/component/Common/Modal/HomeModal';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';

const FooterStyleTwo = (props) => {
    const { footerClass, footerTopClass, footerLogo, footerBG, footerColor } = props;
    const [showLikeBox, setShowLikeBox] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [status, setstatus] = useState('');

    const openModal = (value) => {
        setstatus(value);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setstatus('');
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLikeBox(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        window.location.href = 'https://www.mmtplonline.com';
    };

    return (
        <>
            <Head>
                <script id="schema" type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `
           { 
        "@context": "https://schema.org",
         "@type": "Organization",
         "name": "Mastermind Abacus",
         "logo": "https://tt.mastermindschool.co.in/ab_images/mastermindabacus-logo.png",
         "url": "https://www.mastermindabacus.com/",
         "sameAs": [
         "https://www.youtube.com/user/mastermindabacus",
         "https://twitter.com/mmabacusonline",
		 "https://www.instagram.com/mmabacusonline/",
         "https://www.facebook.com/mastermindabacus"
         ] ,
         "contactPoint" : [
         {
         "@type" : "ContactPoint",
         "contactType" : "customer service", 
         "telephone" : "91 9826251893",  
         "areaServed" : "IN" 
        } 
        ],
		  "email" : "info@mmtpl.com"

    }
      `}}
                />
            </Head>
            <Script type="text/javascript" src="//www.freeprivacypolicy.com/public/cookie-consent/4.1.0/cookie-consent.js" charset="UTF-8"/>
            <Script
                src="//www.freeprivacypolicy.com/public/cookie-consent/4.1.0/cookie-consent.js"
                charset="UTF-8"
                strategy="lazyOnload" // Load script lazily
                onLoad={() => {
                    cookieconsent.run({
                        notice_banner_type: 'headline',
                        consent_type: 'express',
                        palette: 'dark',
                        language: 'en',
                        page_load_consent_levels: ['strictly-necessary'],
                        notice_banner_reject_button_hide: false,
                        preferences_center_close_button_hide: false,
                        page_refresh_confirmation_buttons: false,
                    });
                }}
            />
            <footer id="rs-footer" className={footerClass ? footerClass : 'rs-footer'}>
                <div className={footerTopClass ? footerTopClass : "footer-top"}>
                    <div className="container">
                        <div className="row">
                            {/* ... (the rest of your footer content) */}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row y-middle">
                            <div className="col-lg-12 md-mb-20">
                                <div className="copyright text-center md-text-left">
                                    <p style={{ fontSize: "16px ", fontWeight: "600px" }}> Copyright © 2024 <span style={{ color: "#fd6c24" }}>Mastermind Tutorials Pvt. Ltd.</span> All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-lg-12 text-center md-mb-20">
                                <ul className="copyright bottom-link text-center md-text-left" style={{ display: "flex", color: "white", alignItems: "center", justifyContent: "center", flexWrap: " wrap " }}>
                                    <li>
                                        <Link href='cancellation-refund-policy' className='white-color'>Cancellation & Refund Policy |&nbsp;</Link>
                                    </li>
                                    <li>
                                        <Link href='shipping-delivery-policy' className='white-color'>Shipping & Delivery Policy |&nbsp;</Link>
                                    </li>
                                    <li>
                                        <Link href="/terms" className='white-color'>Terms & Conditions |&nbsp; </Link>
                                    </li>
                                    <li>
                                        <Link href='privacy-policy' className='white-color'>Privacy policy &nbsp;</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <HomeModal isOpen={isModalOpen} onClose={closeModal} status={status} />
            </footer>

            {/* <Script defer id="inline-script" strategy="lazyOnload" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: `
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Mastermind Abacus",
                        "logo": "https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png",
                        "url": "https://www.mastermindabacus.com/",
                        "sameAs": [
                            "https://www.youtube.com/user/mastermindabacus",
                            "https://twitter.com/mmabacusonline",
                            "https://www.instagram.com/mmabacusonline/",
                            "https://www.facebook.com/mastermindabacus"
                        ],
                        "contactPoint": [
                            {
                                "@type": "ContactPoint",
                                "contactType": "customer service",
                                "telephone": "+91 9826251893",
                                "areaServed": "IN"
                            }
                        ],
                        "email": "info@mmtpl.com"
                    }
                `
            }}>
            </Script> */}
        </>
    );
}

export default FooterStyleTwo;

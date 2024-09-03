import { HomeModal } from '@/component/Common/Modal/HomeModal';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';

const FooterStyleTwo = (props) => {
    const { footerClass, footerTopClass, footerLogo, footerBG, footerColor,Referrer } = props;
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
            <Script type="text/javascript" src="//www.freeprivacypolicy.com/public/cookie-consent/4.1.0/cookie-consent.js" charset="UTF-8" />
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
                            <div className="row col-lg-6 col-md-12 col-sm-12 footer-widget md-mb-50">
                                <h4 className="widget-title">USEFUL LINKS</h4>
                                <ul className="site-map col-lg-6 col-md-12 col-sm-12 pl-0">
                                    <li><Link href="/about-abacus/what-is-abacus" className='white-color'>What is Abacus</Link></li>
                                    <li><Link href="/#parent_faq" className='white-color'>Parent&apos;s FAQ&apos;s</Link></li>
                                    <li><button href="#" className='white-color' onClick={() => openModal('TeacherIn')}>Teacher&apos;s Inquiry</button></li>
                                    <li><button href="#" className='white-color' onClick={() => openModal('offline')}>Student&apos;s Inquiry</button></li>
                                    <li><button href="#" className='white-color' onClick={() => openModal('bookclass')}>Book A Free Demo</button></li>
                                    <li><Link href="/abacus-worksheet-generator" className='white-color'>Abacus WorkSheet Generator</Link></li>
                                </ul>
                                <ul className="site-map col-lg-6 col-md-12 col-sm-12 pl-0">
                                    <li><Link href="/#parent_testimonial" className='white-color'>Parent&apos;s Testimonial&apos;s</Link></li>
                                    <li><Link href="/abacus-franchise/faq" className='white-color'>Franchise FAQ&apos;s</Link></li>
                                    <li><button href="#" className='white-color' onClick={() => openModal('FRANCHISE')}>Franchise&apos;s Inquiry</button></li>
                                    <li><button href="#" className='white-color' onClick={handleClick}>Student&apos;s Login</button></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 footer-widget md-mb-50">
                                <h4 className="widget-title">Contact Us</h4>
                                <ul className="address-widget address2 pl-0">
                                    <li>
                                        <i className="flaticon-location"></i>
                                        <div className="desc">Address: 51, Sampat Hills, Bicholi Mardana Bypass, Indore-452016, Madhya Pradesh, India</div>
                                    </li>
                                    <li>
                                        <i className="flaticon-email"></i>
                                        <div className="desc">
                                            <a href={'mailto:' + "info@mmtpl.com"}>Email: info@mmtpl.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="flaticon-call"></i>
                                        <div className="desc">
                                            <a href="tel:+91 9826251893">For franchise inquiry: 9826251893</a>
                                            <a href="tel:+91 6266603724">For online Abacus classes: 9826074328</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
                                <h4 className="widget-title">SOCIAL MEDIA</h4>
                                <div id="fbbox">
                                    {showLikeBox && (
                                        <iframe
                                            title="myFrame"
                                            src="//www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fmastermindabacusindia&amp;width=250&amp;height=258&amp;show_faces=true&amp;colorscheme=light&amp;stream=false&amp;show_border=false&amp;header=false"
                                            scrolling="no"
                                            frameBorder="0"
                                            allowTransparency="true"
                                        />
                                    )}
                                </div>
                                <div className="address-widget address2">
                                    <ul className="footer-social d-flex justify-content-evenly pl-0" style={{ color: "#FD6C24", marginRight: '50px' }}>
                                        <li>
                                            <a href="https://www.facebook.com/mastermindabacusindia" target="_blank" aria-label="Go on facebook">
                                                <i className="fa fa-facebook-f" style={{ color: "gray" }}></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://x.com/mmabacusonline" target='_blank' aria-label="Go on twitter">
                                                <i className="fa fa-x-twitter" style={{ color: "gray" }}></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/mmabacusonline/" target='_blank' aria-label="Go on instagram">
                                                <i className="fa fa-instagram" style={{ color: "gray" }}></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/user/mastermindabacus" target='_blank' aria-label="Go on youtube">
                                                <i className="fa fa-youtube" style={{ color: "gray" }}></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
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
                            <div className="col-lg-12 text-center">
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
                <HomeModal isOpen={isModalOpen} onClose={closeModal} status={status} Referrer={Referrer} />
            </footer>
            {/* <footer id="rs-footer" className={footerClass ? footerClass : 'rs-footer'}>
                <div className={footerTopClass ? footerTopClass : "footer-top"}>
                    <div className="container">
                        <div className="row">
                            <div className="row col-lg-6 col-md-12 col-sm-12 footer-widget md-mb-50">
                                <h4 className="widget-title">USEFUL LINKS</h4>
                                <ul className="site-map col-lg-6 col-md-12 col-sm-12">
                                    <li><Link to="/about-abacus/what-is-abacus" className='white-color'>What is Abacus</Link></li>
                                    <li><Link to="/#parent_faq" className='white-color'>Parent's FAQ's</Link></li>
                                    <li><button onClick={() => openModal('TeacherIn')}>Teacher's Inquiry</button></li>
                                    <li><button onClick={() => openModal('offline')} >Student's Inquiry</button></li>
                                    <li><button onClick={() => openModal('bookclass')} >Book A Free Demo</button></li>
                                    <li><Link to="/abacus-worksheet-generator" className='white-color'>Abacus WorkSheet Generator</Link></li>
                                </ul>
                                <ul className="site-map col-lg-6 col-md-12 col-sm-12">
                                    <li><Link to="/#parent_testimonial" className='white-color'>Parent's Testimonial's</Link></li>
                                    <li><Link to="/abacus-franchise/faq" className='white-color'>Franchise FAQ's</Link></li>
                                    <li><button onClick={() => openModal('FRANCHISE')}>Franchise's Inquiry</button></li>
                                    <li><button onClick={handleClick} >Student's Login</button></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 footer-widget md-mb-50">
                                <h4 className="widget-title">Contact Us</h4>
                                <ul className="address-widget address2">
                                    <li>
                                        <i className="flaticon-location"></i>
                                        <div className="desc">Address:  51, Sampat Hills, Bicholi Mardana Bypass, Indore-452016, Madhya Pradesh, India</div>
                                    </li>
                                    <li>
                                        <i className="flaticon-email"></i>
                                        <div className="desc">
                                            <a href={'mailto:' + "info@mmtpl.com"}>Email:  info@mmtpl.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="flaticon-call"></i>
                                        <div className="desc">
                                            <a href="tel:+91 9826251893">For franchise inquiry : 9826251893</a>
                                            <a href="tel:+91 6266603724">For online Abacus classes : 9826074328</a>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 footer-widget mt-5">
                                <h4 className="widget-title">SOCIAL MEDIA</h4>
                                <div id="fbbox" >
                                    {showLikeBox && (
                                        <iframe
                                            title="myFrame"
                                            src="//www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fmastermindabacusindia&amp;width=250&amp;height=258&amp;show_faces=true&amp;colorscheme=light&amp;stream=false&amp;show_border=false&amp;header=false"
                                            scrolling="no"
                                            frameBorder="0"
                                            allowTransparency="true"
                                        />
                                    )}
                                </div>
                                <ul className="address-widget address2 ">
                                    <ul className="footer-social d-flex  justify-content-evenly" style={{ color: "#FD6C24", marginRight: '50px' }}>
                                        <li>
                                            <a href="https://www.facebook.com/mastermindabacusindia" target="_blank" aria-label="Go on facebook">
                                                <i className="fa fa-facebook-f" style={{ color: "gray" }}></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://x.com/mmabacusonline" target='_blank' aria-label="Go on twitter">
                                                <i className="fa fa-x-twitter" style={{ color: "gray" }}></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/mmabacusonline/" target='_blank' aria-label="Go on instagram">
                                                <i className="fa fa-instagram" style={{ color: "gray" }}></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/user/mastermindabacus" target='_blank' aria-label="Go on youtube">
                                                <i className="fa fa-youtube" style={{ color: "gray" }}></i>
                                            </a>
                                        </li>

                                    </ul>

                                </ul>
                            </div>
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
            </footer> */}

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

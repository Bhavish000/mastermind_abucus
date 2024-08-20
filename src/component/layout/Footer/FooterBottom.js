import Link from 'next/link';
import React, { useEffect, useState } from 'react';

// import defaultLogo from '../../../assets/img/mastermindabacus-logo.png';
// import defaultBG from '../../../assets/img/abacus/parallax.jpg';

const FooterBottom = (props) => {
    const { footerClass,  footerBG, footerColor } = props;
    const [showLikeBox, setShowLikeBox] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLikeBox(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const footerBGStyle = {
        // backgroundImage: `url(${footerBG})`,
        // backgroundColor: `url(${footerColor})`
    }
    const defaultBGStyle = {
        // backgroundImage: `url(${defaultBG})`,
        // backgroundColor: '#FD6C24'
    }


    return (
        <footer id="rs-footer" className={footerClass ? footerClass : 'rs-footer'} style={footerBG && footerColor ? footerBGStyle : defaultBGStyle}>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row y-middle">
                        <div className="col-lg-12 md-mb-20">
                            <div className="copyright text-center md-text-left ">
                                <p style={{ fontSize: "16px ", fontWeight: "600px" }}> Copyright © 2024 <span style={{ color: "#fd6c24" }}>Mastermind Tutorials Pvt. Ltd.</span> All rights reserved.</p>
                            </div>
                        </div>


                        <div className=" col-lg-12 text-center">
                            <ul className="copyright bottom-link text-center md-text-left" style={{ display: "flex", color: "white", alignItems: "center", justifyContent: "center", flexWrap: " wrap " }}>
                                <li>
                                    <Link href='cancellation-refund-policy'>Cancellation & Refund Policy |&nbsp;</Link>
                                </li>
                                <li>
                                   <Link href='shipping-delivery-policy'> Shipping & Delivery Policy |&nbsp;</Link>
                                </li>
                                <li>
                                <Link href="/terms"> Terms & Conditions |&nbsp; </Link>
                                </li>
                                <li>
                                    <Link href='privacy-policy'>Privacy policy |&nbsp;</Link>
                                </li>
                                <li>
                                    Update cookies preferences
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterBottom;
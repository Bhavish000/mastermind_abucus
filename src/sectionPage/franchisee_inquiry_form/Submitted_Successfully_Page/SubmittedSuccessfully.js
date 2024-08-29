import React from 'react';
import bgImg from '@/styles/img/abacus/fran_bnr.png';
import Link from 'next/link';
import Image from 'next/image';

const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    'background-size': 'cover',
    'background-position': 'center',
    'height': '71vh',
    'display': 'grid',
    'align-items': 'center',
    "position" : 'reletive',
    // 'opacity':'0.5',
    // 'z-index' : '-1'
}

const Successfully = () => {

    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner style4 " style={bgStyle}>
                <div className="container relative" >
                    <div className="row relative">
                        <div className="col-lg-6">
                            <div className="banner-content pb-14">
                                <div className="desc black-color mb-25 fs-4"  style={{ marginTop: "-10px" }}>
                                   Your Inquiry Has Been Submitted Successfully. <br />
                                    Please Check Your Registered Email Id And WhatsApp Number For Our Mail And
                                    Message With Information Regarding The Mastermind Abacus Program.
                                    Our Marketing Team Will Connect With You Soon For Further Discussion.
                                </div>

                                <div className="banner-btn z-index-1"  style={{ marginTop: "20px" }}>
                                    <Link  className="readon2 banner-style" href="/abacus-franchise">Back to Home</Link>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* <!-- banner section end --> */}
        </React.Fragment>
    );
}

export default Successfully;
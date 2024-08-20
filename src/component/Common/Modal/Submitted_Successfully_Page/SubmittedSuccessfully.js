import React from 'react';
import circle from '@/styles/img/banner/banner-circle.png';
import dots from '@/styles/img/banner/banner-dots.png';
import bgImg from '@/styles/img/abacus/fran_bnr.png';
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
                                <div className="desc white-color mb-25 font-bold text-shadow fs-4 " style={{ marginTop: "-10px" }}>
                                YOU HAVE SUCCESSFULLY REGISTERED, WE&apos;LL CONTACT YOU SOON FOR FURTHER DETAILS.
                                </div>
                            </div>
                            <div className="banner-circle-shape">
                                
                                    <Image
                                        className="rotateme"
                                        src={circle}
                                        alt=""
                                    />
                                
                            </div>
                        </div>
                    </div>
                    <div className="banner-dots-shape">
                       
                            <Image
                                src={dots}
                                alt=""
                            />
                        
                    </div>
                </div>
            </div>
            {/* <!-- banner section end --> */}
        </React.Fragment>
    );
}

export default Successfully;
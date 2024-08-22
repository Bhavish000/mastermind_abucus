import React from 'react';
import AboutImage from '@/styles/img/abacus/Laptop.png'
import Image from 'next/image';


const BannerWorkSheet = (props) => {

    return (
        <div id="rs-about" className="rs-about bannerWorkSheet pt-100 pb-100 md-pt-0 md-pb-20">
            <div className="container">
                <div className="row justify-content-between">

                    <div className="col-lg-6">
                        <div className="about-content">
                            {/* Section Title Start */}

                            <div className="content-part family">

                                <div className="title  white-color" >Get Unlimited Free <br/> Abacus Worksheets
                                 </div> 
                                <div className="title title-change" > Practice to Excel </div>
                            </div>
                            {/* Section Title End */}
                        </div>
                    </div>

                    <div className="col-lg-5 md-mb-50">
                        <div className="img-part">
                            <Image className="about-main" src={AboutImage} alt="Mastermind Abacus" />
                           </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerWorkSheet;
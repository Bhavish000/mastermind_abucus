import React from 'react';
import dots from '@/styles/img/banner/banner-dots.png';
import teacherImg from '@/styles/img/abacus/Research/abacus-images.png';
import Image from 'next/image';



const BannerResearch = () => {

    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner BannerResearch  ">
                <div className="container relative">
                    <div className="col relative">
                        <div className="row-lg-6">
                           
                            <div className="banner-content pb-14 family offset-lg-4">
                                <div className="banner-title white-color"  >YEARS OF RESEARCH BACKED BY FACTS</div>
                                <div className="banner-title white-color"  >CONFIRMS THE ROLE OF ABACUS AS A HOLISTIC</div>
                                <div className="banner-title white-color">BRAIN DEVELOPMENT TOOL IN KIDS</div>
                            </div>
                          
                        </div>
                    </div>

                    <div className='col-lg-6 teacher-image'>
                        <Image 
                        src={teacherImg}
                        alt='Mastermid Abacus'
                        />
                    </div>
                    <div className="banner-dots-shape">
                            <Image
                                src={dots}
                                alt='Mastermid Abacus'
                            />
                    </div>
                </div>
            </div>
            {/* <!-- banner section end --> */}
        </React.Fragment>
    );
}

export default BannerResearch;
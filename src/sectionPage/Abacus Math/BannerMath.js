import React from 'react';
import dots from '@/styles/img/banner/banner-dots.png';
import teacherImg from '@/styles/img/abacus/abacusMath/abacus-math-for-kids.webp';
import Image from 'next/image';



const BannerMath = () => {

    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner BannerMath" >
                <div className="container relative">
                    <div className="col relative">
                        <div className="row-lg-5">
                           
                            <div className="banner-content pb-14 mt-40">
                                <div className="banner-title family title-change"  >IMPROVE YOUR CHILD&apos;s... <br/>
                                MENTAL ARITHMETIC ABILITIES
                                   </div>
                                <div className="desc black-color mb-25" >YOUR CHILD CAN NOW BEAT THE CALCULATOR</div>
                              
                            </div>
                            
                        </div>
                    </div>

                    <div className='col-lg-5 teacher-image'>
                        <Image 
                        src={teacherImg}
                        alt='Mastermind Abacus'
                        />
                    </div>
                    <div className="banner-dots-shape">
                        
                            <Image
                                src={dots}
                                alt="Mastermind Abacus"
                            />
                    </div>
                </div>
            </div>
            {/* <!-- banner section end --> */}
        </React.Fragment>
    );
}

export default BannerMath;











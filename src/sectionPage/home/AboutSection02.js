import React, { useState } from 'react';
// import AboutImage from '../../assets/img/abacus/can_you_solve.webp'
import AboutImage from '@/styles/img/abacus/can_you_solve.webp'
import Image from 'next/image';
import ModalVideo from 'react-modal-video';
// import LazyLoad from 'react-lazyload';


function AboutSection02 () {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);
    return (
        <div id="rs-about" className="rs-about AboutSection02-style4 back-img-style pt-150 pb-150 md-pt-80 md-pb-40">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='6eFyspBqvNE' onClose={() => { openModal(); }} />
            <div className="container">
                <div className="row justify-content-between">

                    <div className="col-lg-6 md-mb-40">
                        <div className="about-content">
                            <div className="sec-title ">
                                <h2 className="title family mb-14 sm-mb-6">
                                <span className='text-shadow' >THE MESMERIZING EFFECT<span className='title-change' > OF ABACUS TRAINING</span> </span>
                                </h2>
                                <div className="desc ">
                                Mastermind <span className='font-bold'>Abacus training</span> makes children confident. They perform mental math with ease. Their speed and accuracy are great.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 md-mt-50">
                        <div className="img-part order-last">
                            {/* <LazyLoad height={200} offset={50} placeholder='blur'> */}
                            <Image className="about-main" onClick={() => { openModal(); }} src={AboutImage} alt="Mastermind Abacus" />
                            {/* </LazyLoad> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection02;
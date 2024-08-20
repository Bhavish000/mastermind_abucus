import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import AboutImage from '@/styles/img/abacus/experience_mastermind_abacus.jpg';
import Image from 'next/image';

const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <div className="rs-about video-style pt-100 pb-10 mt-10 md-pt-30">
            <ModalVideo 
                channel='youtube' 
                isOpen={isOpen} 
                videoId='JwjiqMPtz-E' 
                onClose={toggleModal} 
            />
            <div className="container relative">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="img-part media-icon">
                            <Image
                                className="video-img"
                                src={AboutImage}
                                alt="Mastermind Abacus"
                                width={600} // specify actual width of your image
                                height={400} // specify actual height of your image
                                priority // preloads the image
                            />
                            <button 
                                className="popup-videos" 
                                onClick={toggleModal} 
                                aria-label="videoOpen"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content gray-bg">
                            <div className="sec-title mb-46 md-mb-10">
                                <h1 className="title md-text-center family fs-2">
                                    EXPERIENCE MASTERMIND ABACUS CLASSES & TRAINING: <span className='title-change'>UNLOCK 5X FASTER MATH SKILLS</span>
                                </h1>
                                <div className="desc"> 
                                    Mastermind Abacus Classes & Training have a proven track record of enhancing math skills and promoting whole brain development in young minds, setting them up for academic and lifelong success. Our abacus training is available both offline and online, with a first-of-its-kind live online portal that brings the enriching experience of the best abacus classes into your home.
                                </div>
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

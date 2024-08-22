import Image from 'next/image';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

// About Images
import AboutImage from '@/styles/img/abacus/school/offline-abacus.webp'
import Link from 'next/link';
// import shapeImg1 from 'styles/img/about/icon-shape.png';
// import videoImage from '../../assets/img/about/about-video-bg2.png';

const About = () => {

   

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="rs-about video-style-school pt-100 pb-0 md-pt-90 md-pb-30">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
            <div className="container relative">
                
                <div className="row">
                    <div className="col-lg-6">
                        <div className="img-part media-icon">
                            <Image
                                className="video-img section-shadow" 
                                src={AboutImage}
                                alt="Mastermind Abacus"
                            />
                            {/* <a className="popup-videos" onClick={() => { openModal(); }}>
                                <i className="fa fa-play" style={{color: "white"}}></i></a> */}
                            <div className="dot-shape">
                                {/* <Tilty>
                                    <img
                                        className=""
                                        src={shapeImg2}
                                        alt="shape1"
                                    />
                                </Tilty> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content gray-bg ">
                            {/* Section Title Start */}
                            <div className="sec-title mb-46 md-mb-10">
                                <h1 className="title family fs-2">
                                    WHY ABACUS <span className='title-change'>FOR SCHOOL?</span>
                                </h1>
                                <div className="desc ">
                                    Why <span className='font-bold'>Abacus for School?</span> It is a unique program offering multiple lifetime skills for the students, along with developing their <Link href={'/abacus-math'} className='primary-color font-bold'>Mental Math</Link> skills. <br/>
                                    Not all aspiring students get a chance to join <Link href={'/abacus-classes-near-me'} className='primary-color font-bold'>Abacus classes</Link> run by other Abacus Training centers. Affordability & lack of time are two of the prime reasons.<br/>
                                    If introduced in the school curriculum as a regular subject, all the Students from classes 1st - 5th will benefit at a very cost effective price. Moreover, school teachers can teach Abacus in the regular school curriculum.
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
import React, { useState } from 'react';
import AboutImage from '@/styles/img/abacus/watch_how_mastermind.jpg'
import ModalVideo from 'react-modal-video';
import Image from 'next/image';

function BenefiteSection (props) {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);
    return (
        <div id="rs-about" className="rs-about benefitSection-style4 pt-100 pb-100 md-pt-40 md-pb-0 back2-color" >
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='Pcccj1L_oME' onClose={() => { openModal(); }} />
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6 benefit-text" >
                        <div className="about-content">
                            <div className="sec-title  mb-20">
                                <h2 className="title family mb-14 sm-mb-6">
                                    BENEFITS OF <span className='title-change' >ABACUS</span>
                                </h2>
                                <div className="desc ">
                                    Mastermind <span className='font-bold'>Abacus training</span> develops dynamic number sense in children. The specific game-based technique keeps kids engaged. It removes the fear of math right from childhood. Other than Mental Math, it also improves academic performance with the development of crucial life skills such as:
                                </div>
                            </div>
                            {/* Section Title End */}
                            <ul className="d-flex flex-wrap contact-part justify-content-center pl-0">
                                <li>

                                    <div className="desc">
                                        <span> <i className="fa-solid fa-circle-chevron-right"></i>Self-Confidence</span>
                                    </div>
                                </li>
                                <li>

                                    <div className="desc">
                                        <span> <i className="fa-solid fa-circle-chevron-right" ></i> Ability To Recall</span>
                                    </div>
                                </li>
                                <li>

                                    <div className="desc">
                                        <span> <i className="fa-solid fa-circle-chevron-right" ></i> Concentration</span>
                                    </div>
                                </li>
                                <li>

                                    <div className="desc">
                                        <span> <i className="fa-solid fa-circle-chevron-right"></i> Visualization</span>
                                    </div>
                                </li>
                                <li>

                                    <div className="desc">
                                        <span> <i className="fa-solid fa-circle-chevron-right" ></i> Photographic Memory</span>
                                    </div>
                                </li>
                                <li>

                                    <div className="desc">
                                        <span> <i className="fa-solid fa-circle-chevron-right"></i> Listening Skill</span>
                                    </div>
                                </li>
                            </ul>


                        </div>
                    </div>

                    <div className="col-lg-6 md-mb-30">
                        <div className="img-part">
                            <Image className="about-main" onClick={() => { openModal(); }} src={AboutImage} alt="Mastermind Abacus" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BenefiteSection;
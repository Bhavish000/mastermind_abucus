import React, { useState } from 'react';
import AboutImage from '@/styles/img/abacus/watch_how_mastermind.jpg'
import ModalVideo from 'react-modal-video';
import SectionTitle from '@/component/Common/SectionTitle';
import Image from 'next/image';

const TeacherBenefite = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);
    return (
        <div id="rs-about" className="rs-about benefitSection-teacher pt-100 pb-100 md-pt-0 md-pb-40" >
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='Pcccj1L_oME' onClose={() => { openModal(); }} />
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6 md-mb-40">
                        <div className="about-content">
                            {/* Section Title Start */}
                            <SectionTitle
                                sectionClass="sec-title mb-20 text-black "
                                subtitleClass="sub-title"
                                // subtitle="Personal & Professional Coach"
                                titleClass="title family mb-14 sm-mb-6"
                                title={<> <span className='title-change'> BENEFITS </span>OF ABACUS</>}
                                descClass="desc mb-26"
                                description="Mastermind Abacus training develops dynamic number sense in children. The specific game-based technique keeps kids engaged. It removes the fear of math right from childhood. Other than Mental Math, it also improves academic performance with the development of crucial life skills such as:"
                                secondDescClass="desc"
                            />
                           
                            <ul className="d-flex flex-wrap contact-part justify-content-center pl-0"   >
                                <li>

                                    <div className="desc">
                                        <span> <i className="fa-solid fa-circle-chevron-right" ></i>Self-Confidence</span>
                                    </div>
                                </li>
                                <li>

                                    <div className="desc">
                                        <span> <i class="fa-solid fa-circle-chevron-right" ></i> Ability To Recall</span>
                                    </div>
                                </li>
                                <li>

                                    <div className="desc">
                                        <span> <i class="fa-solid fa-circle-chevron-right" ></i> Concentration</span>
                                    </div>
                                </li>
                                <li>

                                    <div className="desc">
                                        <span> <i class="fa-solid fa-circle-chevron-right" ></i> Visualization</span>
                                    </div>
                                </li>
                                <li>

                                    <div className="desc">
                                        <span> <i class="fa-solid fa-circle-chevron-right" ></i> Photographic Memory</span>
                                    </div>
                                </li>
                                <li>

                                    <div className="desc">
                                        <span> <i class="fa-solid fa-circle-chevron-right"></i> Listening Skill</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 md-mb-0 md-mt-30">
                        <div className="img-part" >
                            <Image className="about-main" onClick={() => { openModal(); }} src={AboutImage} alt="About Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherBenefite;
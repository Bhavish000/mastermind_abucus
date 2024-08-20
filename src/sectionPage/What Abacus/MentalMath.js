import React, { useState } from "react";
import mainImage2 from '@/styles/img/abacus/whatAbacus/student_in_action_2.webp';
import ModalVideo from "react-modal-video";
import SectionTitle from "@/component/Common/SectionTitle";
import Image from "next/image";


const MentalMath = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div id="rs-about" className="rs-about style1 pt-30 pb-80 md-pt-30 md-pb-0" >
             <ModalVideo channel='youtube' isOpen={isOpen} videoId='QDEjTmphL3I' onClose={() => { openModal(); }} />
            <div className="container p-4 rounded section-shadow back-color">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-last">
                        {/* Section Title Start */}
                        <SectionTitle
                            sectionClass="sec-title mb-6"
                            subtitleClass="sub-title primary"
                            // subtitle="About Us"
                            titleClass="title family"
                            title={<>WHAT IS <span className="title-change" >MENTAL MATH?</span></>}
                            descClass="desc pr-36 md-pr-10"
                            description={<>Mental Math is the ability to Solve a mathematical sum with speed and accuracy without the help of any tools like a calculator or computer. 
                                The Abacus Training develops the ability to visualize the Abacus tool and move the beads logically on it. <br/>
                                Students recall the final bead position due to their photographic memory and solve the sums mentally. <br/>
                                When a student trained in Abacus exhibits their mental mathematical skills, the child is said to be doing Abacus Mental Maths.</>}
                            
                        />
                    </div>
                    <div className="col-lg-6 pr-10 order-last md-mb-20">
                        <div className="img-part popup-videos" >
                                <Image 
                                    src={mainImage2}
                                    alt="Main Image"
                                    onClick={openModal}
                                />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default MentalMath;
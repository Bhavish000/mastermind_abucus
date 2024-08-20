import React, { useState } from "react";
import mainImage from '@/styles/img/abacus/abacusMath/student_in_action_10.webp';
import MathBenefit from "./MathBenefit";
import ModalVideo from "react-modal-video";
import Image from "next/image";
import SectionTitle from "@/component/Common/SectionTitle";
import Link from "next/link";

function About() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <>
            <div id="rs-about" className="rs-about style1 pt-50 md-pt-70 md-pb-0">
                <ModalVideo channel='youtube' isOpen={isOpen} videoId='NUR8qrsRG8E' onClose={() => { openModal(); }} />
                <div className="container">
                    <div className="row align-items-center pb-50">
                        <div className="col-lg-6 pr-30 md-pr-10 pt-50 md-pl-14 md-mb-60">
                            <div className="img-part ">

                                <Image
                                className="popup-videos"
                                    src={mainImage}
                                    alt="Main Image"
                                    onClick={openModal}
                                />
                                {/* <img
                                    className="shape top-center rotateme z-1"
                                    src={animateBall}
                                    alt="Rotating Ball"
                                /> */}

                            </div>
                        </div>
                        <div className="col-lg-6 order-last">

                            <div className="sec-title   md-mb-10">
                                <h1 className="title family text-center fs-2">
                                ABACUS MATH <span className="title-change">FOR KIDS</span>
                                </h1>
                                <div className="desc ">
                                Abacus Math is a process when the Abacus tool is used for performing arithmetic calculations. Training of Abacus for kids helps them solve addition, subtraction, multiplication and division sums on an Abacus. They also learn to solve sums of decimal places and those with negative numbers. <br />
                                A child trained in Math Abacus performs calculations by visualizing the abacus tool and moving the beads mentally. They do not use the physical Abacus. The kids can mentally solve sums at a great speed with accuracy. It is scientifically proven that introducing Abacus to kids at the early age of 5 or 6 years triggers whole brain development.
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
            {/* <div id="rs-about" className="rs-about style1 pt-50 md-pt-30 md-pb-20" > */}
                <MathBenefit />
            {/* </div> */}

            <div id="rs-about" className="rs-about style1 pt-0 mt-20 mb-30 md-pt-10 md-pb-20 aling-justify">
                <div className="container">
                    <SectionTitle
                        descClass="desc pr-10"
                        description={<>From the several Abacus promoters operating Abacus learning centers the challenge is selecting the best. <br />
                            We, Mastermind Abacus, have been promoting <Link href="/abacus-online-classes" className="popup-videos text-primary" >Abacus Math</Link> education for over two decades globally. We have with us more than 2000 Franchise associates.<br />
                            Mastermind Abacus also has the World&apos;s First Live Online Abacus E-Learning Platform. The results of our Online Abacus classes is effective as that in a conventional in-person Abacus classroom.</>}

                    />
                </div></div>



        </>
    );
}

export default About;
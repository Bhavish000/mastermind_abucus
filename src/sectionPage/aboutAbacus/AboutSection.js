import React, { useState } from "react";
import mainImage from '@/styles/img/abacus/about/maxresdefault.jpg';
import ModalVideo from "react-modal-video";
import Image from "next/image";
import SectionTitle from "@/component/Common/SectionTitle";


function AboutSection() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);



    return (
        <div id="rs-about" className="rs-about style1 pt-100 md-pt-70 md-pb-0">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='IQPJC_ihaGw' onClose={() => { openModal(); }} />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-last">
                        <div className="sec-title mb-46 md-mb-10">
                            <h1 className="title family fs-2">
                                ABOUT MASTERMIND <span className="title-change" >ACTION</span>
                            </h1>
                            <div className="desc ">
                                We are Mastermind Abacus, a Multinational Education Company based at Indore, India. We have our presence in 16 Countries. We share our educational concepts Globally through 2000-plus Associate Education Franchisee. We are a company driven by the educational needs of the next generation. We expertise in identifying basic learning problems in kids and accordingly develop programs to ease their learning process. We are one of the largest Abacus company with a global presence.
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pr-10  md-mb-30">
                        <div className="img-part popup-videos">

                            <Image
                                src={mainImage}
                                alt="Main Image"
                                onClick={openModal}
                            />
                        </div>
                    </div>

                </div>

                <SectionTitle
                    sectionClass="sec-title mb-26"
                    subtitleClass="sub-title primary"
                    // subtitle="About Us"
                    titleClass="title"
                    // title="'ABACUS CLASSES NEAR ME'
                    // IS THIS WHAT YOU ARE SEARCHING FOR?"
                    descClass="desc pr-10"
                    description={<> <span className="font-bold">Our Endeavour Is </span> - To &apos;Simplify The Learning Methods&apos; So That Every Student Can RISE. <br />
                        <br />
                        <span className="font-bold">Our Philosophy Of Spreading Education is RISE</span> - Research, Innovate, Share & Educate.</>}
                // animateName="fade-up"
                // animateDuration="1500"
                />

            </div>
        </div>
    );
}

export default AboutSection;
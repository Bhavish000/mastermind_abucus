import React, { useState } from "react";
import mainImage from '@/styles/img/abacus/whatAbacus/watch_how_mastermind.jpg';
import ModalVideo from "react-modal-video";
import Image from "next/image";
import SectionTitle from "@/component/Common/SectionTitle";


function GateWayAbacus() {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div id="rs-about" className="rs-about style1 pt-80 pb-50 md-pt-70 md-pb-20" >
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='Pcccj1L_oME' onClose={() => { openModal(); }} />
            <div className="container p-4 rounded " style={{ boxShadow: "0px 0px 1px black", backgroundColor: "#F9F8F8" }}>
                <div className="row align-items-center">


                    <div className="col-lg-6 order-last">
                   

                        <div className="sec-title mb-46 md-mb-10">
                            <h1 className="title family fs-2">
                                WHAT IS ABACUS? THE <span style={{ color: "#fd6c24" }}>GATEWAY TO MENTAL MATH MASTERY</span>
                            </h1>
                            <div className="desc ">
                                The abacus, a time-honored tool for calculation, is traditionally made up of a rectangular frame containing several rods, each lined with beads. These beads are slid along the rods to represent numbers and facilitate various arithmetic operations. In modern times, the abacus has found a new role as a tool for enhancing brain development in children. It has been particularly effective in improving mental math skills, capturing worldwide attention for its remarkable benefits in this area.
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pr-30 md-pr-10  md-mb-20">
                        <div className="img-part">
                            <Image
                                src={mainImage}
                                alt="Main Image"
                                onClick={openModal}
                                style={{ cursor: 'pointer' }}
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
                    description={<> <span className="font-bold"> Abacus: A Brain-Boosting System </span> <br />
                        Recognized globally as a &apos;Holistic Brain Development System,&apos; the abacus is more than just a counting tool. It&apos;s a brain enhancer! Kids using the abacus demonstrate amazing mental math abilities, dazzling everyone with their speed and accuracy. Research shows that children aged 5 to 14 benefit the most from abacus training. <br />

                        <span className="font-bold"> How Does the Abacus Work?</span> <br />
                        Ever wondered how this simple tool can be so powerful in math? The abacus makes all arithmetic calculations like addition, subtraction, multiplication, and division a breeze. But there&apos;s more – it&apos;s also adept at handling decimal calculations and negative numbers. The secret lies in moving its beads up and down. Each bead&apos;s position represents a specific value, and by skillfully manipulating them, you can perform complex calculations with ease and speed. It&apos;s not just a tool; it&apos;s a brain exercise that enhances your numerical agility.
                        <br />
                        <span className="font-bold"> The Power of Learning Abacus </span> <br />
                        Dr. Toshio Hayashi, a renowned brain development expert, believes starting abacus learning early is key to activating a child&apos;s brain. When kids use an abacus, they engage both hands, sparking activity in various brain regions. This leads to enhanced whole-brain functioning and a sharper intellect.

                        <br />
                        <span className="font-bold">  Benefits of Abacus Training</span> <br />
                        Abacus isn&apos;t just about numbers; it&apos;s a tool for overall brain enhancement. Here&apos;s what it offers:

                        - Boosts visualization and imagination.
                        - Sharpens focus and concentration.
                        - Encourages logical thinking and problem-solving.
                        - Enhances memory and recall abilities.
                        - Studies confirm that kids who learn abacus outperform their peers in academics, showcasing superior cognitive skills.
                        With these benefits, abacus learners scored higher than non-abacus learners. They show overall improved performance in their academics.</>}

                />

            </div>
        </div>
    );
}

export default GateWayAbacus;
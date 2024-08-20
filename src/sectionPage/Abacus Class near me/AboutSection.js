import { HomeModal } from "@/component/Common/Modal/HomeModal";
import SectionTitle from "@/component/Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import mainImage from '@/styles/img/abacus/NearClasses/mastermind-abacus-class-nearyou.webp';


function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };

  
    return (
        <div id="rs-about" className="rs-about style1 pt-100 md-pt-60 md-pb-0 md-text-center" >
            <div className="container p-4 rounded section-shadow" >
                <div className="row align-items-center">
                    <div className="col-lg-6 pr-40  md-pr-10 md-mb-20">
                        <div className="img-part" >

                            <Image
                            className="section-shadow popup-videos"
                                src={mainImage}
                                alt="Mastermind Abacus"
                                onClick={openModal}
                            />


                        </div>
                    </div>
                    <div className="col-lg-6 order-last flex align-top">


                        <div className="sec-title mb-0 margindec" >
                            <h1 className="title family text-justify fs-2" >
                                <span className="title-change" >ABACUS CLASSES NEAR ME</span> <br />
                                IS THIS WHAT YOU ARE SEARCHING FOR? </h1>
                            <div className="desc ">
                                <span className="font-bold">Abacus Classes near me,</span> is this what you are searching for? Well, you are not the only one. There are many such Parents.
                                But, finding a quality Abacus academy for a child is not easy, as parents are not aware of the intricacies of <Link href={'/become-a-teacher'} className="primary-color font-bold">Abacus training</Link> & learning.
                                When a child learns Abacus, parents expect improvement in their mental math abilities. In addition, they expect enhanced listening ability, visualization capacity, and concentration levels in their children.,
                                They expect whole-brain development and increased confidence in the child. Also, overall performance in Academics should reflect their improved abilities
                                Expected results can be achieved only in professionally managed classes by efficient Abacus Teachers trained by an organized and professional Abacus promoter like Mastermind. Furthermore, Mastermind&apos;s game-based program ensures the learning process does not become monotonous, which is very important for the expected results.
                            </div>
                        </div>
                    </div>
                </div>

                <SectionTitle
                    sectionClass="sec-title mb-0"
                    subtitleClass="sub-title primary"
                    titleClass="title"
                    descClass="desc"
                    description={<>At Mastermind, it is much more than just learning <Link href={'abacus-math'} className="primary-color font-bold">Abacus Math</Link> or Mental Math.
                    <br/>
                        Your child&apos;s overall academic performance will reflect their improved abilities with our abacus training.  <br/>
                        In addition, it meets all the parent&apos;s expectations for getting the best outcome of the training. Mastermind is one of the best Abacus learning destinations with its most advanced abacus learning program. It is created to be in sync with the calculation method followed by schools.  <br/>
                        We have options for both conventional Abacus classes and <Link href={'/abacus-online-classes'} className="primary-color font-bold">Online Abacus classes</Link>.  <br/>
                        Moreover, it is an after-school learning program, and the parents do not want their child to spend a lot of time traveling to an Abacus class. And, we, with our 2000 plus centers in over 16 countries, are easy to find.  <br/>
                        We can confidently say that your search for &apos;Abacus classes near me&apos; ends now.  <br/>
                        Just fill out an inquiry form, and our team will contact you. We shall guide you to the nearest abacus center..</>}
                // animateName="fade-up"
                // animateDuration="500"
                />

            </div>
            <HomeModal isOpen={isModalOpen} onClose={openModal} status={'offline'} />
        </div>
    );
}

export default About;
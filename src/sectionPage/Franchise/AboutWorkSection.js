import React from "react";
import image1 from '@/styles/img/abacus/Franchise/conventional_abacus_classes.webp';
import image2 from '@/styles/img/abacus/Franchise/Lingo-Bingo.webp';
import image3 from '@/styles/img/abacus/Franchise/school.jpg';
import SectionTitle from "@/component/Common/SectionTitle";
import Image from "next/image";

function AboutWork() {


    return (
        <div id="rs-about" className="rs-about style1 pt-50 pb-50 md-pt-70 md-pb-0"  >
            <div className="container">

                <SectionTitle
                    sectionClass="sec-title text-center mb-40 md-mb-30"
                    // bottomSubTitleClass="sub-title mb-0"
                    // bottomSubTitle="The Abacus course structure at Mastermind is user-friendly and engaging, featuring fun Math Games that captivate children. This consistent structure applies to both our online and offline classes at the abacus learning center."
                    titleClass="title family mb-10"
                    title={<>AN ABACUS FRANCHISE OPPORTUNITY WITH <br /> &apos;<span className="title-change" >THREE DIMENSIONAL EARNINGS</span>&apos; </>}
                />
                <div className="row align-items-center section-shadow back-color slick-slide mb-30" >
                    <div className="col-lg-6 pr-30 md-pr-10 image-sec" >
                        <div className="img-part ">

                            <Image
                                src={image1}
                                alt="Main Image"
                            />

                        </div>
                    </div>
                    <div className=" col-lg-6 order-last">
                        {/* Section Title Start */}
                        <SectionTitle
                            sectionClass="sec-title mb-6"
                            subtitleClass="sub-title primary"
                            // subtitle="About Us"
                            titleClass="title family"
                            title={<> CONVENTIONAL <span style={{ color: "#fd6c24" }}>ABACUS</span> CLASSES</>}
                            descClass="desc pr-10"
                            description={<>With a Mastermind Abacus franchise, you can start your own Abacus classes for students aged 5 to 14. You will receive all the necessary resources, training, and support to ensure the success and growth of your business..</>}
                        // animateName="fade-up"
                        // animateDuration="100"
                        />
                    </div>

                </div>
               

                <div className="row align-items-center" style={{ boxShadow: "0px 0px 1px gray", padding: "20px", marginBlock: "30px", backgroundColor: "#F9F8F8" }}>
                    
                    <div className="col-lg-6 pr-30 md-pr-10 image-sec md-mb-20 ">
                        <div className="img-part">
                        <Image
                                src={image3}
                                alt="Main Image"
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 order-last" >
                        {/* Section Title Start */}
                        <SectionTitle
                            sectionClass="sec-title mb-6"
                            subtitleClass="sub-title primary"
                            // subtitle="About Us"
                            titleClass="title family"
                            title={<>SCHOOL <span style={{ color: "#fd6c24" }}> TIE-UPS </span> FOR ABACUS LAB</>}
                            descClass="desc pr-10"
                            description={<>This is an excellent earning opportunity. Partner with schools to offer Abacus classes. Many schools are incorporating Abacus into the curriculum for students from 1st to 7th grade, providing a substantial business opportunity. We assist you in securing these school partnerships, offering an additional and highly viable revenue stream..</>}
                        // animateName="fade-up"
                        // animateDuration="500"
                        />
                    </div>

                </div>




                <div className="row align-items-center" style={{ boxShadow: "0px 0px 1px gray", padding: "20px", marginBlock: "30px", backgroundColor: "#F9F8F8" }}>

                    <div className="col-lg-6 pr-30 md-pr-10 image-sec md-mb-20 ">
                        <div className="img-part">

                            <Image
                                src={image2}
                                alt="Main Image"
                            />

                        </div>
                    </div>

                    <div className="col-lg-6 order-last" >
                        {/* Section Title Start */}
                        <SectionTitle
                            sectionClass="sec-title mb-6"
                            subtitleClass="sub-title primary"
                            // subtitle="About Us"
                            titleClass="title family"
                            title={<> <span style={{ color: "#fd6c24" }}>LINGO BINGO</span> - MATH PROGRAM</>}
                            descClass="desc pr-10"
                            description={<>Introducing Lingo Bingo, an exclusive offline program tailored for children aged 5 to 6, nurturing their numerical understanding from an early age. This presents a lucrative opportunity for our franchisees to tap into an untapped market of young learners. Provided at no additional cost with your Mastermind Abacus franchise, Lingo Bingo is a distinctive curriculum featuring engaging games and activities. The program spans 6 to 9 months, after which children can seamlessly transition to Level One of the Mastermind Abacus curriculums..</>}
                        // animateName="fade-up"
                        // animateDuration="500"
                        />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default AboutWork;
import React, { useState } from "react";
import image3 from '@/styles/img/abacus/Franchise/watch_how_mastermind.jpg';
import ModalVideo from "react-modal-video";
import SectionTitle from "@/component/Common/SectionTitle";
import Image from "next/image";
import { HomeModal } from "@/component/Common/Modal/HomeModal";

function FranchiseBenefits() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal2 = () => {
        setIsModalOpen(!isModalOpen);
    };


    return (
        <div id="rs-about" className="rs-about style1 pt-100 pb-100 md-pt-50 md-pb-0" >
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='Pcccj1L_oME' onClose={() => { openModal(); }} />
            <div className="container">
                <div className="row align-items-center" >
                    <div className="col-lg-6 ">
                        {/* Section Title Start */}
                        <SectionTitle
                            sectionClass="sec-title mb-6"
                            subtitleClass="sub-title primary"
                            // subtitle="About Us"
                            titleClass="title family text-center"
                            title={<>BENEFITS OF <span style={{color:"#fd6c24"}}> ABACUS FRANCHISE</span></>}
                            descClass="desc pr-10"
                            description={<>Mastermind Abacus Franchise offers an exceptional earning opportunity with the flexibility of time management. Additionally, it provides the gratification of assisting children in their academic growth, thereby earning you social goodwill for contributing to society. By nurturing future citizens with exceptional confidence and life skills, you&apos;ll be credited with shaping exemplary individuals.</>}
                            // animateName="fade-up"
                            // animateDuration="500"
                        />
                        <div className="banner-btn z-index-1 text-center md-mb-20"  style={{ marginTop: "20px" }}>
                                    {/* <Link className="readon2 banner-style"   to={{ pathname: '/franchisee_inquiry', state: { message: "FRANCHISE INQUIRY", id: '3' } }}  >Apply Now</Link> */}
                                    <div className="readon2 banner-style" onClick={openModal2} style={{cursor:'pointer'}} >Apply Now</div>
                                </div>
                    </div>
                    <div className="col-lg-6 pr-30  md-mb-30 order-last">
                        <div className="img-part">
                                <Image
                                    src={image3}
                                    alt="Main Image"
                                    onClick={openModal}
                                    style={{cursor:'pointer'}}
                                />
                        </div>
                    </div>

                </div>
            </div>
            <HomeModal  isOpen={isModalOpen} onClose={openModal2} status={'FRANCHISE'}  mess={"FRANCHISE INQUIRY"}  id={'3'}  />
        </div>
    );
}

export default FranchiseBenefits;
import { HomeModal } from "@/component/Common/Modal/HomeModal";
import SectionTitle from "@/component/Common/SectionTitle";
import React, { useState } from "react";

// import bgImage from '../../assets/img/abacus/Franchise/Explore-the-Appeal-of-a-Multicolored-Ball-Variety-on-a_2458709_wh860.png';

const MapBottom = (props) => {

    const { ctaClass } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    

    return (
        <div className={ctaClass ? ctaClass : 'rs-cta pt-30'} >
            {/* <div className="cta-img" style={{opacity:"0.5"}}>
                <img
                    // src={bgImage}
                    alt="Bg Image"
                />
            </div> */}
            <div className="cta-content text-center mb-40 md-mb-0">
                {/* Section Title Start */}
                <SectionTitle
                    sectionClass="sec-title "
                    titleClass="title family mt-40 md-mt-0 mb-16 md-mb-10 "
                    title={<>GIVE A KICK START TO YOUR <br />
                       <span style={{color:"#fd6c24"}}> BETTER TOMORROW</span></>}
                    // descClass="desc"
                    // description={ctaDescription ? ctaDescription : Watch How Mastermind Abacus Franchise Support Your Business Growth.}
                    // animateName="fade-up"    
                    // animateDuration="500"
                />
                {/* Section Title End */}
                <div className="btn-part mb-40 md-mb-0" >
                    <div className="readon2" onClick={openModal} style={{cursor:'pointer'}}>Apply Now</div>
                </div>
            </div>
            <HomeModal  isOpen={isModalOpen} onClose={openModal} status={'FRANCHISE'}  mess={"FRANCHISE INQUIRY"}  id={'3'}  />
        </div>
    );
}

export default MapBottom;
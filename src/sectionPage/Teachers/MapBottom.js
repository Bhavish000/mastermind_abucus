import { HomeModal } from "@/component/Common/Modal/HomeModal";
import SectionTitle from "@/component/Common/SectionTitle";
import React, { useState } from "react";

const MapBottom = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const { ctaClass } = props;


    return (
        <div className={ctaClass ? ctaClass : 'rs-cta'} >
            <div className="cta-content text-center">
                {/* Section Title Start */}
                <SectionTitle
                    sectionClass="sec-title mb-40 md-mb-20"
                    titleClass="title family mb-16 md-mb-10"
                    title={<>GIVE A KICK START TO YOUR <br /><span className="title-change" > 
                        BETTER TOMORROW</span>  </>}
                />
                {/* Section Title End */}
                <div className="btn-part" >
                    <div className="readon2" onClick={openModal}>Apply Now</div>
                </div>
            </div>
            <HomeModal isOpen={isModalOpen} onClose={closeModal} status={'TeacherIn'} />
        </div>
    );
}

export default MapBottom;
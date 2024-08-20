import React, { useState } from "react";
import SectionTitle from "@/component/Common/SectionTitle";
import { HomeModal } from "@/component/Common/Modal/HomeModal";

const AbacusPlatform = (props) => {

    const { ctaClass } = props;


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className={ctaClass ? ctaClass : 'rs-cta pt-30'} >
            {/* <div className="cta-img" style={{opacity:"0.5"}}>
            </div> */}
            <div className="cta-content text-center mb-40">
                {/* Section Title Start */}
                <SectionTitle
                    sectionClass="sec-title "
                    titleClass="title family mt-40 mb-16 md-mb-10 "
                    title={<>EXPERIENCE THE WORLD’S FIRST LIVE ONLINE <span className="title-change" > ABACUS E-LEARNING PLATFORM</span> </>}
                />
                {/* Section Title End */}
                <div className="btn-part mb-40" >
                    <div className="readon2 " onClick={openModal}>BOOK A FREE DEMO CLASS</div>
                </div>
            </div>
            <HomeModal isOpen={isModalOpen} onClose={openModal} status={"bookclass"} />
        </div>
    );
}

export default AbacusPlatform;
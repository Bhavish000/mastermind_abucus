
import React, { useState } from 'react';
import SectionTitle from '@/component/Common/SectionTitle';
import { HomeModal } from '@/component/Common/Modal/HomeModal';
import Link from 'next/link';



const Cta = (props) => {
    const { sectionClass, wrapperClass, titleClass } = props;


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

   

    return (
        <div className={sectionClass ? sectionClass : 'rs-newsletter style2'} >
            <div className="container">
                <div className={wrapperClass ? wrapperClass : 'newsletter-wrap'}>
                    <div className="row y-middle text-center">
                        <div className="col-lg-12 md-mb-30">
                            <SectionTitle
                                sectionClass="sec-title mb-30 text-center"
                                titleClass={titleClass ? titleClass : 'title family '}
                                title={<>Our Team will contact you <span style={{ color: "#fd6c24" }}> with details of the nearest center.</span></>}
                            />
                            <div className="btn-part">
                                <button className="readon2" onClick={openModal}>RAISE AN INQUIRY</button>
                            </div>
                        </div>
                        <HomeModal isOpen={isModalOpen} onClose={closeModal} status={'offline'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cta;
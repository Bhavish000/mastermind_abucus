import SectionTitle from '@/component/Common/SectionTitle';
import React, { useState } from 'react';

const FranchiseVideo = () => {
    // const [isOpen, setIsOpen] = useState(false);
    // const openModal = () => setIsOpen(!isOpen);
    return (
        <div className="rs-cta main-home">
            {/* <ModalVideo channel='youtube' isOpen={isOpen} videoId='Pcccj1L_oME' onClose={() => { openModal(); }} /> */}
            <div className="partition-bg-wrap">
                <div className="container">

                    <div className="row">
                        <div className="offset-lg-6 col-lg-6 pl-70 md-pl-14 relative">
                            <SectionTitle
                                sectionClass="sec-title3 mb-40 ml-50 md-ml-0 md-mb-0 md-text-center"
                                titleClass="title  white-color mb-16"
                                title="JOIN THE LEADING ABACUS FRANCHISE PROGRAM."
                                descClass="desc white-color pr-100 md-pr-0"
                                description={<span className='fs-3 fs-md-4'> Watch How Mastermind Abacus
                                    Franchise Support Your
                                    Business Growth.</span>}
                            />
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FranchiseVideo;
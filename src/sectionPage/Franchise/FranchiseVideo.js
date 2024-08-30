import SectionTitle from '@/component/Common/SectionTitle';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const FranchiseVideo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);
    return (
        <div className="rs-cta main-home">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='fBg30a5p1SE' onClose={() => { openModal(); }} />
            <div className="partition-bg-wrap">
                <div>
                    <div className="row text-center">
                        <div className=" col-lg-6 col-md-12" style={{marginTop:'15px'}}>
                            <i className="fa-regular fa-circle-play white-color fs-1" style={{cursor:'pointer'}} onClick={() => { openModal(); }}></i>
                            <div className='img_width' style={{position:'absolute',bottom:15}}>
                                <SectionTitle
                                    sectionClass="sec-title3 mb-40 ml-50 md-ml-0 md-mb-0 md-text-center"
                                    titleClass="title  white-color "
                                    title="Watch How Mastermind Abacus Franchise Support Your Business Growth"
                                />
                            </div>
                        </div>
                        <div className=" col-lg-6 col-md-12 hidden-md pl-70 md-pl-14">
                            <SectionTitle
                                sectionClass="sec-title3 mb-40 ml-50 md-ml-0 md-mb-0 md-text-center"
                                titleClass="title  white-color "
                                title="JOIN THE LEADING ABACUS FRANCHISE PROGRAM."
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FranchiseVideo;
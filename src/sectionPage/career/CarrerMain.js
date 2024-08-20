import React, { useState } from 'react';
import bannerbg from '@/styles/img/abacus/Contact/contact.png';
import SiteBreadcrumb from '@/component/Common/Breadcumb';
import { HomeModal } from '@/component/Common/Modal/HomeModal';

const CareerMain = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('');
    const [id, setId] = useState('');

    const openModal = (status, mass, id) => {
        setStatus(status);
        setMessage(mass);
        setId(id);
        setIsModalOpen(!isModalOpen);
    };


    return (
        <React.Fragment>

            {/* SiteBreadcrumb */}
            <SiteBreadcrumb
                pageTitle=""
                pageName="Contact"
                breadcrumbsImg={bannerbg}
            />
            {/* SiteBreadcrumb */}

            {/* Contact Section Start */}
            <div className="rs-contact style3 pt-30 md-pt-80 pb-30 md-pb-80">
                <div className="container">
                    <div className='rs-contact traning-contact pt-30 pb-30'>
                        <div className="sec-title text-center mb-50 " >
                            <div className="title family black-color">CAREER <span className='title-change'>INQUIRY</span></div>

                            <div className='desc'>
                                Passionate individuals willing to achieve long term career goals, in education industry, can apply for the post of Master Trainer and Marketing Coordinator Email your resume to: <a className='  primary-color' href='mailto:info@mmtpl.com'> info@mmtpl.com</a> .
                            </div>

                        </div>
                    </div>


                </div>

                <HomeModal isOpen={isModalOpen} onClose={openModal} status={status} mess={message} id={id} />
            </div>
            {/* Contact Section End */}
        </React.Fragment>

    );
}


export default CareerMain;
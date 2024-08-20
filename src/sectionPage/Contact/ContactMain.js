import React, { useState } from 'react';
import bannerbg from '@/styles/img/abacus/Contact/contact.png';
import SiteBreadcrumb from '@/component/Common/Breadcumb';
import Link from 'next/link';
import { HomeModal } from '@/component/Common/Modal/HomeModal';



const ContactMain = () => {


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
            <div className="rs-contact style3 pt-110 md-pt-80 pb-110 md-pb-80">
                <div className="container">

                    <div className="row gutter-30">

                        <div className="col-lg-5">
                            <div className="sec-title mb-46 md-mb-10">
                                <h1 className="title family">
                                    CONTACT  <span className='title-change'>INFO</span>
                                </h1>
                                <div className="desc ">
                                    Welcome to Mastermind Abacus. We Are Glad To Have You Around.
                                </div>
                            </div>
                            <div className='address-box'>
                                <div className="address-icon">
                                    {/* <i className={iconClass}></i> */}
                                    <i class="fa-solid fa-earth-europe"></i>
                                </div>
                                <div className="address-text">
                                    <div className='title' >Website</div>
                                    <div className='website'> <a href='https://www.mastermindabacus.com/'>mastermindabacus.com</a> </div>
                                </div>
                            </div>
                            <div className='address-box'>
                                <div className="address-icon">
                                    {/* <i className={iconClass}></i> */}
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <div className="address-text">
                                    <div className='title' >Email</div>
                                    <div className='website'> <a href="mailto:info@mmtpl.com">info@mmtpl.com</a> </div>
                                </div>
                            </div>
                            <div className='address-box'>
                                <div className="address-icon">
                                    {/* <i className={iconClass}></i> */}
                                    <i class="fa-solid fa-map-location-dot"></i>
                                </div>
                                <div className="address-text">
                                    <div className='title' >Address</div>
                                    <div className='website'> <Link href="#">51, Sampat Hills, Bicholi Mardana Bypass, Indore-452016, Madhya Pradesh, India</Link> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 md-mb-30 md-order-first">
                            <div className="sec-title mb-46 md-mb-10">
                                <h1 className="title family">
                                    FIND US <span className='title-change' >ON MAP</span>
                                </h1>
                                <div className="desc ">
                                    To ease your direction towards the Corporate Office.
                                </div>
                            </div>
                            <div className="map-canvas">
                                <iframe title='#' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7361.890283802676!2d75.92568500000002!3d22.693086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaffd84d0ffa75223!2sMaster+Mind+Tutorials+Pvt.+Ltd.!5e0!3m2!1sen!2sin!4v1534152611026"></iframe>

                            </div>
                        </div>
                    </div>


                    <div className='rs-contact traning-contact pt-30 pb-30'>
                        <div className="sec-title text-center mb-50 mt-50 section-shadow" >
                            <div className="title2 black-color">We are the best Abacus Training Centre. Contact us.</div>

                            <div className="fee" >
                                <div className=" fee-btn font-bold " onClick={() => openModal('FRANCHISE', "FRANCHISE INQUIRY", '3')} style={{ backgroundColor: " #F04E72" }} >
                                    Franchisee Inquiry
                                </div>

                                <div className=" fee-btn font-bold " onClick={() => openModal('offline', null, null)} style={{ backgroundColor: " #FD6C24" }}>
                                    Student Inquiry
                                </div>
                                <div className=" fee-btn font-bold " style={{ backgroundColor: " #B5D661" }}>
                                    <Link href={'/career-inquiry'}> Career Inquiry</Link>
                                </div>
                                <div className=" fee-btn font-bold " onClick={() => openModal('FRANCHISE', "FRANCHISE INQUIRY", '3')} style={{ backgroundColor: " #74CFD7" }}>
                                    School Inquiry
                                </div>

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


export default ContactMain;
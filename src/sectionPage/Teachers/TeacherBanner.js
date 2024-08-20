import React, { useState ,useEffect } from 'react';
import dots from '@/styles/img/banner/banner-dots.png';
import teacherImg from '@/styles/img/abacus/Teacher/01_Mastermind.webp';
import { Modal } from 'react-bootstrap';
// import Teacher_inquiry_form from './Teacher_inquiry_form';
import Link from 'next/link';
import Image from 'next/image';
import Teacher_inquiry_form from './Teacher_inquiry_form';


const TeacherBanner = () => {
    const [show, setShow] = useState(false);
    // const [isModalOpen, setIsModalOpen] = useState(false);


    const closeModal = () => {
        setShow(false);
        // setstatus('')
    };

    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner teacherBanner" >
                <div className="container relative">
                    <div className="col relative">
                        <div className="row-lg-6">
                           
                            <div className="banner-content pb-14">
                                {/* <div className="desc black-color mb-25" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">Skip long distance travels for <br/>
                                learning Abacus</div> */}
                                <div className="banner-title family white-color">Explore the Future of <br/> Abacus Teacher Training:<br/>
                                 Empower Yourself with Mastermind
                                   </div>
                                <div className="banner-btn z-index-1 mt-20">
                                    <Link href="#" className="readon2 banner-style" onClick={() => setShow(true)}>APPLY NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6 teacher-image'>
                        <Image 
                        src={teacherImg}
                        alt='Mastermind Bacus'
                        />
                    </div>
                    <div className="banner-dots-shape">
                       
                            <Image
                                src={dots}
                                alt="Mastermind Abcaus"
                            />
                    </div>
                </div>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    
                    <Teacher_inquiry_form onClose={closeModal} />
                </Modal>
            </div>
            {/* <!-- banner section end --> */}
        </React.Fragment>
    );
}

export default TeacherBanner;
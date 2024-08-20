import React, { useState } from 'react';
// import leftShapeImg from '../../assets/img/banner/left-shape.png';
// import rightShapeImg from '../../assets/img/banner/right-shape.png';
// import bottomShapeImg from '../../assets/img/banner/bottom-shape.png';
// import bannerImg from '../../assets/img/banner/5.png';
// import bannerImg from '../../assets/img/abacus/shcool/start_abacus_school.webp'
// import { Modal } from 'react-bootstrap';
// import BookclassModal from '../../pages/Student Landing page/BookclassModal';
import { HomeModal } from '../Common/Modal/HomeModal';
import Link from 'next/link';

const BannerWhatAbacus = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner whatAbacus">
                <div className="container relative">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="banner-content">

                            <div className="sub-title">Abacus is a 3000 years old <br/>
                            Ancient calculating Device</div>
                                {/* <div className="sub-title" style={{color : "#F58634"}}>Make Your Child</div> */}
                                <h4 className="banner-title family" style={{fontWeight:"800" , lineHeight:"40px"}} >THAT TRAINS YOUR CHILD</h4>
                                <div className="sub-title">to perform Mental Math <br/>
                                with great speed and accuracy.</div>

                                <div className="banner-btn">
                                    <Link href="#" onClick={openModal} className="readon2 banner-style" style={{backgroundColor:"#F58634" }}>Book A Free Demo Class</Link>
                                </div>
                                {/* <div className="sub-title" > Offline / Online Classes Available </div> */}

                                <div className="left-shape hidden-md animated pulse infinite">
                                    {/* <img src={leftShapeImg} alt="" /> */}
                                </div>
                               
                                
                            </div>
                            
                        </div>
                                              
                    </div>

                    
                </div>
              
                <HomeModal  isOpen={isModalOpen} onClose={openModal} />
                
            </div>
            {/* <!-- banner section end --> */}
        </React.Fragment>
    );
}

export default BannerWhatAbacus;
import React, { useState } from 'react';
import bannerImg from '@/styles/img/abacus/school/start_abacus_school.webp'
import { HomeModal } from '../Common/Modal/HomeModal';
import Image from 'next/image';
// import { Image } from 'react-bootstrap';

const BannerShcool = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner schoolBanner ">
                <div className="container relative">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="banner-content">
                                {/* <div className="sub-title" style={{color : "#F58634"}}>Make Your Child</div> */}
                                <div className="banner-title family"  ><span style={{color:"#fd6c24"}}>START ABACUS CLASSES </span><br/>
                                IN YOUR SCHOOL</div>
                                <div className="sub-title">A Budget-Friendly Abacus Program 
                                    <br/> Exclusively Designed For Your School</div>

                                <div className="banner-btn" onClick={openModal} style={{cursor:'pointer' }}>
                                    <div  className="readon2 banner-style " >INQUIRE NOW</div>
                                </div>
                                {/* <div className="sub-title" > Offline / Online Classes Available </div> */}

                                <div className="left-shape hidden-md animated pulse infinite">
                                    {/* <img src={leftShapeImg} alt="" /> */}
                                </div>
                               
                                
                            </div>
                            
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="banner-img">
                                <Image  src={bannerImg}  alt="Banner Image" />
                            </div>
                        </div>
                        
                    </div>

                    
                </div>      
                <HomeModal  isOpen={isModalOpen} onClose={openModal} status={'FRANCHISE'} name={'INQUIRY NOW'}  mess={"SCHOOL INQUIRY"}  id={'25'} />         
            </div>
            {/* <!-- banner section end --> */}
        </React.Fragment>
    );
}

export default BannerShcool;
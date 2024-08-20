import Image from 'next/image';
import React, { useState } from 'react';
import { HomeModal } from '../Common/Modal/HomeModal';


const BannerStyleFour = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    const videoContainerStyle = {
        position: 'relative',
        // width: '600px'
    };

    const videoStyle = {
        display: 'block',
        width: '100%'
    };

    const overlayStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        pointerEvents: 'none' // Allows click-through
    };

    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner franchiseBanner" >
                <div>
                <div style={videoContainerStyle}>
                    <video  muted loop id="myVideo" style={videoStyle}  autoPlay={true}>
                    <source src="https://www.mastermindabacus.com/assets/new/images/video/Abacus.mp4" type="video/mp4" /> </video>
                    <div style={overlayStyle}></div>
                </div>
                </div>
                <div className="container relative">
                    <div className="row relative">
                        <div className="col-lg-6">
                            <div className="banner-content pb-14">

                                <div className="banner-title family white-color" style={{ fontWeight: "800", textShadow:"0px 1px 1px black" }}>START YOUR OWN ABACUS <br />  LEARNING
                                    CENTER</div>

                                <div className="desc white-color mb-25" style={{ marginTop: "-10px"}}>WITH THREE DIMENSIONAL <br />
                                    EARNING OPPORTUNITIES
                                </div>

                                {/* <div className="pera white-color" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600" style={{marginTop :" 20px"}}>Mastermind Abacus boosts a child's brain-power and enhances their mathematical <br /> skills extraordinarily, giving a positive flip in academic success. Take a first step <br /> towards serving the children of your society.
                                </div> */}
                                <div className="banner-btn z-index-1" >
                                    <div className="readon2 banner-style" onClick={openModal}  style={{cursor:'pointer'}}>Apply Now</div>
                                </div>
                            </div>
                            {/* <div className="banner-circle-shape">
                                    <Image
                                        className="rotateme"
                                        src={circle}
                                        alt="Mastermind Abacus"
                                    />
                            </div> */}
                        </div>
                    </div>
                    {/* <div className="banner-dots-shape">
                      
                            <Image
                                src={dots}
                                alt="Mastermind Abacus"
                            />
                        
                    </div> */}
                </div>
                <HomeModal  isOpen={isModalOpen} onClose={openModal} status={'FRANCHISE'}  mess={"FRANCHISE INQUIRY"}  id={'3'}  />
            </div>
            {/* <!-- banner section end --> */}
        </React.Fragment>
    );
}

export default BannerStyleFour;
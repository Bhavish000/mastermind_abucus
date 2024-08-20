import React, { useState } from 'react';
import bannerImg from '@/styles/img/abacus/lingo-bingo/Kids.png'
import shapeImg1 from '@/styles/img/banner/home12/dotted-shape.png';
import shapeImg2 from '@/styles/img/banner/home12/intro-box.png';
import { HomeModal } from '../Common/Modal/HomeModal';
import Image from 'next/image';

const BannerStyleEight = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner style10" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 pl-60 relative order-last">

                        </div>
                        <div className="col-lg-7 pr-0">
                            <div className="banner-content">
                                <h4 className="sl-title family" >A GAME BASED <br />
                                    ABACUS PROGRAM</h4>
                                <div className="sl-sub-title">To Develop Number Sense <br />
                                    In Little Ones</div>
                                <div className="banner-btn">
                                    <div className="sl-sub-title">For 4 to 6 years kids</div>
                                </div>

                                <div className="banner-btn z-index-1 mt-10" >
                                    <div  className="readon2 banner-style" onClick={openModal} >Book A Free Demo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-intro-box">
                    <div className="shape-img">
                        <Image className="up-down-new" src={shapeImg1} alt="Mastermind Abacus" />
                    </div>
                    <div className="intro-img">
                        <Image className="spine2" src={shapeImg2} alt="Mastermind Abacus" />
                        <div className="img-part">
                            <Image className="up-down-new" src={bannerImg} alt="Mastermind Abacus" />
                        </div>
                    </div>
                </div>
                <HomeModal isOpen={isModalOpen} onClose={openModal} />

            </div>
            {/* <!-- banner section end --> */}
        </React.Fragment>
    );
}

export default BannerStyleEight;
import Image from 'next/image'
import React, { useState } from 'react'
import bannerImg from '@/styles/img/abacus/home_banner.53abba9b.9753e9f0-min.png'
import { HomeModal } from '../Common/Modal/HomeModal';
// import { HomeModal } from '../Common/Modal/HomeModal';

function HomeBanner({Referrer}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
  return (
    <div>
      <div className="rs-banner style5  md-pr-0"  >
                <div className="container relative">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="banner-content">
                                <div className="sub-title title-style" >Make Your Child</div>
                                <div className="banner-title" > <span className='banner-text' >MATH</span> GENIUS</div>
                                <div className="sub-title">With Mastermind Abacus</div>

                                <div className="banner-btn">
                                    <button onClick={openModal} className="readon2 banner-style" >Book A Free Demo Class</button>
                                </div>
                                <div className="sub-title2" > Offline / Online Classes Available </div>


                            </div>

                        </div>
                        <div className="col-lg-6 col-md-12 bannerpart-img">
                            <div className="banner-img">
                                {/* <LazyLoad height={200} offset={100}> */}
                                <Image src={bannerImg} alt="Banner Image" />
                                {/* </LazyLoad> */}
                            </div>
                        </div>

                    </div>


                </div>
                <HomeModal isOpen={isModalOpen} onClose={closeModal} Referrer={Referrer}/>

            </div>
    </div>
  )
}

export default HomeBanner

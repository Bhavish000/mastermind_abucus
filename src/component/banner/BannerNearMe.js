import React, { useState } from 'react';
// import bgImg from '@/styles/img/abacus/NearClasses/abacus-classes-near-me.webp'
import { HomeModal } from '../Common/Modal/HomeModal';
import Link from 'next/link';
import Image from 'next/image';






const BannerNearMe = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

    // useEffect(() => {
    //     AOS.init();
    // })

    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner style4" >
                <div className="container relative">
                    <div className="row relative">
                        <div className="col-lg-6">
                            <div className="banner-content pb-14">

                                <div className="desc black-color mb-35"  style={{ marginTop: "-10px" }}>Skip long distance travels for <br/>
                                    learning Abacus
                                </div>
                                <div className="banner-title">FIND <br/>
                                MASTERMIND ABACUS CLASSES <br/> IN YOUR VICINITY</div>

                                <div className="banner-btn z-index-1"  style={{ marginTop: "20px" }}>
                                    <Link href='#' className="readon2 banner-style" onClick={openModal}>RAISE AN INQUIRY</Link>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    
                </div>
            </div>
            <HomeModal isOpen={isModalOpen} onClose={closeModal} status={'offline'}/>
        </React.Fragment>
    );
}

export default BannerNearMe;
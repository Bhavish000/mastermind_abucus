import { HomeModal } from '@/component/Common/Modal/HomeModal';
import SectionTitle from '@/component/Common/SectionTitle';
import Link from 'next/link';
import { useState } from 'react';

const WhatNext = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
     const [ButtonStatus, setButtonStatus] = useState('')
	const openModal = () => {
		setIsModalOpen(!isModalOpen);
	};
    const HandleClickButton = (value) => {
          setButtonStatus(value);
          setIsModalOpen(!isModalOpen);
    }

    return (
        <div className="rs-services style2 style4 pt-10 md-pt-30">
            <div className="container">

                <div className=" mt-30 sm-mb-30 mb-20 text-center">
                    <SectionTitle
                        sectionClass="sec-title text-center mb-50 md-mb-30"
                        bottomSubTitleClass="sub-title mb-0"
                        titleClass="title family mb-10"
                        title={<>MAKE YOUR CHOICE, <span className='title-change' >JOIN OFFLINE OR ONLINE ABACUS CLASS</span></>}
                    />
                </div>
                <div className="row ">
                    <div className="col-lg-6 md-mb-30 service-item servic-boxes ">
                    
                        <div className="content-part">

                            <h4 className="title">ONLINE ABACUS CLASSES</h4>
                            <p className="desc"> If you are on our website looking for <Link href="/" className="primary-color"> Abacus Classes </Link>  for your child, please Book a Free Demo for a firsthand experience.  </p>
                            <div className="banner-btn">
                                <div onClick={() => HandleClickButton('bookclass')} className="readon2 banner-style banner-change popup-videos" >Book A Free Demo</div>
                            </div> 
                            <p className="desc"> For ONLINE Classes</p>

                        </div>


                    </div>
                    <div className="col-lg-6 md-mb-30 service-item">
                        <div className="content-part">
                            <h4 className="title">ABACUS FRANCHISE</h4>
                            <p className="desc"> But, if your are here looking for business opportunity as an <Link href='/franchisee_inquiry' className="primary-color">  Abacus Franchise, </Link> please fill an inquiry form, we shall contact you.</p>
                            <div className="banner-btn">
                                <div onClick={() => HandleClickButton('FRANCHISE')} className="readon2 banner-style banner-change popup-videos" >Inquire Now</div>
                            </div>

                            <p className="desc">For Online Classes</p>

                        </div>
                    </div>
                </div>
            </div>
            <HomeModal isOpen={isModalOpen} onClose={openModal} status={ButtonStatus}/>
        </div>
    );
}

export default WhatNext;
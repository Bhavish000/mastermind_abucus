import { HomeModal } from '@/component/Common/Modal/HomeModal';
import SectionTitle from '@/component/Common/SectionTitle';
import Link from 'next/link';
import { useState } from 'react';


const OnlineClassSection = () => {
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
        <div className="rs-services style2 style4 pt-10 pb-80 md-pt-30 back2-color">
            <div className="container">

                <div className=" mt-30 sm-mb-30 mb-20 text-center">
                    <SectionTitle
                        sectionClass="sec-title text-center mb-30 md-mb-30"
                        bottomSubTitleClass="sub-title mb-0"
                        titleClass="title family"
                        title={<>MAKE YOUR CHOICE, <span className='title-change' >JOIN OFFLINE OR ONLINE</span> ABACUS CLASS</>}
                    />
                </div>
                <div className="row ">
                    <div className="col-lg-6 md-mb-30 service-item servic-boxes ">
                    
                        <div className="content-part back-color" >

                            <h4 className="title">OFFLINE CLASSES</h4>
                            <p className="desc">With over 2000 Abacus centers globally, we&apos;re easy to find. For offline classes near you, inquire now, and we&apos;ll provide details of the nearest center.</p>
                            <div className="banner-btn">
                                <div onClick={() => HandleClickButton('offline')} className="readon2 banner-style popup-videos" >RAISE AN INQUIRY</div>
                            </div>
                            <p className="desc"> For Offline Classes</p>

                        </div>


                    </div>
                    <div className="col-lg-6 md-mb-30 service-item">
                        <div className="content-part back-color" >
                            <h4 className="title">ONLINE CLASSES</h4>
                            <p className="desc "> For <Link href='/abacus-online-classes' className="primary-color" > Online Abacus Classes </Link> reach the World&apos;s finest Abacus E-Learning Platform of Mastermind Abacus. Book a free demo class and get a firsthand experience.</p>
                            <div className="banner-btn">
                                <div onClick={() => HandleClickButton('bookclass')} className="readon2 banner-style popup-videos">BOOK A FREE DEMO CLASS</div>
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

export default OnlineClassSection;
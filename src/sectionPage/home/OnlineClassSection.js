import { HomeModal } from '@/component/Common/Modal/HomeModal';
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
        <div className="rs-services style2 style4 pt-0 md-pt-30">
            <div className="container">

                <div className=" mt-30 sm-mb-30 mb-0 text-center">
                    
                <div className="sec-title  text-center mb-20 md-mb-30">
                    <h3 className="title  family mb-14 sm-mb-6">
                    AT MASTERMIND ABACUS INSTITUTE, <span className='title-change' >YOU HAVE THE FLEXIBILITY TO JOIN ABACUS CLASSES EITHER ONLINE OR OFFLINE.</span>
                    </h3>
                </div>
                </div>
                <div className="row ">
                    <div className="col-lg-6 md-mb-30 service-item servic-boxes ">
                        <div className="content-part">

                            <h4 className="title">OFFLINE CLASSES</h4>
                            <p className="desc"> If you are looking for Offline <span className='font-bold'>Abacus classes</span> near you, raise an inquiry. Mastermind has over 2000 plus Abacus centers Globally. We shall contact you with the details of our nearest Abacus center.</p>
                            <div className="banner-btn">
                                <button onClick={() => HandleClickButton('offline')} className="readon2 banner-style">RAISE AN INQURIY</button>
                            </div>
                            <p className="desc"> For Offline Classes</p>

                        </div>


                    </div>
                    <div className="col-lg-6 md-mb-30 service-item  ">
                       
                        <div className="content-part">

                            <h4 className="title">ONLINE CLASSES</h4>
                            <p className="desc"> If you are looking for an <Link href={'/abacus-online-classes'} className='primary-color' >Abacus Online classes</Link> , book a free demo class for a firsthand experience at the Worlds finest Abacus E-Learning Platform of <br/> Mastermind Abacus.</p>
                            <div className="banner-btn">
                                <button onClick={() => HandleClickButton('bookclass')} className="readon2 banner-style" >BOOK A FREE DEMO CLASS</button>
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
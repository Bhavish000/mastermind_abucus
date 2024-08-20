import { useState } from "react";
import Link from "next/link";
import { HomeModal } from "@/component/Common/Modal/HomeModal";
// import  HomeModal  from "@/component/Common/Modal/HomeModal";


function TopHeader(props) {
    const { topBarClass, emailAddress, phoneNumber, Location } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(!isModalOpen);
	};

    const handleClick = () => {
        window.location.href = 'https://erp.mmtplonline.com/';
      };
  return (
    <div className='topbar-area dark-parimary-bg'>
            <div className="container">
                <div className="row y-middle">
                    <div className="col-md-3" >
                        <ul className="topbar-contact mb-0 pl-0">
                            {emailAddress ? 
                                <li>
                                    <i className="fa fa-envelope"></i>
                                    <a href={'mailto:' + "info@mmtpl.com"} className="fs-6">info@mmtpl.com</a>
                                    {/* <a href="">info@mmtpl.com</a> */}

                                </li> : ""
                            }
                            {/* {Location ? 
                                <li>
                                    <i className="flaticon-location"></i>
                                    {Location}
                                </li> : ""
                            } */}
                        </ul>
                    </div>
                    <div className="col-md-6 " >
                        <ul className="topbar-contact row-gap-3 mb-0 ml-5">
                            {phoneNumber ? 
                                <li>
                                    {/* <i className="flaticon-call" style={{}}></i> */}
                                    <button className='franchise-btn' 
                                    onClick={openModal} 
                                    >FRANCHISE INQUIRY
                                    </button>
                                </li> : ""
                            }
                            {/* {Location ? 
                                <li>
                                    <i className="flaticon-location"></i>
                                    {Location}
                                </li> : ""
                            } */}
                        </ul> 
                    </div>
                   <div className='row col-md-3 icon-prt text-right float-end ml-5 mb-0' >
                   <div className="col-md-6 text-center md-text-left " >
                            <ul className="footer-social pl-0 d-flex  justify-content-evenly title-change mb-0 " >
                                <li>
                                    <a href="https://www.facebook.com/mastermindabacusindia" target="_blank"  rel="noreferrer" aria-label="Go on facebook" >
                                        <i className="fa fa-facebook-f secondary-color" ></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://x.com/mmabacusonline" target='_blank'  rel="noreferrer" aria-label="Go on twitter">
                                        <i className="fa fa-x-twitter secondary-color"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/mmabacusonline/" target='_blank'  rel="noreferrer" aria-label="Go on instagram">
                                        <i className="fa fa-instagram secondary-color" ></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/user/mastermindabacus" target='_blank'  rel="noreferrer" aria-label="Go on youtube">
                                        <i className="fa fa-youtube secondary-color" ></i>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    <div className="col-md-5 text-right ml-10">
                        <ul className="topbar-right mb-0 pl-0">
                            <li className="login-register title-change mb-0"  >
                                <i className="fa fa-sign-in" ></i>
                                <Link href={'https://erp.mmtplonline.com/'} target="_blank"  >Login</Link>
                            </li>
                            {/* <li className="btn-part">
                                <Link to="/contact" className="apply-btn">Apply Now</Link>
                            </li> */}
                        </ul>
                    </div>
                   </div>
                </div>
            </div>
            <HomeModal isOpen={isModalOpen} onClose={openModal} status={'FRANCHISE'}/>
        </div>
  )
}

export default TopHeader
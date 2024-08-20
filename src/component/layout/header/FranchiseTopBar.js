import { HomeModal } from '@/component/Common/Modal/HomeModal';
import Link from 'next/link';
import React, { useState } from 'react';

const FranchiseTopBar = (props) => {
	const { topBarClass, emailAddress} = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(!isModalOpen);
	};
    return (
        <div className={topBarClass ? topBarClass : "topbar-area home8-topbar hidden-md rs-footer"}>
            <div className="container">
                <div className="row y-middle">
                    <div className="col-md-8" >
                        <ul className="topbar-contact row-gap-3 pl-0 mb-0">
                            {emailAddress ? 
                                <li>
                                    <i className="flaticon-email"></i>
                                    <Link href={'mailto:' + "info@mmtpl.com"}>info@mmtpl.com</Link>
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
                   <div className='row col-md-4 icon-prt text-right float-end ml-5 mb-0' >
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
                    <div className="col-md-6 text-right">
                        <ul className="topbar-right mb-0 pl-0">
                            <li className="login-register title-change mb-0"  >
                                <i className="fa fa-sign-in" ></i>
                                <Link href="https://erp.mmtplonline.com/login" target='_blank' rel="noreferrer"  style={{color:'#FD6C24'}}>Login</Link>

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
    );
}

export default FranchiseTopBar;
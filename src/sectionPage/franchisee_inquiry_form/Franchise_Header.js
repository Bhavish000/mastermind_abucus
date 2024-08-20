import React, { useState } from 'react';
import abacusLogo from '@/styles/img/mastermindabacus-logo.png'
import Link from 'next/link';
import Image from 'next/image';


const Franchise_Header = (props) => {
    const { headerClass, headerFullWidth, headerNormalLogo, headerStickyLogo } = props;
    const [menuOpen, setMenuOpen] = useState(false)



    return (
        <React.Fragment>
            <div className={headerClass ? headerClass : 'full-width-header home8-style4 main-home'}>
                <header id="rs-header" className='rs-header'>

                    <div className={ 'menu-area menu-sticky'}>
                        <div className={headerFullWidth ? 'container-fluid' : 'container'}>
                            <div className="row y-middle">
                                <div className="col-lg-10">
                                    <div className="logo-cat-wrap ">
                                        <div className="logo-part pr-90">
                                            <Link href="/">
                                                <Image className="normal-logo" width={150} src={headerNormalLogo ? abacusLogo : abacusLogo} alt="Mastermind Abacus" />
                                                <Image className="sticky-logo" width={150} src={headerStickyLogo ? abacusLogo : abacusLogo} alt="Mastermind Abacus" />
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-2 text-right py-4" >
                                    <ul className="footer-social d-flex " style={{ color: "#FD6C24" , justifyContent:"flex-end" }}>
                                        <li className='mx-3'>
                                            <a href="https://www.facebook.com/mastermindabacusindia" target="_blank" rel="noreferrer">
                                                <i className="fa fa-facebook-f" style={{ color: "gray" }}></i>
                                            </a>
                                        </li>
                                        <li className='mx-2'>
                                            <a href="https://x.com/mmabacusonline" target='_blank'rel="noreferrer">
                                                <i className="fa fa-twitter" style={{ color: "gray" }}></i>
                                            </a>
                                        </li>
                                        <li className='mx-3'>
                                            <a href="https://www.instagram.com/mmabacusonline/" target='_blank' rel="noreferrer">
                                                <i className="fa fa-instagram" style={{ color: "gray" }}></i>
                                            </a>
                                        </li>
                                        <li className='mx-2'>
                                            <a href="https://www.youtube.com/user/mastermindabacus" target='_blank' rel="noreferrer">
                                                <i className="fa fa-youtube" style={{ color: "gray" }}></i>
                                            </a>
                                        </li>


                                    </ul>
                                    <ul className='my-1'>
                                        <li className='d-flex' style={{justifyContent:"flex-end"}}>
                                            <i className="flaticon-email"></i>
                                            <a  href={`'mailto:' + "info@mmtpl.com"`} style={{color:'gray',paddingLeft:5}}>   info@mmtpl.com</a>
                                            {/* <a href="">info@mmtpl.com</a> */}

                                        </li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>
                </header>
              
            </div>
        </React.Fragment>
    );
}

export default Franchise_Header;
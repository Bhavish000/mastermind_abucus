import React from 'react';
import circle from '@/styles/img/abacus/submitform/Page-Image.png';
import abacusLogo from '@/styles/img/mastermindabacus-logo.png'
// import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const Successfully = ({click}) => {
    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner submit ">
                <div className="container relative" >
                    <div className=" text-cneter relative">
                        <div className="row">
                            <div className="col-lg-7 col-12 banner-content pb-14">
                                <div className="desc black-color mb-25 font-bold  " style={{ marginTop: "-10px" }}>
                                    <Image
                                        src={abacusLogo}
                                        alt="Mastermind Abacus"
                                        className='mb-60  md-mb-30'
                                    />
                                    <h1 className='mb-20'style={{fontWeight:'900',fontSize:'63px'}}> THANK YOU !</h1>
                                    <p> <span className='mb-20'>FOR SUBMITTING INQUIRY</span><br />
                                        YOU CAN NOW EXPLORE YOUR DASHBOARD .</p>
                                </div>
                                {/* <button onClick={click}></button> */}


                                <div className="banner-btn z-index-1 "style={{ marginTop: "40px" }}>
                                    <Link href="#" className="banner-btn2 banner-style text-justify" to="/" onClick={click}>Click Here</Link>
                                </div>
                            </div>
                            <div className=" col-lg-5 col-12 banner-circle-shape">
                                {/* <Tilty> */}
                                <Image
                                    className="float-end"
                                    src={circle}
                                    alt="Mastermind Abacus"
                                />
                                {/* </Tilty> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- banner section end --> */}
        </React.Fragment>
    );
}

export default Successfully;
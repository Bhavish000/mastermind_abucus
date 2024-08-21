import React from 'react';
import { useEffect } from 'react';
import circle from '@/styles/img/abacus/submitform/Page-Image.png';
import abacusLogo from '@/styles/img/mastermindabacus-logo.png'
// import { useRouter } from 'next/router';
import Image from 'next/image';
import { useInquiry } from '@/context/inquiryContext';
import Link from 'next/link';

const Successfully = () => {

    const { data } = useInquiry();
    console.log('data ' + data)

    const onclick = () => {
        if(data){
            window.location.replace(data);
        }
    }
    useEffect(() => {
        if (data) {
            // Wait for 3 seconds before redirecting
            const timer = setTimeout(() => {
                window.location.replace(data);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [data]);

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
                                        alt='master mind'
                                        className='mb-60  md-mb-30'
                                    />
                                    <h1 className='mb-20'> THANK you !</h1>
                                    <p> <span className='mb-20'>FOR SUBMITTING INQUIRY</span><br />
                                        YOU CAN NOW EXPLORE YOUR DASHBOARD .</p>
                                </div>
                                {/* <button onClick={click}></button> */}


                                <div className="banner-btn z-index-1 "style={{ marginTop: "40px" }}>
                                    <Link href="#" className="banner-btn2 banner-style text-justify" to="/" onClick={onclick}>Click Here</Link>
                                </div>
                            </div>
                            <div className=" col-lg-5 col-12 banner-circle-shape">
                                {/* <Tilty> */}
                                <Image
                                    className="float-end"
                                    src={circle}
                                    alt="master mind"
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
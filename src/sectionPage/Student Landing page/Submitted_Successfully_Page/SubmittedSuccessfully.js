import React from 'react';
import { useEffect } from 'react';
// import Tilty from 'react-tilty';
// import AOS from 'aos';
import circle from '@/styles/img/banner/banner-circle.png';
import dots from '@/styles/img/banner/banner-dots.png';
import bgImg from '@/styles/img/abacus/fran_bnr.png';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useInquiry } from '@/context/inquiryContext';
// import { useLocation } from 'react-router-dom';

const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    'background-size': 'cover',
    'background-position': 'center',
    'height': '71vh',
    'display': 'grid',
    'align-items': 'center',
    "position": 'reletive',
}

const Successfully = () => {

    const { data } = useInquiry();
    console.log('data ' + data)
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
            <div id="rs-banner" className="rs-banner style4 " style={bgStyle}>
                <div className="container relative" >
                    <div className=" text-cneter relative">
                        <div className="">
                            <div className="banner-content pb-14">
                                <div className="desc black-color mb-25 font-bold  "  style={{ marginTop: "-10px", textShadow:"0px 1px 1px #fd6c24" }}>
                                    THANKS FOR SUBMITTING INQUIRY.<br />
                                    YOU CAN EXPLORE YOUR DASHBOARD NOW.<br />
                                    WE&apos;LL CONTACT YOU SOON FOR FURTHER DETAILS
                                </div>
                                {/* <button onClick={click}></button> */}


                                {/* <div className="banner-btn z-index-1" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600" style={{ marginTop: "20px" }}>
                                    <Link  className="readon2 banner-style" to="/abacus-franchise">Back to Home</Link>
                                </div> */}
                            </div>
                            <div className="banner-circle-shape">
                                {/* <Tilty> */}
                                    <Image
                                        className="rotateme"
                                        src={circle}
                                        alt=""
                                    />
                                {/* </Tilty> */}
                            </div>
                        </div>
                    </div>
                    <div className="banner-dots-shape">
                        {/* <Tilty> */}
                            <Image
                                src={dots}
                                alt=""
                            />
                        {/* </Tilty> */}
                    </div>
                </div>
            </div>
            {/* <!-- banner section end --> */}
        </React.Fragment>
    );
}

export default Successfully;
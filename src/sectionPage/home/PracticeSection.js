import React from 'react';
// import { Link } from 'react-router-dom';

// import SectionTitle from '../../components/Common/SectionTitle';

// About Image
// import AboutImage from '../../assets/img/about/home5/about-main.png';
import AboutImage from '@/styles/img/abacus/Laptop.png'
import Link from 'next/link';
import Image from 'next/image';
// import circleShape from '../../assets/img/about/home5/about-circle-bg.png';
// import smallCircleShape from '../../assets/img/about/home5/small-circle-shape.png';
// import deepShape from '../../assets/img/about/home5/about-deep-bg.png';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';



function PracticeSection () {

    return (
        <div id="rs-about" className="rs-about practiceSection-style4 pt-100 pb-100 md-pt-40 md-pb-40">
            <div className="container">
                <div className="row justify-content-between">

                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="content-part">

                                <h2 className="title family white-color"  >Get Unlimited Free <br/> Abacus Worksheets
                                {/* <span></span> */}
                                 </h2> 
                                {/* <hr style={{width:"200px", height:"2px", color: " white", textAlign:"center"}}/> */}
                                <h2 className="title family title-shadow banner-change" > Practice to Excel </h2>


                                {/* <p className="desc"> If you are looking for Offline Abacus classes near you, raise an inquiry. Mastermind has over 2000 plus Abacus centers Globally. We shall contact you with the details of our nearest Abacus center.</p> */}
                                <div className="banner-btn title md-mt-40 aling-items-center" >
                                    <Link href="/abacus-worksheet-generator" className="readon2 banner-style" >Visit Worksheet Generator</Link>
                                </div>
                                {/* <p className="desc"> For Offline Classes</p> */}

                            </div>
                           
                        </div>
                    </div>

                    <div className="col-lg-5 md-mb-50">
                        <div className="img-part">
                            <Image className="about-main" src={AboutImage} alt="About Image" />
                            {/* <img className="circle-bg shape" src={circleShape} alt="About Image" />
                            <img className="small-circle shape animated pulse infinite" src={smallCircleShape} alt="About Image" />
                            <img className="deep-bg shape" src={deepShape} alt="About Image" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PracticeSection;
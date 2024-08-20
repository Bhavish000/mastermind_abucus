import React from 'react';
import bannerImg from '@/styles/img/abacus/about/abt_ban.png'
import Image from 'next/image';

const BannerAbout = () => {

    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner BannerAbout ">
                <div className="container relative">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="banner-content text-center">
                                <h2 className="title family title-change mb-20" >WE MAKE WINNERS <br />
                                    WHO LEAD</h2>
                                <div className="sub-title">A Complete Brain Development Program <br />
                                    On A Revolutionary Live Online <br />
                                    Abacus Learning Platform</div>

                                <div className="left-shape hidden-md animated pulse infinite">
                                </div>


                            </div>

                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="banner-img">
                                <Image src={bannerImg} alt="Banner Image" />
                            </div>
                        </div>

                    </div>


                </div>
                <div className="bottom-shape">
                </div>
               
            </div>
        </React.Fragment>
    );
}

export default BannerAbout;
import React from "react";
import mainImage from '@/styles/img/abacus/about/Flag-Full.png';
import SectionTitle from "@/component/Common/SectionTitle";
import Image from "next/image";


function Presence() {

    return (
        <div id="rs-about" className="rs-about style1 pt-50 md-pt-10 md-pb-10">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                    
                        <SectionTitle
                            sectionClass="sec-title mb-6 md-mb-0"
                            subtitleClass="sub-title primary"
                            // subtitle="About Us"
                            titleClass="title family text-center"
                            title={<>
                               OUR <span className="title-change" >PRESENCE</span></>}
                            descClass="desc pr-10"
                            
                        />
                    </div>
                    <div className="col-lg-12 pr-30 p-5 md-mb-0">
                        <div className="img-part" >
                            
                                <Image
                                style={{boxShadow:"none"}}
                                    src={mainImage}
                                    alt="Main Image"
                                />
                            
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Presence;
import React from "react";
import mainImage from '@/styles/img/abacus/school/advantages-img.webp';
import SectionTitle from "@/component/Common/SectionTitle";
import Image from "next/image";

function OfflineAbacus() {

  

    return (
        <div id="rs-about" className="rs-about style1 pt-50 pb-50 md-pt-70 md-pb-20">
            <div className="container p-4 rounded section-shadow back-color" >

            <SectionTitle
                    sectionClass="sec-title mb-60 text-center md-mb-30"
                    // subtitleClass="sub-title primary"
                    // subtitle="Subject Categories"
                    titleClass="title family mb-0"
                    title={<>MASTERMIND ABACUS <span className="title-change" >SCHOOL PROPOSAL</span>
                    </>}
                />
                <div className="row align-items-center">


                <div className="col-lg-6 order-last aling-justify"  >
                        {/* Section Title Start */}
                        <SectionTitle
                            sectionClass="sec-title mb-20"
                            subtitleClass="sub-title primary"
                            // subtitle="About Us"
                            titleClass="title family"
                            title={<span className="title-change" >OFFLINE CLASSES</span>}
                            descClass="desc pr-10"
                            description={< ><span className="font-bold">Teachers Training to the nominated teachers by the School</span>.<br/>
                                1. Only Teachers training fee applicable.<br/>
                                2. Provide Teachers Training Kit & Students educational tools and books.<br/>
                                3. Certification for Teachers & Students at every level.<br/>
                                4. Students App to registered students.<br/>
                                5. Access to Student management and Training portal<br/>
                                6. Unlimited access to practice sheets<br/>
                                7. The school can decide the fee /or offer as Value addition..</>}
                            
                        />


            
                    </div>

                    <div className="col-lg-6 pr-30 md-pr-10  md-mb-20">
                        <div className="img-part">
                           
                                <Image
                                className="rounded"
                                    src={mainImage}
                                    alt="Mastermind Abacus"
                                />
                            
                        </div>
                    </div>
                    
                </div>

             

            </div>
        </div>
    );
}

export default OfflineAbacus;
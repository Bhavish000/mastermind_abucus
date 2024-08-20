import React from "react";
import mainImage from '@/styles/img/abacus/worksheet/model-img-min.webp';
import SectionTitle from "@/component/Common/SectionTitle";
import Link from "next/link";
import Image from "next/image";


function AbacusTrainer() {

    return (
        <div id="rs-about" className="rs-about style1 pt-50 md-pt-70 md-pb-20 pb-30" >
            <div className="container">

            <SectionTitle
                    sectionClass="sec-title mb-20 text-center md-mb-30"
                    // subtitleClass="sub-title primary"
                    // subtitle="Subject Categories"
                    titleClass="title family mb-0"
                    title={<>ABACUS TRAINER -  <span className="title-change" >DOWNLOAD THE FREE ABACUS WORKSHEET</span></>}
                />
                <div className="row align-items-center" >


                <div className="col-lg-8 ">
                        {/* Section Title Start */}
                        <SectionTitle
                            sectionClass="sec-title mb-6"
                            subtitleClass="sub-title primary"
                            // subtitle="About Us"
                            // titleClass="title"
                            // title={<>OFFLINE CLASSES</>}
                            descClass="desc pr-10"
                            description={<>As an Abacus Trainer, you regularly need Abacus worksheets. Your objective is to help the children to practice.
                                   <br/>
                                Mastermind <span className="font-bold" >Abacus Worksheet Generator</span> is a tool from which both an Abacus Trainer and an <Link href={'/abacus-franchise'} className="primary-color font-bold">Abacus Franchise</Link> can download unlimited worksheets for free. There are absolutely no restrictions.<br/>
                                
                                You choose <span className="font-bold">Abacus practice sheets</span> of different levels of difficulty. These are available for all 8 levels of the Abacus course.<br/>
                                
                                The abacus question papers are customized. You can selectively download abacus addition, subtraction & multiplication worksheets. 2 digit abacus worksheets, 3 digit abacus worksheets, 4 digit abacus worksheets, and 5 digit abacus worksheets.<br/>
                                
                                You can select 25 to 100 sums, rows from 2 to 25 and digits from 1 to 5 and download the Abacus practice sheets as per your students&apos; needs.<br/>
                                
                                You can download Abacus Worksheets for beginners, Abacus Worksheets for Level 1, Abacus Level 2 Worksheets, and Abacus practice sheets right up to Abacus level 8.</>}
                           
                        />
                    </div>





                    <div className="col-lg-4 pr-30 hidden-md md-mb-20 order-last">
                        <div className="img-part">
                            
                                <Image
                                    src={mainImage}
                                    alt="Main Image"
                                />
                            
                        </div>
                    </div>
                    
                </div>

                <SectionTitle
                    sectionClass="sec-title mb-26"
                    subtitleClass="sub-title primary"
                    // subtitle="About Us"
                    // titleClass="title"
                    //  title="'ABACUS CLASSES NEAR ME'
                    // IS THIS WHAT YOU ARE SEARCHING FOR?"
                    descClass="desc pr-10"
                    description={<>Answer keys with correct answers for the sums in the sheet are also downloaded along with the worksheet. These answer keys simplify the checking process of the used practice sheets. The answer key saves valuable time that you would have otherwise spent evaluating the sheets.  <br/>
                        The worksheet generator allows you to supply uninterrupted practice sheets to the students. These practice sheets will help them practice and develop Abacus math accuracy. With accuracy comes confidence.
                        <br/>
                        The successful Abacus Training of your students adds to the goodwill of your Abacus class.<br/>
                        
                        Goodwill will help you in improving your business further.</>}
                   
                />  
            </div>
        </div>
    );
}

export default AbacusTrainer;
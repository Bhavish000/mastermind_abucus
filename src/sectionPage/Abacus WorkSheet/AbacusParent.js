import React from "react";
import mainImage2 from '@/styles/img/abacus/worksheet/parents-img.png';
import SectionTitle from "@/component/Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";


function AbacusParent() {

    return (
        <div id="rs-about" className="rs-about style1 pt-50 md-pt-70 md-pb-0 back2-color">
            <div className="container">
                <div className="row align-items-center pb-30">

                    <SectionTitle
                        sectionClass="sec-title mb-20 text-center md-mb-30"
                        // subtitleClass="sub-title primary"
                        // subtitle="Subject Categories"
                        titleClass="title family mb-0"
                        title={<>PARENTS OF ABACUS STUDENTS - <span className="title-change" >DOWNLOAD FREE ABACUS NUMBER WORKSHEETS</span> </>}
                    />

                      <div className="col-lg-4 pr-30  md-mb-20 hidden-md">
                        <div className="img-part">
                           
                                <Image
                                    src={mainImage2}
                                    alt="Main Image"
                                />
                          
                        </div>
                    </div>

                    <div className="col-lg-8 order-last">
                        {/* Section Title Start */}
                        <SectionTitle
                            sectionClass="sec-title mb-0"
                            subtitleClass="sub-title primary"
                            // subtitle="About Us"
                            // titleClass="title"
                            // title={<>PARENTS OF ABACUS STUDENTS - DOWNLOAD FREE ABACUS NUMBER WORKSHEETS</>}
                            descClass="desc pr-10"
                            description={<>Parents of the Abacus students also look for additional Abacus Practice sheets for their children. But they have depended on the <Link href={'/abacus-classes-near-me'} className="primary-color font-bold">Abacus Classes</Link>
                             for getting them. <br />

                                From the Mastermind Abacus Worksheet Generator, you can download an unlimited number of abacus question papers for your child. The answer key with correct answers will also be downloaded. This is an added benefit. You just have to match the answers of the Answer key and that in the worksheet with your child.
                                <br />
                                You can decide the difficulty level of the sums that you want your child to practice and download customized worksheets. You have the option to select the arithmetic operators. You can select the number of digits, sums & rows in the worksheet. You can download separately Abacus addition worksheets, Abacus subtraction worksheets, and Abacus multiplication worksheets.
                                <br />
                                Your child can now practice regularly and become perfect. You see and monitor the progress of your of your child. You do not have to now depend on the Abacus center to provide the practice sheets.</>}
                            // animateName="fade-up"
                            // animateDuration="500"
                        />
                    </div>
                   

                </div>
            </div>
        </div>
    );
}

export default AbacusParent;
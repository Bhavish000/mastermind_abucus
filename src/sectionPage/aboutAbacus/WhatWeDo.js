import SectionTitle from "@/component/Common/SectionTitle";
import React from "react";



function WhatWeDo() {



    return (
        <div id="rs-about" className="rs-about style1 pt-50 md-pt-70 md-pb-10">
            <div className="container">
    

                <SectionTitle
                    sectionClass="sec-title mb-26"
                    subtitleClass="sub-title primary"
                    // subtitle="About Us"
                    titleClass="title family"
                    title={<>WHAT WE <span className="title-change">DO?</span></>}
                    descClass="desc pr-10"
                    description={<>Striving to &apos;Educate&apos;, Not Just Teach <br/><br/>

                        The complexities of the teaching methods brought us into the Education segment, and we decided to move ahead with our tagline &apos;Education Simplified&apos;. We are in the field for the last 26 years.
                        <br/><br/>
                        We started with focusing on the development of little brains with &apos;Mastermind Abacus&apos;, Once satisfied with positive effects of our Abacus training to students, we decided to make available the benefits of Mastermind Abacus to students across the different parts of India.
                        <br/><br/>
                        Over the years we went Global by joining hands with the educationists of different countries. Students of 16 countries were soon benefitting from the Abacus training of Mastermind Abacus.
                        <br/><br/>
                        With change in the learning process owing to the development in technology, we developed the World&apos;s First Live Online Abacus Learning Platform. With this we are now in the true sense Global, available to any interested student on just a single click.</>}
                />

            </div>
        </div>
    );
}

export default WhatWeDo;
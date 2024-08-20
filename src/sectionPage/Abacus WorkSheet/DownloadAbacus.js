import React from "react";


const DownloadAbacus = (props) => {

    const { ctaClass } = props;

    return (
        <div className={ctaClass ? ctaClass : 'rs-cta'} style={{ height: "300px"}}>
            <div className="cta-content text-center">
             
                <div className="sec-title mb-46 md-mb-10">
                    <h1 className="title family fs-2">
                    DOWNLOAD CUSTOMIZED ABACUS <span className="title-change" >WORKSHEETS OF YOUR CHOICE</span>
                    </h1>
                    <div className="desc ">
                    When you need an Abacus worksheet for practice or a question paper to test your student&apos;s, select operators, No.of questions, No. of Rows & Digits, and download customized Abacus worksheets of your choice with answer keys from the free Abacus Worksheets Generator.
                    </div>
                </div>
              
            </div>
        </div>
    );
}

export default DownloadAbacus;
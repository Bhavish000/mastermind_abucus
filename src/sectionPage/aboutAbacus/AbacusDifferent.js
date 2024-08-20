import SectionTitle from "@/component/Common/SectionTitle";
import React from "react";


function AbacusDifferent() {

    return (
        <div id="rs-about" className="rs-about style1 pt-50 pb-50 md-pt-10 md-pb-10 back2-color" >
            <div className="container">

                <SectionTitle
                    sectionClass="sec-title mb-20"
                    subtitleClass="sub-title primary"
                    // subtitle="About Us"
                    titleClass="title family"
                    title={<>WHAT MAKES  <span className="title-change" > US DIFFERENT?</span></>}
                    descClass="desc pr-10"
                    description={<>1. &nbsp; We Research - Our research is directed towards the changing educational needs of the students due to globalization. <br/>
                      2. &nbsp; We Innovate - We innovate and develop indigenous learning materials that can simplify the entire learning process.<br/>
                      3. &nbsp; We Share - We share every newly acquired knowledge with the aspiring teachers by imparting them with the highest level of training.<br/>
                      4. &nbsp; We Educate - Our Franchise associate are trained and certified by us to ensure the delivery of the highest quality of education.</>}
                />

            </div>
        </div>
    );
}

export default AbacusDifferent;
import SectionTitle from "@/component/Common/SectionTitle";
import React from "react";

// import animateBall from '../../assets/img/about/image-center-circle.png';
// import mainImage from '../../assets/img/abacus/about/maxresdefault.jpg';


function RefundConent() {


    return (
        <div id="rs-about" className="rs-about style1 pt-50 pb-50 md-pt-70 md-pb-70 back-color" >
            <div className="container">

                <SectionTitle
                    sectionClass="sec-title mb-26"
                    subtitleClass="sub-title primary"
                    // subtitle="About Us"
                    titleClass="title"
                    title="CANCELLATION & REFUND POLICY"
                    descClass="desc"
                    description={<>As Of Now We Do Not Provide Any Option For Cancellation Of Products And/Or Services You Have Purchased Or Subscribed. Once A Product/Service Has Been Purchased By You, We Cannot Provide Any Refund, Either Totally Or Partially. We Suggest That First You Go Through The Demos Before You Subscribe To Or Purchase From MMTPL And As A Customer You Are Responsible For Understanding That No Refund Or Cancellation Is Possible Upon Any Subscription At Our Site.</>}
                />

            </div>
        </div>
    );
}

export default RefundConent;
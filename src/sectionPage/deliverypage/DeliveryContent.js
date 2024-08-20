import SectionTitle from "@/component/Common/SectionTitle";
import React from "react";

// import deliverContent from ".";


function DeliverContent() {


    return (
        <div id="rs-about" className="rs-about style1 pt-50 pb-50 md-pt-70 md-pb-70 back-color" >
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title mb-26"
                    subtitleClass="sub-title primary"
                    // subtitle="About Us"
                    titleClass="title"
                    title="SHIPPING & DELIVERY POLICY"
                    descClass="desc pr-10"
                    description={<>1. Paid subscribers, whether they are Students or Teachers will be shipped a respective kit by MMTPL through courier within 3 working days from the date of receipt of payment. The delivery takes 4 to 5 working days in India and 7 to 12 working days for addresses out of India. Delivery time may vary upon the availability of courier services in the particular location and the custom formalities in the particular country. We have provided the panel from where a paid subscribers can track the shipment. The Paid subscribers can also track the shipment by logging into respective courier website.
                    <br/><br/>

                        2. In case Courier Company doesn’t deliver the shipment in time, MMTPL will track the reason and follow the courier company to deliver it ASAP. If courier company has lost the goods or not able to deliver at the location of the paid subscribers, MMTPL will re-courier the goods at no cost.
                        <br/><br/>
                        3. In any case MMTPL doesn’t take any responsibility for the delay in the delivery by the courier company.</>}
                />

            </div>
        </div>
    );
}

export default DeliverContent;
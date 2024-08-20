import SectionTitle from "@/component/Common/SectionTitle";
import Link from "next/link";

const OnlineClasses = () => {

    return (
        <div className="rs-services style2 style4 pt-10 md-pt-30">
            <div className="container">
                <div className=" mt-30 sm-mb-30 mb-20 text-center">
                    <SectionTitle
                        sectionClass="sec-title text-center mb-50 md-mb-30"
                        bottomSubTitleClass="sub-title mb-0"
                        titleClass="title mb-10"
                        title="MAKE YOUR CHOICE, JOIN OFFLINE OR ONLINE ABACUS CLASS"
                    />
                </div>
                <div className="row ">
                    <div className="col-lg-6 md-mb-30 service-item servic-boxes ">
                        {/* <SingleService
                            Icon='flaticon-analysis'
                            Title='OFFLINE CLASSES'
                            Desc='If you are looking for Offline Abacus classes near you, raise an inquiry. Mastermind has over 2000 plus Abacus centers Globally. We shall contact you with the details of our nearest Abacus center.
                            '

                        /> */}


                        <div className="content-part">

                            <h4 className="title">OFFLINE ABACUS CLASSES</h4>
                            <p className="desc"> With over 2000 plus Abacus centers Globally, we are easy to find. For Offline Abacus classes near you, raise an inquiry. We shall contact you with the details of our nearest Abacus center.</p>
                            <div className="banner-btn">
                                <Link href="/contact" className="readon2 banner-style banner-change" > RAISE AN INQUIRY</Link>
                            </div>
                            <p className="desc"> For Offline Classes</p>

                        </div>


                    </div>
                    <div className="col-lg-6 md-mb-30 service-item">
                        {/* <SingleService
                            Icon='ONLINE CLASSES'
                            Title='ONLINE CLASSES'
                            Desc='If you are looking for an Abacus Online classes, book a free demo class for a firsthand experience at the Worlds finest Abacus E-Learning Platform of Mastermind Abacus.'

                        /> */}


                        <div className="content-part">

                            <h4 className="title">ONLINE ABACUS CLASSES</h4>
                            <p className="desc"> &apos;For Online Abacus Classes, reach the World&apos;s finest Abacus E-Learning Platform of Mastermind Abacus. Book a free demo class and get a firsthand experience.&apos;</p>
                            <div className="banner-btn">
                                <Link href="/contact" className="readon2 banner-style banner-change" >BOOK A FREE DEMO CLASS</Link>
                            </div>

                            <p className="desc"> For Online Classes</p>

                        </div>
                        {/* <p className='Desc02'>
                        Duration - 6 to 9 months, once in a week class of two hours.
                        </p> */}
                    </div>
                    {/* <div className="col-lg-4 md-mb-30">
                        <SingleService
                            Icon='flaticon-tax'
                            Title='Coach Events'
                            Desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna'
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default OnlineClasses;
import SectionTitle from "@/component/Common/SectionTitle";
import SingleServiceThree from "@/component/Service/SingleServiceEight";


const Advantages = () => {

    return (
        <div className="rs-services style6 pt-100 pb-100  md-pt-0 md-pb-70">
            <div className="container">


                <div className="row">
                    <div className="text-center">
                        <SectionTitle
                            sectionClass="sec-title3 mb-50"
                            subtitleClass="sub-title"
                            // subtitle="Lingo Bingo"
                            titleClass="title family"
                            title={<>ADVANTAGES - <span className='title-change' >IMPLEMENTATION</span>  OF ABACUS FOR SCHOOL</>}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6 md-mb-30">
                        <SingleServiceThree
                            itemClass="services-wrap bg1"
                            // serviceImage={serviceIcon1}
                            Title="Improved performance in academics"
                            // Desc="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms. "
                        />
                    </div>
                    <div className="col-lg-3 pt-40 col-md-6 md-pt-0 md-mb-30">
                        <SingleServiceThree
                            itemClass="services-wrap bg2"
                            // serviceImage={serviceIcon2}
                            Title="Improved performance in Maths by Abacus Students"
                            // Desc="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms. "
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 sm-mb-30">
                        <SingleServiceThree
                            itemClass="services-wrap bg3"
                            // serviceImage={serviceIcon3}
                            Title="Value addition to school Curriculum"
                            // Desc="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms. "
                        />
                    </div>
                    <div className="col-lg-3 pt-40 col-md-6 md-pt-0">
                        <SingleServiceThree
                            itemClass="services-wrap bg4"
                            // serviceImage={serviceIcon4}
                            Title="No additional investment for Abacus Classes"
                            // Desc="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms. "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advantages;
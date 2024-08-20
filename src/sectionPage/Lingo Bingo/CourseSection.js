import SectionTitle from "@/component/Common/SectionTitle";
import SingleServiceThree from "@/component/Service/SingleServiceEight";

const  Courses = () => {

    return (
        <div className="rs-services style6 pt-100 pb-100  md-pt-50 md-pb-50">
            <div className="container">


                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle
                            sectionClass="sec-title3 mb-34"
                            subtitleClass="sub-title"
                            subtitle="Lingo Bingo"
                            titleClass="title family"
                            title={<>COURSE <span className='title-change' >STRUCTURE</span></>}
                        />
                    </div>
                    <div className="col-lg-6">
                        <SectionTitle
                            sectionClass="sec-title mb-34"
                            descClass="desc desc-text"
                            description="The course lasts 6 to 9 months with weekly two-hour classes, balancing thorough learning and flexibility. This format ensures comprehensive coverage, practical application, and community building, fitting well into busy schedules and diverse participant needs."
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-2 col-md-6 md-mb-30">
                        <SingleServiceThree
                            itemClass="services-wrap bg1"
                            Title="Counting"
                        />
                    </div>
                    <div className="col-lg-2 pt-40 col-md-6 md-pt-0 md-mb-30">
                        <SingleServiceThree
                            itemClass="services-wrap bg2"
                            Title="Number Sense"
                        />
                    </div>
                    <div className="col-lg-2 col-md-6 sm-mb-30">
                        <SingleServiceThree
                            itemClass="services-wrap bg3"
                            Title="Time & Calendar"
                        />
                    </div>
                    <div className="col-lg-2 pt-40 col-md-6 md-pt-0 sm-mb-30">
                        <SingleServiceThree
                            itemClass="services-wrap bg4"
                            Title="Additions and Subtraction"
                        />
                    </div>

                    <div className="col-lg-2 col-md-6 sm-mb-30">
                        <SingleServiceThree
                            itemClass="services-wrap bg5"
                            Title="Introduction of Abacus"
                        />
                    </div>
                    <div className="col-lg-2 pt-40 col-md-6 md-pt-0">
                        <SingleServiceThree
                            itemClass="services-wrap bg1"
                            Title="Fundamental Practice on Abacus"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;
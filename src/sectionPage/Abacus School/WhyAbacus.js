import CategoriesSingleTwo from '@/component/Categories/CategoriesSingleTwo';
import SectionTitle from '@/component/Common/SectionTitle';
import React from 'react';




const WhyAbacus = () => {

    return (
        <div className="rs-categories gray-bg schoolCategories pt-94 pb-70 md-pt-64 md-pb-40">
            <div className="container">
                <div className=" mb-50 md-mb-30 text-center">
                    <div className=" sm-mb-30 text-center">
                        <SectionTitle
                            sectionClass="sec-title"
                            subtitleClass="sub-title primary"
                            // subtitle="Subject Categories"
                            titleClass="title family mb-0 text-center"
                            title={<>WHY MASTERMIND ABACUS<span className='title-change'> FOR YOUR SCHOOL?</span></>}
                        />
                    </div>
                    {/* <div className="col-md-6">
                        <div className="btn-part text-right sm-text-left">
                            <Link to="course" className="readon">View All Categories</Link>
                        </div>
                    </div> */}
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6 mb-30">
                        <CategoriesSingleTwo
                            categoriesClass="categories-item"
                            title="Master Mind Abacus is Company with 2000 + centers across 16 countries, widely accepted in the schools."
                            quantity="05"
                        // iconImg={icon1}
                        />

                        
                    </div>
                    <div className="col-lg-6 col-md-6 mb-30">
                        <CategoriesSingleTwo
                            categoriesClass="categories-item"
                            title="We offer Abacus Math Training in sync with the school calculation method."
                            quantity="05"
                        // iconImg={icon2}
                        />
                       
                    </div>
                    <div className="col-lg-6 col-md-6 mb-30">
                        <CategoriesSingleTwo
                            categoriesClass="categories-item"
                            title="We have set benchmark in offering excellent quality teachers Training, with multiple modes."
                            quantity="05"
                        // iconImg={icon3}
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 mb-30">
                        <CategoriesSingleTwo
                            categoriesClass="categories-item"
                            title="We provide Teachers Training App for all our Abacus Teachers."
                            quantity="05"
                        // iconImg={icon4}
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 mb-30">
                        <CategoriesSingleTwo
                            categoriesClass="categories-item"
                            title="We have achieved excellent delivery of the concept with the students."
                            quantity="05"
                        // iconImg={icon5}
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 mb-30">
                        <CategoriesSingleTwo
                            categoriesClass="categories-item"
                            title="We provide Exclusive Students App with facility for online exams & real-time assessment & results"
                            quantity="05"
                        // iconImg={icon6}
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 mb-30">
                        <CategoriesSingleTwo
                            categoriesClass="categories-item"
                            title="We provide Indigenous, multicolor books to keep students interest alive."
                            quantity="08"
                        // iconImg={icon7}
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 mb-30">
                        <CategoriesSingleTwo
                            categoriesClass="categories-item"
                            title="We conduct State , National and International Abacus Competition."
                            // quantity="01"
                        // iconImg={icon8}
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 mb-30">
                        <CategoriesSingleTwo
                            categoriesClass="categories-item"
                            title="We provide a backup team for uncompromised 24X7 services to our associates."
                            // quantity="07"
                        // iconImg={icon9}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyAbacus;
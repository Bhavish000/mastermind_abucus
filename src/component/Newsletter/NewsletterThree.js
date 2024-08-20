import React from 'react';


const NewsletterThree = (props) => {
    const { sectionClass, wrapperClass, } = props;

    return (
        <div className={sectionClass ? sectionClass : 'rs-newsletter style2'} >
            <div className="container">
                <div className={wrapperClass ? wrapperClass : 'newsletter-wrap'}>
                    <div className="row y-middle">
                        <div className="col-lg-12">
                            <div className="sec-title  text-center">
                                <h2 className="title family">
                                    MAKE YOUR CHILD <br />
                                    <span style={{ color: "#fd6c24" }}>A MATH GENIUS</span>
                                </h2>
                                <div className="desc ">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsletterThree;
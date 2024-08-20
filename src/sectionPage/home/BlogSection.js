import BlogPartThree from "@/component/Blog/HomeBlogSectionThree";
import React from "react";

function Blog  () {
    return (
        <React.Fragment>
            <div id="rs-blog" className="rs-blog style2 rs-team style1 nav-style2 pb-40 md-pt-10 md-pb-0 back2-color" >
                <div className="container">
                    <div className="row y-middle ">
                        <div className="  text-center">
                            <div className="sec-title  text-center md-mb-30 ">
                                <h2 className="title family mb-50 mt-20 md-mt-30px md-mb-30px">
                                <span className='title-change' >BLOGS</span>
                                </h2>
                               
                            </div>

                        </div>
                    </div>
                    <BlogPartThree />
                </div>
            </div>
        </React.Fragment>
    );

}

export default Blog;
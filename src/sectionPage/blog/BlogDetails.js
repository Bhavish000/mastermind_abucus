import Commenting from '@/component/Widget/Commenting';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
// import Commenting from '../../components/Widget/Commenting';
const BlogDetails = (props) => {
    const { BlogDetailData } = props

    return (
        <>

            <Head>
                {/* <link rel="icon" href={favIcon} /> */}
                <title>{BlogDetailData.blog_detail.subject}</title>
                <meta name="keywords" content={BlogDetailData.blog_detail.meta_keywords} />
                <meta name="description" content={BlogDetailData.blog_detail.meta_description} />



                <meta property="og:title" content={BlogDetailData.blog_detail.subject} />
                <meta property="og:site_name" content="Mastermind Abacus" />
                <meta property="og:url" content="https://www.mastermindabacus.com/blog_detail/428/struggling-with-math-unlock-math-joy-with-the-abacus" />
                <meta property="og:description" content="Is your child struggling with math? Discover the ancient abacus tool that makes learning fun! Mastermind Abacus' engaging online programs build." />

                <meta property="og:type" content="blog" />
                <meta property="og:image:height" content="314" />
                <meta property="og:image:width" content="720" />
                <meta property="og:image" content={BlogDetailData.blog_detail.image_url} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@mastermindabac2" />
                <meta name="twitter:title" content="Struggling with Math? Unlock Math Joy with the Abacus!" />
                <meta name="twitter:description" content="Is your child struggling with math? Discover the ancient abacus tool that makes learning fun! Mastermind Abacus' engaging online programs build." />
                <meta name="twitter:image" content="https://www.mmtplonline.com/blog_images/Struggling_with_Math_Unlock_Math_Joy_with_the_Abacus!.jpg" />
            </Head>
            {/* <PostContent /> */}
            <div className="blog-deatails">
                <div className="bs-img d-flex justify-center">
                    {BlogDetailData ? <Image src={BlogDetailData.blog_detail.image_url} alt="Post Image"  /> : null}
                </div>
                <div className='text-center'>
                </div>
                <div className="blog-full mt-0">
                    {BlogDetailData ? <h1 className="title mb-10 mt-0" >{BlogDetailData.blog_detail.subject}</h1> : null}
                    <ul className="single-post-meta pl-0">
                        <li>
                            {BlogDetailData ? <span className="p-date"> <i className="fa fa-calendar-check-o"></i> {BlogDetailData.blog_detail.blog_date} </span> : null}
                        </li>
                        <li>
                            <span className="p-date"> <i className="fa fa-user-o"></i> Admin </span>
                        </li>
                    </ul>
                    {BlogDetailData ?
                        <div dangerouslySetInnerHTML={{ __html: BlogDetailData.blog_detail.shot_content }}>

                        </div>
                        : null
                    }
                </div>
            </div>
            {/* <Commenting /> */}
        </>
    );
}

export default BlogDetails;
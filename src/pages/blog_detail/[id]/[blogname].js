import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/component/layout/header/header';
import ScrollToTop from '@/component/Common/ScrollTop';
import SiteBreadcrumb from '@/component/Common/Breadcumb';
import RecentPost from '@/component/Widget/RecentPost';
import Relatedblogs from '@/component/Widget/Relatedblogs';
import MetaWidget from '@/component/Widget/MetaWidget';
import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';
import BlogDetails from '@/sectionPage/blog/BlogDetails';
import bannerbg from '../../../styles/img/breadcrumbs/2.jpg';
import Head from 'next/head';

const SinglePostRightSidebar = ({ blogDetailData, error }) => {
     const router = useRouter();

    if (router.isFallback) {
        return <p>Loading...</p>;
    }
    
    if (error) return <p>Error: {error}</p>;

    if (!blogDetailData) return <p>Loading...</p>;
    return (
        <React.Fragment>
             
            <Header
                parentMenu='home'
                TopBar='enable'
                CanvasClass='right_menu_togle hidden-md'
                headerClass='full-width-header header-style2'
                TopBarClass='topbar-area dark-parimary-bg'
                emailAddress='support@website.com'
                phoneNumber='(+088) 589-8745'
            />

            <SiteBreadcrumb
                pageTitle="Blog"
                pageName="Blog"
                breadcrumbsImg={bannerbg}
                status="1"
            />

            {/* Blog Details Start */}
            <div className="rs-inner-blog orange-style pt-100 pb-100 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 pr-50 md-pr-14">
                            <BlogDetails BlogDetailData={blogDetailData} />
                        </div>
                        <div className="col-lg-4 col-md-12 order-last">
                            <div className="widget-area">
                                <RecentPost resentBlogs={blogDetailData.resent_blogs} />
                                {blogDetailData.related_blogs ? <Relatedblogs Relatedblog={blogDetailData.related_blogs} /> : null}
                                <MetaWidget archivedBlogs={blogDetailData.archived_blogs} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog Details End */}

            <FooterStyleTwo footerTopClass='footer-top no-gap' />

            {/* scrolltop-start */}
            <ScrollToTop scrollClassName="scrollup orange-color" />
            {/* scrolltop-end */}
        </React.Fragment>
    );
};
// Utility to sanitize slugs
function sanitizeSlug(slug) {
    return slug.replace(/[^a-zA-Z0-9-]/g, '-'); // Replace non-alphanumeric characters with hyphens
}

// Extract blogs from archived data
const extractBlogsFromArchives = (archives) => {
    return archives.flatMap(month => month.blog_list);
};

export async function getStaticPaths() {
    // Fetch existing blog data
    const response = await fetch('https://tt.mastermindschool.co.in/api/abacus_blog_page_list');
    const data = await response.json();
    const prsData = data.data;
    
    const archivedBlogs = extractBlogsFromArchives(prsData.archived_blogs);
    const allBlogs = [
        ...prsData.blog_list,
        ...archivedBlogs,
        ...prsData.resent_blogs,
    ];

    // Generate paths for existing blogs
    const paths = allBlogs.map(blog => ({
        params: { id: blog.blog_id.toString(), blogname: sanitizeSlug(blog.blog_url.split('/')[1]) },
    }));

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
    try {
        const response = await fetch(`https://tt.mastermindschool.co.in/api/abacus_blog_detail?blog_id=${params.id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const result = await response.json();

        if (!result.data) {
            throw new Error('Unexpected data format');
        }

        const blogDetailData = {
            ...result.data,
            resent_blogs: result.data.resent_blogs || null,
            related_blogs: result.data.related_blogs || null,
            archived_blogs: result.data.archived_blogs || null,
        };

        return {
            props: { blogDetailData },
            revalidate: 60, // Revalidate the page every 60 seconds
        };

    } catch (error) {
        console.error('Error in getStaticProps:', error);
        return {
            props: { error: error.message },
        };
    }
}

export default SinglePostRightSidebar;

















// import React, { useEffect, useState } from 'react';
// import Head from 'next/head';
// import Header from '@/component/layout/header/header';
// import ScrollToTop from '@/component/Common/ScrollTop';
// import Error from 'next/error';
// import SiteBreadcrumb from '@/component/Common/Breadcumb';
// import RecentPost from '@/component/Widget/RecentPost';
// import Relatedblogs from '@/component/Widget/Relatedblogs';
// import MetaWidget from '@/component/Widget/MetaWidget';
// import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';
// import BlogDetails from '@/sectionPage/blog/BlogDetails';
// import { useRouter } from 'next/router';
// import bannerbg from '../../../styles/img/breadcrumbs/2.jpg';

// const SinglePostRightSidebar = () => {
//     const [Blog_detailData, setBlog_detailData] = useState('');
//     const [paragraphs, setparagraphs] = useState('');
//     const [error, setError] = useState(null);

//     const router = useRouter();
//     const { id } = router.query;


//     useEffect(() => {
//         if (id) {
//             const Handle_Blog_detail_API = async () => {
//                 try {
//                     const response = await fetch(`https://tt.mastermindschool.co.in/api/abacus_blog_detail?blog_id=${id}`);
//                     if (!response.ok) {
//                         throw new Error('Failed to fetch data');
//                     }
//                     const result = await response.json();
//                     // console.log(result.data)
//                     setBlog_detailData(result.data)
//                 } catch (error) {
//                     setError(error)
//                 }
//             };
    
//             Handle_Blog_detail_API();
//         }
//       }, [id]);


 

//     if (error) return <p>Error: {error}</p>;
//     if (!Blog_detailData) return <p>Loading...</p>;

//     return (
//         <React.Fragment>
//             <Head>
//                 {/* <link rel="icon" href={favIcon} /> */}
//                 <title>Struggling with Math? Unlock Math Joy with the Abacus!</title>
//                 <meta name="keywords" content="math classes, stem education, math online classes, learning abacus, " />
//                 <meta name="description" content="Is your child struggling with math? Discover the ancient abacus tool that makes learning fun! Mastermind Abacus' engaging online programs build." />



//                 <meta property="og:title" content="Struggling with Math? Unlock Math Joy with the Abacus!" />
//                 <meta property="og:site_name" content="Mastermind Abacus" />
//                 <meta property="og:url" content="https://www.mastermindabacus.com/blog_detail/428/struggling-with-math-unlock-math-joy-with-the-abacus" />
//                 <meta property="og:description" content="Is your child struggling with math? Discover the ancient abacus tool that makes learning fun! Mastermind Abacus' engaging online programs build." />

//                 <meta property="og:type" content="blog" />
//                 <meta property="og:image:height" content="314" />
//                 <meta property="og:image:width" content="720" />
//                 <meta property="og:image" content="https://www.mmtplonline.com/blog_images/Struggling_with_Math_Unlock_Math_Joy_with_the_Abacus!.jpg" />
//                 <meta name="twitter:card" content="summary_large_image" />
//                 <meta name="twitter:site" content="@mastermindabac2" />
//                 <meta name="twitter:title" content="Struggling with Math? Unlock Math Joy with the Abacus!" />
//                 <meta name="twitter:description" content="Is your child struggling with math? Discover the ancient abacus tool that makes learning fun! Mastermind Abacus' engaging online programs build." />
//                 <meta name="twitter:image" content="https://www.mmtplonline.com/blog_images/Struggling_with_Math_Unlock_Math_Joy_with_the_Abacus!.jpg" />
//             </Head>
//             <Header
//                 parentMenu='home'
//                 TopBar='enable'
//                 CanvasClass='right_menu_togle hidden-md'
//                 headerClass='full-width-header header-style2'
//                 TopBarClass='topbar-area dark-parimary-bg'
//                 emailAddress='support@website.com'
//                 phoneNumber='(+088) 589-8745'

//             />

//             <SiteBreadcrumb
//                 pageTitle="Blog"
//                 pageName="Blog"
//                 breadcrumbsImg={bannerbg}
//                 status="1"
//             />

//             {/* Blog Details Start */}
//             <div className="rs-inner-blog orange-style pt-100 pb-100 md-pt-80 md-pb-80">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-8 pr-50 md-pr-14">
//                             <BlogDetails BlogDetailData={Blog_detailData} />
//                         </div>
//                         <div className="col-lg-4 col-md-12 order-last">
//                             <div className="widget-area">
//                                 <RecentPost resentBlogs={Blog_detailData.resent_blogs} />
//                                 {Blog_detailData.related_blogs ? <Relatedblogs Relatedblog={Blog_detailData.related_blogs} /> : null}
//                                 <MetaWidget archivedBlogs={Blog_detailData.archived_blogs} />
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//             {/* Blog Details End */}


//             <FooterStyleTwo
//                 footerTopClass='footer-top no-gap'
//             />

//             {/* scrolltop-start */}
//             <ScrollToTop
//                 scrollClassName="scrollup orange-color"
//             />
//             {/* scrolltop-end */}

//         </React.Fragment>
//     );
// }


// export default SinglePostRightSidebar;
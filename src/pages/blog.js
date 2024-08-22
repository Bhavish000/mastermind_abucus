import SiteBreadcrumb from '@/component/Common/Breadcumb';
import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';
import Header from '@/component/layout/header/header';
import BlogMain from '@/sectionPage/blog/BlogMain';
import bannerbg from '@/styles/img/breadcrumbs/2.jpg';
import Head from 'next/head';
import React from 'react';
const Blog = () => {
    return (
        <React.Fragment>
            <Head>
                {/* <link rel="icon" href={favIcon} /> */}
                <title>Everything About Abacus | Mastermind Blogs</title>
                <meta name="keywords" content="" />
                <meta name="description" content="Stay connected!  To Mastermind Abacus Blogs for all the latest facts, learning’s, information about Abacus, Mental Math, child development and much more." />
                <meta property="og:title" content="Everything About Abacus | Mastermind Blogs" />
                <meta property="og:site_name" content="Mastermind Abacus" />
                <meta property="og:url" content="https://www.mastermindabacus.com/blog" />
                <meta property="og:description" content="Stay connected!  To Mastermind Abacus Blogs for all the latest facts, learning’s, information about Abacus, Mental Math, child development and much more." />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://tt.mastermindschool.co.in/ab_images/mastermindabacus-logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@mastermindabac2" />
                <meta name="twitter:title" content="Everything About Abacus | Mastermind Blogs" />
                <meta name="twitter:description" content="Stay connected!  To Mastermind Abacus Blogs for all the latest facts, learning’s, information about Abacus, Mental Math, child development and much more." />
                <meta name="twitter:image" content="https://tt.mastermindschool.co.in/ab_images/mastermindabacus-logo.png" />
            </Head>
            {/* <OffWrap /> */}
            <Header
                parentMenu='blog'
                TopBar='enable'
                CanvasClass='right_menu_togle hidden-md'
                headerClass='full-width-header header-style2'
                TopBarClass='topbar-area dark-parimary-bg'
                emailAddress='support@website.com'
                phoneNumber='(+088) 589-8745'

            />

            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                pageTitle="OUR BLOGS - WE RESEARCH, DOCUMENT & SHARE KNOWLEDGE"
                pageName=""
                breadcrumbsImg={bannerbg}
            // <img src="/static/media/2.d3762604.jpg" alt="Breadcrumbs Image"></img>
            />


            <BlogMain />


            <FooterStyleTwo
                footerTopClass='footer-top no-gap'
            />



        </React.Fragment>
    );
}


export default Blog;


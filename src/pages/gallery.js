import React from 'react';
import bannerbg from '@/styles/img/abacus/gallery/mastermind-abacus-gallery-new.jpg';
import Head from 'next/head';
import Header from '@/component/layout/header/header';
import SiteBreadcrumb from '@/component/Common/Breadcumb';
import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';
import ScrollToTop from '@/component/Common/ScrollTop';
import GalleryPart from '@/sectionPage/gallery/GalleryPart';


const Gallery = () => {

    return (
        <React.Fragment>
            <Head>
                {/* <link rel="icon" href={favIcon} /> */}
                <title>Mastermind Abacus - Image gallery, a pictorial representation</title>
                <meta name="keywords" content="Mastermind Abacus State level competitions, State Level Competitions, events, National Level Abacus Competition, International Level State Competition, Mastermind Abacus" />
                <meta name="description" content="Glimpses of Mastermind Abacus National & International level competitions." />



                <meta property="og:title" content="Mastermind Abacus - Image gallery, a pictorial representation" />
                <meta property="og:site_name" content="Mastermind Abacus" />
                <meta property="og:url" content="https://www.mastermindabacus.com/gallery" />
                <meta property="og:description" content="Glimpses of Mastermind Abacus National & International level competitions." />

                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@mastermindabac2" />
                <meta name="twitter:title" content="Mastermind Abacus - Image gallery, a pictorial representation" />
                <meta name="twitter:description" content="Glimpses of Mastermind Abacus National & International level competitions." />
                <meta name="twitter:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png" />
            </Head>
            <Header
                parentMenu='about'
                TopBar='enable'
                CanvasClass='right_menu_togle hidden-md'
                headerClass='full-width-header header-style2'
                TopBarClass='topbar-area dark-parimary-bg'
                emailAddress='support@website.com'
                phoneNumber='(+088) 589-8745'

            />

            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                pageTitle="MASTERMIND ABACUS - IMAGE GALLERY, A PICTORIAL REPRESENTATION"
                pageName="Gallery"
                breadcrumbsImg={bannerbg}
            />
            {/* breadcrumb-area-End */}

            <GalleryPart />


            <FooterStyleTwo
                footerTopClass='footer-top no-gap'
            />

            {/* scrolltop-start */}
            <ScrollToTop
                scrollClassName="scrollup orange-color"
            />
            {/* scrolltop-end */}

            {/* <SearchModal /> */}
        </React.Fragment>
    );
}

export default Gallery
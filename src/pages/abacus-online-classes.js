import React from 'react';
import Head from 'next/head';
import Navbar from '@/sectionPage/Student Landing page/Navbar';
import Studantmain from '@/sectionPage/Student Landing page/Studantmain';
import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';

const StudentLanding = () => {
    return (
        <React.Fragment>
            <Head>
                { /* Standard metadata tags */}
                <title>Mastermind Abacus: Online Classes to Boost Math Skills</title>
                <meta name="keywords" content="abacus classes online, abacus online classes, online abacus classes, best online abacus classes, abacus math classes online, online abacus classes in hindi, online abacus classes near me, abacus online training, abacus classes free demo, online mental math classes, abacus math classes online, abacus learning portal, abacus program" />
                <meta name='description' content='Discover the Best Abacus Online Classes on the worlds premier and most innovative live online abacus learning portal. Book a free demo class!' />
                { /* End standard metadata tags */}
                { /* Facebook tags */}


                <meta property="og:title" content="Mastermind Abacus: Online Classes to Boost Math Skills" />
                <meta property="og:site_name" content="Mastermind Abacus" />
                <meta property="og:url" content="https://www.mastermindabacus.com/abacus-online-classes" />
                <meta property="og:description" content="Discover the Best Abacus Online Classes on the world's premier and most innovative live online abacus learning portal. Book a free demo class!" />

                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://tt.mastermindschool.co.in/ab_images/mastermindabacus-logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@mastermindabac2" />
                <meta name="twitter:title" content="Mastermind Abacus: Online Classes to Boost Math Skills" />
                <meta name="twitter:description" content="Discover the Best Abacus Online Classes on the world's premier and most innovative live online abacus learning portal. Book a free demo class!" />
                <meta name="twitter:image" content="https://tt.mastermindschool.co.in/ab_images/mastermindabacus-logo.png"></meta>
            </Head>
            {/* <OffWrap /> */}
            <Navbar />
            <Studantmain />
            <FooterStyleTwo
                footerTopClass='footer-top no-gap'
            />
            {/* <SearchModal /> */}
        </React.Fragment>
    );
}


export default StudentLanding;
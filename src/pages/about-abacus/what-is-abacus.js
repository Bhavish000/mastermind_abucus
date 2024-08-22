import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';
import Header from '@/component/layout/header/header';
import WhatAbacusMain from '@/sectionPage/What Abacus/AbacusWhatMain';
import Head from 'next/head';
import React from 'react';
// import WhatAbacusMain from './AbacusWhatMain';

const WhatAbacus = () => {
    return (
        <React.Fragment>
            <Head>
                {/* <link rel="icon" href={favIcon} /> */}
                <title>Explore Abacus: The Gateway to Mental Math Mastery</title>
                <meta name="keywords" content="Abacus, what is abacus, mental math, Mental Maths, Abacus Mental math, Abacus Mental maths, mental mathematics" />
                <meta name="description" content="Discover the Abacus: an ancient tool for brain development and mental math mastery. Join our free Mastermind Abacus demo class today." />

                <meta property="og:title" content="Explore Abacus: The Gateway to Mental Math Mastery" />
                <meta property="og:site_name" content="Mastermind Abacus" />
                <meta property="og:url" content="https://www.mastermindabacus.com/about-abacus/what-is-abacus" />
                <meta property="og:description" content="Discover the Abacus: an ancient tool for brain development and mental math mastery. Join our free Mastermind Abacus demo class today." />

                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://tt.mastermindschool.co.in/ab_images/mastermindabacus-logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@mastermindabac2" />
                <meta name="twitter:title" content="Explore Abacus: The Gateway to Mental Math Mastery" />
                <meta name="twitter:description" content="Discover the Abacus: an ancient tool for brain development and mental math mastery. Join our free Mastermind Abacus demo class today." />
                <meta name="twitter:image" content="https://tt.mastermindschool.co.in/ab_images/mastermindabacus-logo.png" />
            </Head>
            <Header
                parentMenu='resources'
                TopBar='enable'
                // CanvasLogo={Logo}
                // CanvasClass='right_menu_togle hidden-md'
                headerClass='full-width-header header-style2'
                TopBarClass='topbar-area dark-parimary-bg'
                emailAddress='support@website.com'
                phoneNumber='(+088) 589-8745'

            />
            <WhatAbacusMain />
            <FooterStyleTwo
                footerTopClass='footer-top no-gap'
            />
            {/* <SearchModal /> */}
        </React.Fragment>
    );
}


export default WhatAbacus;
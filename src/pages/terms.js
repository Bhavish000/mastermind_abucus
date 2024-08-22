import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';
import Header from '@/component/layout/header/header';
import TermsMain from '@/sectionPage/termspage/TermsMain';
import Head from 'next/head';
import React from 'react';

const Terms = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Terms & Conditions - Mastermind Abacus</title>
                <meta name="robots" content="noindex,nofollow" />

                <meta name="keywords" content="" />
                <meta name="description" content="Details trems & conditions for the limited Revocable & non-transferable liscence to the access and download of the company's  website & Integrated platform." />



                <meta property="og:title" content="Terms & Conditions - Mastermind Abacus" />
                <meta property="og:site_name" content="Mastermind Abacus" />
                <meta property="og:url" content="https://www.mastermindabacus.com/terms" />
                <meta property="og:description" content="Details trems & conditions for the limited Revocable & non-transferable liscence to the access and download of the company's  website & Integrated platform." />

                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://tt.mastermindschool.co.in/ab_images/mastermindabacus-logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@mastermindabac2" />
                <meta name="twitter:title" content="Terms & Conditions - Mastermind Abacus" />
                <meta name="twitter:description" content="Details trems & conditions for the limited Revocable & non-transferable liscence to the access and download of the company's  website & Integrated platform." />
                <meta name="twitter:image" content="https://tt.mastermindschool.co.in/ab_images/mastermindabacus-logo.png" />
            </Head>
            <Header
                parentMenu='home'
                TopBar='enable'
                headerClass='full-width-header header-style2'
                TopBarClass='topbar-area dark-parimary-bg'
                emailAddress='support@website.com'
                phoneNumber='(+088) 589-8745'

            />
            <TermsMain />
            <FooterStyleTwo
                footerTopClass='footer-top no-gap'
            />
            {/* <SearchModal /> */}
        </React.Fragment>
    );
}


export default Terms;
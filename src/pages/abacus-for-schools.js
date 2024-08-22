import ScrollToTop from '@/component/Common/ScrollTop';
import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';
import Header from '@/component/layout/header/header';
import AbacusShcoolMain from '@/sectionPage/Abacus School/AbacusShcoolMain';
import Head from 'next/head';
import React from 'react';

const AbacusShcool = () => {
    return (
        <React.Fragment>
            <Head>
                {/* <link rel="icon" href={favIcon} /> */}
                <title>ABACUS FOR SCHOOLS | MASTERMIND</title>
                <meta name="keywords" content="abacus classes school, abacus school classes, abacus classes in school" />
                <meta name="description" content="A budget-friendly abacus program exclusively designed for schools, with unlimited training support by mastermind abacus." />



                <meta property="og:title" content="ABACUS FOR SCHOOLS | MASTERMIND" />
                <meta property="og:site_name" content="Mastermind Abacus" />
                <meta property="og:url" content="https://www.mastermindabacus.com/abacus-for-schools" />
                <meta property="og:description" content="A budget-friendly abacus program exclusively designed for schools, with unlimited training support by mastermind abacus." />

                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://tt.mastermindschool.co.in/ab_images/mastermindabacus-logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@mastermindabac2" />
                <meta name="twitter:title" content="ABACUS FOR SCHOOLS | MASTERMIND" />
                <meta name="twitter:description" content="A budget-friendly abacus program exclusively designed for schools, with unlimited training support by mastermind abacus." />
                <meta name="twitter:image" content="https://tt.mastermindschool.co.in/ab_images/mastermindabacus-logo.png" />
            </Head>

            <Header
                parentMenu='abacus-class'
                TopBar='enable'
                CanvasClass='right_menu_togle hidden-md'
                headerClass='full-width-header header-style2'
                TopBarClass='topbar-area dark-parimary-bg'
                emailAddress='support@website.com'
                phoneNumber='(+088) 589-8745'

            />
            <AbacusShcoolMain />
            <FooterStyleTwo
                footerTopClass='footer-top no-gap'
            />
            {/* <SearchModal /> */}

            <ScrollToTop status={'FRANCHISE'} name={'INQUIRY NOW'} message={"SCHOOL INQUIRY"} id={'25'} />
        </React.Fragment>
    );
}


export default AbacusShcool;
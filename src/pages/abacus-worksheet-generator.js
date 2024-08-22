import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';
import Header from '@/component/layout/header/header';
import AbacusWorkSheetMain from '@/sectionPage/Abacus WorkSheet/AbacusWorkSheetMain';
import Head from 'next/head';
import React from 'react';

const AbacusWorkSheet = () => {
    return (
        <React.Fragment>
            <Head>
                {/* <link rel="icon" href={favIcon} /> */}
                <title>FREE ABACUS WORKSHEET GENERATOR</title>
                <meta name="keywords" content="abacus worksheets for level 1, abacus worksheets, abacus numbers worksheet, 2 digit abacus worksheet, beginner abacus worksheets for level, 3 digit abacus worksheets, abacus worksheets for beginners, abacus addition and subtraction worksheets, abacus level 2 worksheets, abacus small friends worksheets pdf" />
                <meta name="description" content=" Download free, unlimited Abacus Worksheets with answer key for all the levels from Mastermind Abacus worksheet generator. Practice to excel. " />



                <meta property="og:title" content="FREE ABACUS WORKSHEET GENERATOR" />
                <meta property="og:site_name" content="Mastermind Abacus" />
                <meta property="og:url" content="https://www.mastermindabacus.com/abacus-worksheet-generator" />
                <meta property="og:description" content=" Download free, unlimited Abacus Worksheets with answer key for all the levels from Mastermind Abacus worksheet generator. Practice to excel. " />

                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://tt.mastermindschool.co.in/ab_images/mastermindabacus-logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@mastermindabac2" />
                <meta name="twitter:title" content="FREE ABACUS WORKSHEET GENERATOR" />
                <meta name="twitter:description" content=" Download free, unlimited Abacus Worksheets with answer key for all the levels from Mastermind Abacus worksheet generator. Practice to excel. " />
                <meta name="twitter:image" content="https://tt.mastermindschool.co.in/ab_images/mastermindabacus-logo.png" />
            </Head>
            <Header
                parentMenu='resources'
                TopBar='enable'
                CanvasClass='right_menu_togle hidden-md'
                headerClass='full-width-header header-style2'
                TopBarClass='topbar-area dark-parimary-bg'
                emailAddress='support@website.com'
                phoneNumber='(+088) 589-8745'

            />
            <AbacusWorkSheetMain />
            <FooterStyleTwo
                footerTopClass='footer-top no-gap'
            />
        
        </React.Fragment>
    );
}


export default AbacusWorkSheet;
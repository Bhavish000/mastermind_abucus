import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';
import Header from '@/component/layout/header/header';
import AboutMain from '@/sectionPage/aboutAbacus/AboutMain';
import Head from 'next/head';
import React from 'react';

const About = () => {
    return (
        <React.Fragment>
            <Head>
                {/* <link rel="icon" href={favIcon} /> */}
                <title>Abacus Company | Mastermind Abacus</title> 
				<meta name="keywords" content="Abacus Franchise, Abacus Franchisee, Abacus Franchisor Abacus, Abacus Books, Abacus Worksheets, Abacus Practice Sheet, Abacus Training, Abacus Online Training, Franchisee Opportunity"/>
		<meta name="description" content="Mastermind Abacus a division of Mastermind Tutorials Pvt. Ltd., deals in children supplementary education through 2000+ partners across 16 countries."/>
		
		
		
		<meta property="og:title" content="Abacus Company | Mastermind Abacus"/>
		<meta property="og:site_name" content="Mastermind Abacus"/>
		<meta property="og:url" content="https://www.mastermindabacus.com/about-us"/>
		<meta property="og:description" content="Mastermind Abacus a division of Mastermind Tutorials Pvt. Ltd., deals in children supplementary education through 2000+ partners across 16 countries."/>
	
					<meta property="og:type" content="article"/>
		<meta property="og:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png"/>
					<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:site" content="@mastermindabac2"/>
		<meta name="twitter:title" content="Abacus Company | Mastermind Abacus"/>
		<meta name="twitter:description" content="Mastermind Abacus a division of Mastermind Tutorials Pvt. Ltd., deals in children supplementary education through 2000+ partners across 16 countries."/>
					<meta name="twitter:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png"/>
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
            <AboutMain />
            <FooterStyleTwo
                footerTopClass='footer-top no-gap'
            />
            {/* <SearchModal /> */}
        </React.Fragment>
    );
}


export default About;
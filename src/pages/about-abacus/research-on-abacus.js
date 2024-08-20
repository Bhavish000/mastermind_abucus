import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';
import Header from '@/component/layout/header/header';
import AbacusResearchMain from '@/sectionPage/Abacus Research/AbacusResearchMain';
import Head from 'next/head';
import React from 'react';

const AbacusResearch = () => {
    return (
        <React.Fragment>
            <Head>
                {/* <link rel="icon" href={favIcon} /> */}
                <title>Research On Abacus Learning & Its Impact</title> 
				<meta name="keywords" content="Abacus, Research on Abacus, Abacus Instrument, Types of Abacus, Design of Abacus, Development Of Abacus, Abacus Math Program, Abacus Classes, Whole Brain Development, Abacus Training, Mastermind Abacus Development"/>
		<meta name="description" content="The speed & accuracy of Abacus learning became a subject of research. Find the details about 'Research On Abacus' and Mastermind Abacus development."/>
		
		
		
		<meta property="og:title" content="Research On Abacus Learning & Its Impact"/>
		<meta property="og:site_name" content="Mastermind Abacus"/>
		<meta property="og:url" content="https://www.mastermindabacus.com/about-abacus/research-on-abacus"/>
		<meta property="og:description" content="The speed & accuracy of Abacus learning became a subject of research. Find the details about 'Research On Abacus' and Mastermind Abacus development."/>
	
					<meta property="og:type" content="article"/>
		<meta property="og:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png"/>
					<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:site" content="@mastermindabac2"/>
		<meta name="twitter:title" content="Research On Abacus Learning & Its Impact"/>
		<meta name="twitter:description" content="The speed & accuracy of Abacus learning became a subject of research. Find the details about 'Research On Abacus' and Mastermind Abacus development."/>
					<meta name="twitter:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png"/>
            </Head>
            <Header
            parentMenu='resources'
            TopBar='enable'
            // headerNormalLogo={Logo}
            // headerStickyLogo={stickyLogo}
            // CanvasLogo={Logo}
            CanvasClass='right_menu_togle hidden-md'
            headerClass='full-width-header header-style2'
            TopBarClass='topbar-area dark-parimary-bg'
            emailAddress='support@website.com'
            phoneNumber='(+088) 589-8745'
            />
            <AbacusResearchMain />
            <FooterStyleTwo />
            {/* <SearchModal /> */}
        </React.Fragment>
    );
}


export default AbacusResearch;
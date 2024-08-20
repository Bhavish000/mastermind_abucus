import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';
import Header from '@/component/layout/header/header';
import HomeFiveMain from '@/sectionPage/Abacus Class near me/HomeFiveMain';
import Head from 'next/head';
import React from 'react';

const HomeFive = () => {
    return (
        <React.Fragment>
            <Head>
                {/* <link rel="icon" href={favIcon} /> */}
                <title>Abacus Classes Near Me | Mastermind Abacus</title> 
				<meta name="keywords" content="abacus classes, best abacus classes, abacus classes in  bangalore, abacus classes for kids, abacus maths classes, mental math classes, online abacus classes in hindi, abacus class, abacus classes near me, abacus center near me, abacus classes near me with fees, abacus training near me, Abacus Academy, abacus near me, abacus classes for 5 year old near me, abacus classes near to me, abacus coaching classes near me, abacus training classes near me, abacus classes for adults near me"/>
		<meta name="description" content="Discover top-quality Abacus Classes near you with Mastermind Abacus. Transform your child into a math genius. Inquire now to find the nearest Abacus Class and secure their academic success."/>
		
		
		
		<meta property="og:title" content="Abacus Classes Near Me | Mastermind Abacus"/>
		<meta property="og:site_name" content="Mastermind Abacus"/>
		<meta property="og:url" content="https://www.mastermindabacus.com/abacus-classes-near-me"/>
		<meta property="og:description" content="Discover top-quality Abacus Classes near you with Mastermind Abacus. Transform your child into a math genius. Inquire now to find the nearest Abacus Class and secure their academic success."/>
	
					<meta property="og:type" content="article"/>
		<meta property="og:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png"/>
					<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:site" content="@mastermindabac2"/>
		<meta name="twitter:title" content="Abacus Classes Near Me | Mastermind Abacus"/>
		<meta name="twitter:description" content="Discover top-quality Abacus Classes near you with Mastermind Abacus. Transform your child into a math genius. Inquire now to find the nearest Abacus Class and secure their academic success."/>
					<meta name="twitter:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png"/>
            </Head>
            {/* <HeaderStyleThree
                parentMenu='home'
                headerNormalLogo={Logo}
                headerStickyLogo={stickyLogo}
                CanvasLogo={darkLogo}
                responsiveLogo={smallDeviceLogo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style3 modify"
                TopBarClass="topbar-area dark-parimary-bg"
            /> */}
            <Header
            parentMenu='abacus-class'
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
            <HomeFiveMain />
            <FooterStyleTwo />
            {/* <SearchModal /> */}
        </React.Fragment>
    );
}


export default HomeFive;
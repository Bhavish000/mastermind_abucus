import React from 'react';
import Header from '@/component/layout/header/header';
import Head from 'next/head';
import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';
import RefundPolicyMain from '@/sectionPage/refundPolicy/RefundPolicyMain';

const Privacy = () => {
    return (
        <React.Fragment>
            <Head>
            <title>Privacy Policy - Mastermind Abacus</title> 
				 <meta name="robots" content="noindex,nofollow" />
		
				<meta name="keywords" content=""/>
		<meta name="description" content="Details about the Privacy Policy for collection, use, sharing and protection of your personal data in relation to company's website including services offered."/>
		
		
		
		<meta property="og:title" content="Privacy Policy - Mastermind Abacus"/>
		<meta property="og:site_name" content="Mastermind Abacus"/>
		<meta property="og:url" content="https://www.mastermindabacus.com/privacy-policy"/>
		<meta property="og:description" content="Details about the Privacy Policy for collection, use, sharing and protection of your personal data in relation to company's website including services offered."/>
	
					<meta property="og:type" content="article"/>
		<meta property="og:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png"/>
					<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:site" content="@mastermindabac2"/>
		<meta name="twitter:title" content="Privacy Policy - Mastermind Abacus"/>
		<meta name="twitter:description" content="Details about the Privacy Policy for collection, use, sharing and protection of your personal data in relation to company's website including services offered."/>
					<meta name="twitter:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png"/>
            </Head>
            <Header
                parentMenu='home'
                TopBar='enable'
                CanvasClass='right_menu_togle hidden-md'
                headerClass='full-width-header header-style2'
                TopBarClass='topbar-area dark-parimary-bg'
                emailAddress='support@website.com'
                phoneNumber='(+088) 589-8745'

            />
             <RefundPolicyMain/>
            <FooterStyleTwo
                footerTopClass='footer-top no-gap'
            />
            {/* <SearchModal /> */}
        </React.Fragment>
    );
}


export default Privacy;
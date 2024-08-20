import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';
import Header from '@/component/layout/header/header';
import HistoryMain from '@/sectionPage/Abacus History/HistoryMain';
import Head from 'next/head';
import React from 'react';


const History = () => {
    return (
        <React.Fragment>
            <Head>
                <title>History Of Abacus | Mastermind</title> 
		<meta property="og:description" content="History Of Abacus tool, the world's first calculating device, its origin and development. Mastermind Abacus"/>
		<meta property="og:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png"/>
                <meta property="og:title" content="History Of Abacus | Mastermind"/>
		<meta property="og:site_name" content="Mastermind Abacus"/>
		<meta property="og:url" content="https://www.mastermindabacus.com/about-abacus/history-of-abacus"/>
	
				<meta name="keywords" content="Abacus, History of Abacus, Abacus Instrument, Types of Abacus, Design of Abacus, Development Of Abacus, Abacus Math Program, Abacus Classes, Whole Brain Development, Abacus Training"/>
		<meta name="description" content="History Of Abacus tool, the world's first calculating device, its origin and development. Mastermind Abacus"/>
		
		
		
		
					<meta property="og:type" content="article"/>
					<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:site" content="@mastermindabac2"/>
		<meta name="twitter:title" content="History Of Abacus | Mastermind"/>
		<meta name="twitter:description" content="History Of Abacus tool, the world's first calculating device, its origin and development. Mastermind Abacus"/>
					<meta name="twitter:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png"/>
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
            <HistoryMain />
            <FooterStyleTwo
                footerTopClass='footer-top no-gap'
            />
            {/* <SearchModal /> */}
        </React.Fragment>
    );
}


export default History;
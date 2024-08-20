import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';
import Header from '@/component/layout/header/header';
import HomeTwelveMain from '@/sectionPage/Lingo Bingo/HomeTwelveMain';
import Head from 'next/head';
import React from 'react';

const HomeTwelve = () => {
    return (
        <React.Fragment>
            <Head>
                {/* <link rel="icon" href={favIcon} /> */}
                <title>Abacus program for 4 to 6 years old | Mastermind Lingo Bingo</title> 
				<meta name="keywords" content="lingo bingo, math classes, "/>
		<meta name="description" content="Lingo Bingo Is An Exclusive Game-Based Abacus Math Program For Kids Of 4 To 6 Years, By Mastermind Abacus"/>
		
		
		
		<meta property="og:title" content="Abacus program for 4 to 6 years old | Mastermind Lingo Bingo"/>
		<meta property="og:site_name" content="Mastermind Abacus"/>
		<meta property="og:url" content="https://www.mastermindabacus.com/lingo-bingo"/>
		<meta property="og:description" content="Lingo Bingo Is An Exclusive Game-Based Abacus Math Program For Kids Of 4 To 6 Years, By Mastermind Abacus"/>
	
					<meta property="og:type" content="article"/>
		<meta property="og:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png"/>
					<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:site" content="@mastermindabac2"/>
		<meta name="twitter:title" content="Abacus program for 4 to 6 years old | Mastermind Lingo Bingo"/>
		<meta name="twitter:description" content="Lingo Bingo Is An Exclusive Game-Based Abacus Math Program For Kids Of 4 To 6 Years, By Mastermind Abacus"/>
					<meta name="twitter:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png"/>
            </Head>

            <Header
              parentMenu='abacus-class'
              TopBar='enable'
            //   headerNormalLogo={Logo}
            //   headerStickyLogo={stickyLogo}
            //   CanvasLogo={Logo}
              CanvasClass='right_menu_togle hidden-md'
              headerClass='full-width-header header-style2'
              TopBarClass='topbar-area dark-parimary-bg'
              emailAddress='support@website.com'
              phoneNumber='(+088) 589-8745'
            />
            <HomeTwelveMain />
            <FooterStyleTwo
                footerTopClass='footer-top no-gap'
            />
            {/* <SearchModal /> */}
        </React.Fragment>
    );
}


export default HomeTwelve;


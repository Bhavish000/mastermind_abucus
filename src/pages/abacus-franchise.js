import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';
import HeaderStyleFour from '@/component/layout/header/HeaderStyleFour';
import FrnachiseMain from '@/sectionPage/Franchise/FeanchiseMain';
import Head from 'next/head';
import React from 'react';

// export const getServerSideProps = async (context) => {
//     const referrer = context.req.headers.referer || '';
    
//     return {
//       props: {
//         referrer,
//       },
//     };
//   };
const Franchise = ({referrer}) => {
    console.log('Referrer:', referrer);
    return (
        <React.Fragment>
            <Head>
                {/* <link rel="icon" href={favIcon} /> */}
                <title>Abacus Franchise | Global Business Opportunity</title> 


		<meta name="description" content="To become a part of the Mastermind Abacus Franchisee Business, inquire now to know the  process details."/>
		<meta name="keywords" content="Abacus Franchisee, Abacus Franchise, Abacus Franchisee Opportunity, Franchisee Business, Mastermind Abacus, Franchise Opportunity, Business Opportunity, Franchisee Business Opportunity, Mastermind Abacus Franchise, How to start abacus center, How to start abacus classes, Education Franchisee Opportunity, Online Abacus Franchisee, abacus classes franchise"/>
				
		
		<meta property="og:title" content="Abacus Franchise | Global Business Opportunity"/>
		<meta property="og:site_name" content="Mastermind Abacus"/>
		<meta property="og:url" content="https://www.mastermindabacus.com/abacus-franchise"/>
		<meta property="og:description" content="To become a part of the Mastermind Abacus Franchisee Business, inquire now to know the  process details."/>
	
		<meta property="og:type" content="article"/>
		<meta property="og:image" content="https://tt.mastermindschool.co.in/ab_images/mastermindabacus-logo.png"/>
		
		<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:site" content="@mastermindabac2"/>
		<meta name="twitter:title" content="Abacus Franchise | Global Business Opportunity"/>
		<meta name="twitter:description" content="To become a part of the Mastermind Abacus Franchisee Business, inquire now to know the  process details."/>
		<meta name="twitter:image" content="https://tt.mastermindschool.co.in/ab_images/mastermindabacus-logo.png"/>
            </Head>
            <HeaderStyleFour
            parentMenu='home'
            TopBar='enable'
            // headerNormalLogo={Logo}
            // headerStickyLogo={stickyLogo}
            // CanvasLogo={Logo}
            // CanvasClass='right_menu_togle hidden-md'
            headerClass='full-width-header header-style2'
            TopBarClass='topbar-area dark-parimary-bg'
            emailAddress='support@website.com'
            phoneNumber='(+088) 589-8745'
            />
            <FrnachiseMain />
            <FooterStyleTwo />
            {/* <SearchModal /> */}
        </React.Fragment>
    );
}


export default Franchise;
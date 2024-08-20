import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';
import Header from '@/component/layout/header/header';
import AbacusMathMain from '@/sectionPage/Abacus Math/AbacusMathMain';
import Head from 'next/head';
import Script from 'next/script';
import React from 'react';

const AbacusMath = () => {
    return (
        <React.Fragment>
            <Head>
                {/* <link rel="icon" href={favIcon} /> */}
                <title>Abacus Math For Kids | Abacus Math Education & Training | Mastermind Abacus</title> 
				<meta name="keywords" content="abacus math"/>
		<meta name="description" content="Mastermind Abacus provides Abacus Math Training to boost your child's Mental Math Abilities and academic performance. Enhance skills with our expert guidance. Enroll now!"/>
		
		
		
		<meta property="og:title" content="Abacus Math For Kids | Abacus Math Education & Training | Mastermind Abacus"/>
		<meta property="og:site_name" content="Mastermind Abacus"/>
		<meta property="og:url" content="https://www.mastermindabacus.com/abacus-math"/>
		<meta property="og:description" content="Mastermind Abacus provides Abacus Math Training to boost your child's Mental Math Abilities and academic performance. Enhance skills with our expert guidance. Enroll now!"/>
	
					<meta property="og:type" content="article"/>
		<meta property="og:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png"/>
					<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:site" content="@mastermindabac2"/>
		<meta name="twitter:title" content="Abacus Math For Kids | Abacus Math Education & Training | Mastermind Abacus"/>
		<meta name="twitter:description" content="Mastermind Abacus provides Abacus Math Training to boost your child's Mental Math Abilities and academic performance. Enhance skills with our expert guidance. Enroll now!"/>
					<meta name="twitter:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png"/>




          <script defer id="schema" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Mastermind Abacus Student Performing Abacus Math",
  "description": "Superfast mental math Calculations by Mastermind Abacus Student. Enjoy the magic of Abacus training with Mastermind. Abacus training is a universally accepted 'Complete Brain Development' program that activates both Left and Right Hemispheres of a child’s brain. Mastermind Abacus classes are not only about Mental Math or improving Mental Arithmetic Calculation, but also help to excel in all the subjects. CALL US: 8109055112 BOOK A FREE DEMO: https://www.mastermindabacus.com/",
  "thumbnailUrl": "https://www.youtube.com/watch?v=NUR8qrsRG8E",
  "uploadDate": "2021-09-16",
  "duration": "PT0M41S",
  "embedUrl": "https://www.youtube.com/embed/NUR8qrsRG8E",
  "potentialAction": {
    "@type": "SeekToAction",
    "target": "https://www.mastermindabacus.com/abacus-math={seek_to_second_number}",
    "startOffset-input": "required name=seek_to_second_number"
  }
`}} />
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
            <AbacusMathMain />
            <FooterStyleTwo />
            {/* <SearchModal /> */}

         



        </React.Fragment>
    );
}


export default AbacusMath;
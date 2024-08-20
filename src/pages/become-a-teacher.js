import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';
import Header from '@/component/layout/header/header';
import TeacherMain from '@/sectionPage/Teachers/TeacherMain';
import Head from 'next/head';
import React from 'react';

const TeacherSection = () => {
    return (
        <React.Fragment>
            <Head>
                {/* <link rel="icon" href={favIcon} /> */}
                <title>Abacus Teacher Training | Mastermind</title> 
				<meta name="keywords" content="abacus teachers training, abacus training, teachers training, abacus teacher training center, abacus teacher traning in india, abacus teaching, become a abacus teacher"/>
		<meta name="description" content="Get abacus teacher training at mastermind and access to the world's most advanced abacus learning portal."/>
		
		
		
		<meta property="og:title" content="Abacus Teacher Training | Mastermind"/>
		<meta property="og:site_name" content="Mastermind Abacus"/>
		<meta property="og:url" content="https://www.mastermindabacus.com/become-a-teacher"/>
		<meta property="og:description" content="Get abacus teacher training at mastermind and access to the world's most advanced abacus learning portal."/>
	
					<meta property="og:type" content="article"/>
		<meta property="og:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png"/>
					<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:site" content="@mastermindabac2"/>
		<meta name="twitter:title" content="Abacus Teacher Training | Mastermind"/>
		<meta name="twitter:description" content="Get abacus teacher training at mastermind and access to the world's most advanced abacus learning portal."/>
					<meta name="twitter:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png"/>
            </Head>
           
            <Header
            parentMenu='teacher'
            TopBar='enable'
            headerClass='full-width-header header-style2'
            TopBarClass='topbar-area dark-parimary-bg'
            emailAddress='support@website.com'
            phoneNumber='(+088) 589-8745'
            />
            <TeacherMain />
            <FooterStyleTwo />
            {/* <SearchModal /> */}
        </React.Fragment>
    );
}


export default TeacherSection;
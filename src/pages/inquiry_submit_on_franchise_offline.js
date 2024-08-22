import Head from 'next/head';
import React from 'react';
import FooterBottom from '@/component/layout/Footer/FooterBottom';
import Franchise_Header from '@/sectionPage/franchisee_inquiry_form/Franchise_Header';
import Successfully from '@/sectionPage/franchisee_inquiry_form/Submitted_Successfully_Page/SubmittedSuccessfully';

const Submitted_Successfully = () => {
    return (
        <React.Fragment>
            <Head>
                {/* <link rel="icon" href={favIcon} /> */}
                <title>Abacus Franchise | Mastermind Abacus</title>
            </Head>
            <Franchise_Header
                parentMenu='home'
                TopBar='enable'
                // CanvasClass='right_menu_togle hidden-md'
                headerClass='full-width-header header-style2'
                TopBarClass='topbar-area dark-parimary-bg'
                emailAddress='support@website.com'
                phoneNumber='(+088) 589-8745'
            />
            <Successfully/>
            <FooterBottom />
            {/* <SearchModal /> */}
        </React.Fragment>
    );
}


export default Submitted_Successfully;
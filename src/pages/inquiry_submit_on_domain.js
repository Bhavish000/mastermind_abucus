import FooterBottom from '@/component/layout/Footer/FooterBottom';
import Franchise_Header from '@/sectionPage/franchisee_inquiry_form/Franchise_Header';
import Successfully from '@/sectionPage/Student Landing page/Submitted_Successfully_Page/SubmittedSuccessfully';
import Head from 'next/head';
import React from 'react';

const Submitted = () => {
    return (
        <React.Fragment>
            <Head>
            <title>Abacus Student | Mastermind Abacus</title>
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


export default Submitted;
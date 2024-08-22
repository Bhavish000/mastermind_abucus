import FooterBottom from '@/component/layout/Footer/FooterBottom';
import { useInquiry } from '@/context/inquiryContext';
import Franchise_Header from '@/sectionPage/franchisee_inquiry_form/Franchise_Header';
import Successfully from '@/sectionPage/Student Landing page/Submitted_Successfully_Page/SubmittedSuccessfully';
import Head from 'next/head';
import React, { useEffect } from 'react';

const Submitted = () => {
    
    const { data } = useInquiry();
    console.log('data ' + data)

    const onclick = () => {
        if(data){
            window.location.replace(data);
        }
    }
    useEffect(() => {
        if (data) {
            // Wait for 3 seconds before redirecting
            const timer = setTimeout(() => {
                window.location.replace(data);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [data]);

    // if(!data){
    //     return(
    //         <div style={{backgroundColor:'#fff'}}></div>
    //     )
    // }
    return (
        <React.Fragment>
            <Head>
            <title>Abacus Student | Mastermind Abacus</title>
            </Head>
            {/* <Franchise_Header
                parentMenu='home'
                TopBar='enable'
                // CanvasClass='right_menu_togle hidden-md'
                headerClass='full-width-header header-style2'
                TopBarClass='topbar-area dark-parimary-bg'
                emailAddress='support@website.com'
                phoneNumber='(+088) 589-8745'
            /> */}
            <Successfully click={onclick}/>
            <FooterBottom />
            {/* <SearchModal /> */}
        </React.Fragment>
    );
}


export default Submitted;
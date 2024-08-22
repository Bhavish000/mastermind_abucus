import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';
import Header from '@/component/layout/header/header';
import DeliveryMain from '@/sectionPage/deliverypage/DeliveryMain';
import Head from 'next/head';
import React from 'react';

const Deliver = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Shipping Delivery Policy - Mastermind Abacus</title>
                <meta name="robots" content="noindex,nofollow" />

                <meta name="keywords" content="" />
                <meta name="description" content="Get a complete understanding of the Shipping and Delivery Policy of Mastermind Abacus. About the trackingprocess of despatched goods through couriers." />



                <meta property="og:title" content="Shipping Delivery Policy - Mastermind Abacus" />
                <meta property="og:site_name" content="Mastermind Abacus" />
                <meta property="og:url" content="https://www.mastermindabacus.com/shipping-delivery-policy" />
                <meta property="og:description" content="Get a complete understanding of the Shipping and Delivery Policy of Mastermind Abacus. About the trackingprocess of despatched goods through couriers." />

                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://tt.mastermindschool.co.in/ab_images/mastermindabacus-logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@mastermindabac2" />
                <meta name="twitter:title" content="Shipping Delivery Policy - Mastermind Abacus" />
                <meta name="twitter:description" content="Get a complete understanding of the Shipping and Delivery Policy of Mastermind Abacus. About the trackingprocess of despatched goods through couriers." />
                <meta name="twitter:image" content="https://tt.mastermindschool.co.in/ab_images/mastermindabacus-logo.png" />
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
            <DeliveryMain />
            <FooterStyleTwo
                footerTopClass='footer-top no-gap'
            />
            {/* <SearchModal /> */}
        </React.Fragment>
    );
}


export default Deliver;
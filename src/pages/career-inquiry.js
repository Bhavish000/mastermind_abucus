import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';
import Header from '@/component/layout/header/header';
import CareerMain from '@/sectionPage/career/CarrerMain';
import Head from 'next/head';
import React from 'react';


const Career = () => {
    return (
        <React.Fragment>
            <Head>
                {/* <link rel="icon" href={favIcon} /> */}
                <title>Best Abacus Training Centre Contact | Mastermind Abacus</title>
                <meta name="keywords" content="Best Abacus Training Centre, Abacus Trainers, Abacus Training, Best Abacus Franchise, Contact Best Abacus Franchise, Best Abacus Company, Best Abacus Company In India." />
                <meta name="description" content="Mastermind Abacus a leading Abacus Training Company; having global presence with 2000-plus centers across 16 countries. Contact us for details." />



                <meta property="og:title" content="Best Abacus Training Centre Contact | Mastermind Abacus" />
                <meta property="og:site_name" content="Mastermind Abacus" />
                <meta property="og:url" content="https://www.mastermindabacus.com/contact" />
                <meta property="og:description" content="Mastermind Abacus a leading Abacus Training Company; having global presence with 2000-plus centers across 16 countries. Contact us for details." />

                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@mastermindabac2" />
                <meta name="twitter:title" content="Best Abacus Training Centre Contact | Mastermind Abacus" />
                <meta name="twitter:description" content="Mastermind Abacus a leading Abacus Training Company; having global presence with 2000-plus centers across 16 countries. Contact us for details." />
                <meta name="twitter:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png" />
            </Head>
            <Header
                parentMenu='contact'
                TopBar='enable'
                CanvasClass='right_menu_togle hidden-md'
                headerClass='full-width-header header-style2'
                TopBarClass='topbar-area dark-parimary-bg'
                emailAddress='support@website.com'
                phoneNumber='(+088) 589-8745'

            />
            {/* Header */}

            {/* ContactMain Section Start */}
            <CareerMain />
            {/* ContactMain Section End */}



            {/* Footer */}
            <FooterStyleTwo
                footerTopClass='footer-top no-gap'
            />
            {/* Footer */}

            {/* scrolltop-end */}
        </React.Fragment>

    );
}


export default Career;
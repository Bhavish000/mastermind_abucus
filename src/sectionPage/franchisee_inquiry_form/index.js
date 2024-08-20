import React from 'react';
import { Helmet } from 'react-helmet'
import OffWrap from '../../components/Layout/Header/OffWrap';

// import FooterStyleTwo from '../../components/Layout/Footer/FooterStyleTwo';
// import HomeFiveMain from './HomeFiveMain';

import favIcon from '../../assets/img/fav.png';
// import HeaderStyleFive from '../../components/Layout/Header/HeaderStyleFive';
import FranchiseeBanner from './FranchiseeBanner';
import Franchise_Header from './Franchise_Header';
import RredLineSection from '../home-6/RredLineSection';
import FooterBottom from '../../components/Layout/Footer/FooterBottom';

const franchisee_inquiry = () => {
    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <OffWrap />
            {/* <HeaderStyleThree
                parentMenu='home'
                headerNormalLogo={Logo}
                headerStickyLogo={stickyLogo}
                CanvasLogo={darkLogo}
                responsiveLogo={smallDeviceLogo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style3 modify"
                TopBarClass="topbar-area dark-parimary-bg"
            /> */}
            <Franchise_Header
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
            <FranchiseeBanner />
            <RredLineSection />
            <FooterBottom />
            {/* <SearchModal /> */}
        </React.Fragment>
    );
}


export default franchisee_inquiry;
import React from 'react';
import { Helmet } from 'react-helmet'
// import favIcon from '../../../assets/img/fav.png';
// import OffWrap from '../../../Layout/Header/OffWrap';
// import Franchise_Header from '../Franchise_Header';
// import FooterBottom from '../../../components/Layout/Footer/FooterBottom';
import Successfully from './SubmittedSuccessfully';
// import FooterBottom from '../../../Layout/Footer/FooterBottom';
// import Franchise_Header from '../../../../pages/franchisee_inquiry_form/Franchise_Header';
import FooterBottom from '../../../components/Layout/Footer/FooterBottom';
import Franchise_Header from '../../franchisee_inquiry_form/Franchise_Header';
import OffWrap from '../../../components/Layout/Header/OffWrap';

const Submitted = () => {
    return (
        <React.Fragment>
            <Helmet>
            <title>Abacus Student | Mastermind Abacus</title>
            </Helmet>
            <OffWrap />
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
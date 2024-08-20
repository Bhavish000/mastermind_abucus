import React from 'react';
// import HistorySection from './HistorySection';
import BannerHistory from './HistoryBanner';
import ScrollToTop from '@/component/Common/ScrollTop';
import HistorySection from './HistorySection';


const HistoryMain = () => {

    return (
        <React.Fragment>
            
            <BannerHistory/>
            <HistorySection/>

            <ScrollToTop status={'bookclass'} />
            
        </React.Fragment>
    )
}

export default HistoryMain;
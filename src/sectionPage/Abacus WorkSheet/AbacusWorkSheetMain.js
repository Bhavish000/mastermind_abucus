import ScrollToTop from '@/component/Common/ScrollTop';
import React from 'react';
import BannerWorkSheet from './BannerWorkSheet';
import DownloadAbacus from './DownloadAbacus';
import WorksheetForm from './WorksheetForm';
import AbacusTrainer from './AbacusTrainer';
import AbacusParent from './AbacusParent';
import AbacusPlatform from './AbacusPlatform';


const AbacusWorkSheetMain = () => {

    return (
        <React.Fragment>
            
            <BannerWorkSheet/>
             <DownloadAbacus/>
             <WorksheetForm/>
             <AbacusTrainer/>
             <AbacusParent/>
             <AbacusPlatform/>
             <ScrollToTop status={'bookclass'} />
        </React.Fragment>
    )
}

export default AbacusWorkSheetMain;
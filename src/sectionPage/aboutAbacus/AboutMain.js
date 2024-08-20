import React from 'react';
import ScrollToTop from '@/component/Common/ScrollTop';
import BannerAbout from './BannerAbout';
import AboutSection from './AboutSection';
import AbacusDifferent from './AbacusDifferent';
import WhatWeDo from './WhatWeDo';
import Team from './TeamSection';
import WhatNext from './WhatNext';
import Presence from './Presence';


const AboutMain = () => {

    return (
        <React.Fragment>

            <BannerAbout/>
              <AboutSection/>
             <AbacusDifferent/>
             <WhatWeDo/>
             <Team />
            <WhatNext/>
            <Presence/>
           
			<ScrollToTop
				scrollClassName="scrollup orange-color"
			/>

        </React.Fragment>
    )
}

export default AboutMain;
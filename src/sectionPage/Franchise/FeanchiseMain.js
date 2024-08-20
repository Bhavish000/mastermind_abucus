// import BannerStyleFour from '@/component/banner/BannerFanchise';
import ScrollToTop from '@/component/Common/ScrollTop';
import React from 'react';
import AboutFanrchise from './AboutSection';
import FranchiseVideo from './FranchiseVideo';
import AboutWork from './AboutWorkSection';
import AbacusHistroy from './AbacusHistry';
import BecomePart from './BecomePart';
import FranchiseBenefits from './FranchiseBenefits';
import BecomeFranchise from './BecomeFranchise';
import MapSection from '../home/MapSection';
import MapBottom from './MapBottom';
import BannerStyleFour from '@/component/banner/BannerStyleFour';
import FaqSection from './FaqSection';

const FrnachiseMain = () => {
	return (
		<React.Fragment>

			{/* BannerStyleFour-Start */}
			<BannerStyleFour />
			{/* BannerStyleFour-End */}

			{/* About-Start */}
			<AboutFanrchise />
			{/* About-End */}

			<FranchiseVideo />

			{/* About-Work-Start */}
			<AboutWork />
			{/* About-Work-End */}

            <AbacusHistroy/>
			

			<BecomePart />

			<FranchiseBenefits />

			<BecomeFranchise/>

             <FaqSection/>
			 
			<MapSection />


			<MapBottom />
			

			{/* scrolltop-start */}
			<ScrollToTop status={'FRANCHISE'} name={'FRANCHISE INQUIRY'}/>
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default FrnachiseMain;
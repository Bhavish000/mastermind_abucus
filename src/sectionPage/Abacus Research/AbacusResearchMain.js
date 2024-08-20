import ScrollToTop from '@/component/Common/ScrollTop';
import React from 'react';
import BannerResearch from './BannerResearch';
import About from './AboutSection';

const AbacusResearchMain = () => {
	return (
		<React.Fragment>

			{/* BannerStyleFour-Start */}
			<BannerResearch />
			{/* BannerStyleFour-End */}

			{/* About-Start */}
			<About />
			{/* About-End */}

			<ScrollToTop status={'bookclass'} />
			
		</React.Fragment>
	);
}

export default AbacusResearchMain;
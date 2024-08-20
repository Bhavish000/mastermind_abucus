import BannerShcool from '@/component/banner/BannerShcool';
import React from 'react';
import About from './AboutSection';
import WhyAbacus from './WhyAbacus';
import OfflineAbacus from './OfflineAbacus';
import Advantages from './Advantages';

const AbacusShcoolMain = () => {

	return (
		<React.Fragment>
			{/* Banner-area-start */}
			<BannerShcool />
			{/* Banner-area-end */}

			{/* About-area-start */}
			<About />
			{/* About-area-end */}

			{/* About-area-start */}
			<WhyAbacus />
			{/* About-area-end */}

			<OfflineAbacus/>

			<Advantages/>
			
		</React.Fragment>
	);
}

export default AbacusShcoolMain;
import BannerWhatAbacus from '@/component/banner/BannerWhatAbacus';
import React from 'react';
import GateWayAbacus from './GateWayAbacus';
import OnlineClassSection from './OnlineClassSection';
import MentalMath from './MentalMath';
const WhatAbacusMain = () => {

	return (
		<React.Fragment>
			{/* Banner-area-start */}
			<BannerWhatAbacus />
			{/* Banner-area-end */}

			 <GateWayAbacus/>
			
			 <OnlineClassSection/>

		    <MentalMath/>

			{/* <ScrollToTop status={'bookclass'} /> */}
			
		</React.Fragment>
	);
}

export default WhatAbacusMain;
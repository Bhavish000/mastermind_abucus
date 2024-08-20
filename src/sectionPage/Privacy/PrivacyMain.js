import React from 'react';
import PrivacyContent from './PrivacyContent';
import ScrollToTop from '@/component/Common/ScrollTop';


const PrivacyMain = () => {

	return (
		<React.Fragment>

            <PrivacyContent/>
			
			{/* scrolltop-start */}
			<ScrollToTop />
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default PrivacyMain;
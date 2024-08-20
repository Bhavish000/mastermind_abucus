import React from 'react';
import TermsContent from './termsContent';
import ScrollToTop from '@/component/Common/ScrollTop';


const TermsMain = () => {

	return (
		<React.Fragment>

            <TermsContent/>
			
			{/* scrolltop-start */}
			<ScrollToTop />
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default TermsMain;
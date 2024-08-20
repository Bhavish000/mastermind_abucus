import ScrollToTop from '@/component/Common/ScrollTop';
import React from 'react';
import RefundConent from './RefundContent';


const RefundPolicyMain = () => {

	return (
		<React.Fragment>

            <RefundConent/>
			
			{/* scrolltop-start */}
			<ScrollToTop />
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default RefundPolicyMain;
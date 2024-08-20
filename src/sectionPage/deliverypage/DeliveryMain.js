import React from 'react';
import DeliverContent from './DeliveryContent';
import ScrollToTop from '@/component/Common/ScrollTop';


const DeliveryMain = () => {

	return (
		<React.Fragment>

            <DeliverContent/>
			
			{/* scrolltop-start */}
			<ScrollToTop />
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default DeliveryMain;
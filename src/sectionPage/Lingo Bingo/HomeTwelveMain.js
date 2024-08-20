import BannerStyleEight from '@/component/banner/BannerStyleEight';
import ScrollToTop from '@/component/Common/ScrollTop';
import React from 'react';
import About from './AboutSection';
import Benefit from './BenefitSection';
import Courses from './CourseSection';


const HomeTwelveMain = () => {
	return (
		<React.Fragment>
			{/* Banner-area-start */}
			<BannerStyleEight />
			{/* Banner-area-end */}

			<About/>

            <Benefit/>

			<Courses />

			<ScrollToTop status={'bookclass'} />
		
		</React.Fragment>
	);
}

export default HomeTwelveMain;
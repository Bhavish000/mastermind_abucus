import React from 'react';
import BannerNearMe from '@/component/banner/BannerNearMe';
import ScrollToTop from '@/component/Common/ScrollTop';
import About from './AboutSection';
import Courses from './CoursesSection';
import Cta from './CtaSection';
const HomeFiveMain = () => {
	return (
		<React.Fragment>

			{/* BannerStyleFour-Start */}
			<BannerNearMe />
			{/* BannerStyleFour-End */}

			{/* About-Start */}
			<About />
			{/* About-End */}

			{/* Courses-Start */}
			<Courses />
	
			<Cta
				ctaClass="rs-cta"
				ctaTitle="Admission Open for 2020"
				ctaDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eius to mod tempor incididunt ut labore et dolore magna aliqua. Ut enims ad minim veniam. Aenean massa. Cum sociis natoque penatibus et magnis."
				btnText="Apply Now"
			/>
		    <ScrollToTop status={'offline'} name={'Raise an Inquiry'}/>
		</React.Fragment>
	);
}

export default HomeFiveMain;
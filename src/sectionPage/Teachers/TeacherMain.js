import React from 'react';
import TeacherBanner from './TeacherBanner';
import About from './AboutSection';
import HowBecomeTeacher from './HowBecomeTeacher';
import TeacherBenefite from './TeacherBenefite';
import StudentAction from './StudentAction';
import MapSection from '../home/MapSection';
import MapBottom from './MapBottom';
// import ScrollToTop from '@/component/Common/ScrollTop';

const TeacherMain = () => {
	return (
		<React.Fragment>

			{/* BannerStyleFour-Start */}
			<TeacherBanner />
			{/* BannerStyleFour-End */}

			{/* About-Start */}
			<About />
			{/* About-End */}


			<HowBecomeTeacher />


			<TeacherBenefite />

			<StudentAction />

			<MapSection />
			<MapBottom />
		

			{/* scrolltop-start */}
			{/* <ScrollToTop /> */}
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default TeacherMain;
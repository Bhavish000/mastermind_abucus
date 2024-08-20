import Image from 'next/image';
import React from 'react';

const 	SiteBreadcrumb = (props) => {
	const { breadcrumbsClass,status, innerClass, titleClass, pageTitle,  breadcrumbsImg } = props;

	return (
		<div className={breadcrumbsClass ? breadcrumbsClass : 'rs-breadcrumbs breadcrumbs-overlay'}>
			 
			<div className="breadcrumbs-img">
		
				<Image 
					src={breadcrumbsImg} 
					alt="Breadcrumbs Image" 
				/>
			</div>
			<div className={innerClass ? innerClass : 'breadcrumbs-text white-color'}>
				{status === '1' ? <h2 className={titleClass ? titleClass : 'page-title'}>{pageTitle ? pageTitle : ''}</h2> : <h1 className={titleClass ? titleClass : 'page-title'}>{pageTitle ? pageTitle : ''}</h1> }
			</div>
		</div>
	);
}

export default SiteBreadcrumb;





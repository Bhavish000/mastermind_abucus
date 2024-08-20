import React from 'react';

import heartIcon from '@/styles/img/icon/heart.png';
import Image from 'next/image';

const SectionTitle = (props) => {
    const { sectionClass, titleClass, subTitleClass, descClass, title, subtitle, description, logoClass, titleIcon } = props;

    return (
        <div className={ sectionClass ? sectionClass : 'sec-title5 mb-60 text-center'}>
            <div className={ logoClass ? logoClass : 'logo-icon'}>
                <Image src={ titleIcon ? titleIcon : heartIcon} alt={title} />
            </div>
            <span className={ subTitleClass ? subTitleClass : 'sub-title'}>{ subtitle ? subtitle : ''}</span>
            <h2 className={ titleClass ? titleClass : 'title'}>{ title ? title :''}</h2>
            <p className={ descClass ? descClass : 'desc'}>{ description ? description : ''}</p>
        </div>
    );
}

export default SectionTitle
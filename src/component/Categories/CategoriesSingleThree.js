import Image from 'next/image';
import React from 'react';
// import { Link } from 'react-router-dom';

const CategoriesSingleThree = (props) => {
    const { categoriesClass, iconImg, title, } = props;

    return (
        <div className={categoriesClass ? categoriesClass : 'subject-wrap bgc1'}>
            <Image 
                src={iconImg}
                alt={title}
            />
            <div className="content-part">
                <div className="title">
            
                        {title ? title : ''}
                
                </div>
                <span className="course-qnty"> </span>
            </div>
        </div>
    )
}

export default CategoriesSingleThree
import React from 'react';
// import { Link } from 'react-router-dom'

const CategoriesSingleTwo = (props) => {
    const { categoriesClass, title, courseQuantity } = props;

    return (
        <div className={categoriesClass ? categoriesClass : 'categories-item'} >
            {/* <div className="icon-part">
                <img
                    src={iconImg}
                    alt={title}
                />
            </div> */}
            <div className="content-part">
                <div className="title">{title ? title : 'General Education'}</div>
                <span className="courses">{courseQuantity ? courseQuantity : ''} </span>
            </div>
        </div>
    )
}

export default CategoriesSingleTwo
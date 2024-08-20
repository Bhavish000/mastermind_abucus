import React from 'react';
// import { Link } from 'react-router-dom';

const SingleServiceThree = (props) => {
    const { itemClass, Title} = props;
    return (
        <div className={itemClass ? itemClass : 'services-wrap bg1'}>
            <div className="services-item">
                <div className="services-desc">
                    <div className="title">
                            {Title ? Title : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleServiceThree
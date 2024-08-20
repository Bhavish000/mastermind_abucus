import Image from 'next/image';
import React from 'react';

const CourseSingleTwo = (props) => {
    const { courseClass, courseImg,  } = props;

    return (
        
        <div className={courseClass ? courseClass : 'courses-item'}>
            
            <div className="img-part">
                <Image
                    src={courseImg}
                    alt="Mastermind Abacus"
                />
             </div>
             
        </div>
    )
}

export default CourseSingleTwo
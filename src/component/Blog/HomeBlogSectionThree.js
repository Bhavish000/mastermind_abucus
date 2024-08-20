import React, { useEffect, useState } from 'react';
// import Slider from "react-slick";
// import SinglePostThree from './SinglePostThree';
// import ErrorContent from '../Error';
import ErrorContent from 'next/error';
import Slider from 'react-slick';
import SinglePostThree from './SinglePostThree';
// import Slider from 'react-slick';

function BlogPartThree () {
    const [error, setError] = useState(null);
    const [BlogData, setBlogData] = useState('');

    function NextArrow(props) {
        const { className, onClick } = props;
        return (
            <div className='position-absolute top-0 start-50 translate-middle-x'>
                <button type='button'  onClick={onClick} className={className} aria-label="rightArrow" ><i className="fa-solid fa-circle-chevron-right orange-color "></i></button>
            </div>
        );
    }

    function PrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div className='position-absolute top-0 start-50 translate-middle-x'>
            <button type='button' onClick={onClick} className={className} aria-label="left-Arrow" > <i className="fa-solid fa-circle-chevron-left orange-color  "></i></button>
            </div>

        );
    }


    const slilderSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        className: "active",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    // arrows: false,
                }
            }
        ]
    };



    useEffect(() => {
        const Handle_blog_api = async () => {
            try {
                const response = await fetch('https://tt.mastermindschool.co.in/api/abacus_blog_list');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data)
                setBlogData(data.data)

            } catch (error) {
                setError(error);
            }
        };

        Handle_blog_api();
    }, [BlogData]);



    return (
        <React.Fragment>
            <Slider {...slilderSettings}>
                 {BlogData ? 
                    BlogData?.map((item,index)=>(
                     <div key={index}>
                           <SinglePostThree
                        
                        blogImage={item.image_url}
                        blogTitle={item.subject}
                        blogDesc={item.shot_content}    
                        blogurl={item.blog_url}
                    />
                     </div>
                    ))                   
                    :null 
                }  
            </Slider>
        </React.Fragment>
    );

}

export default BlogPartThree;
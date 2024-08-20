import React, { useState } from 'react';
import image2 from '@/styles/img/abacus/student_in_action_5.webp'
import image3 from '@/styles/img/abacus/student_in_action_3.webp'
import image1 from '@/styles/img/abacus/student_in_action_8.webp'
import Image from 'next/image';
import ModalVideo from 'react-modal-video';
import Slider from 'react-slick';

function Courses () {

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
        // arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        className: "active ",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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

    const [isOpen, setIsOpen] = useState(false);
    const [viedoid, setviedoid] = useState('')
    const openModal = (id) => {
        setviedoid(id)
        setIsOpen(!isOpen);
    }

    return (
        <React.Fragment>
            {/* <Suspense fallback={<div className='text-center' style={{height:"380px"} }>Loading...</div>}> */}
            <div id="rs-team" className="rs-popular-courses style4 pt-80 pb-100 md-pt-70 md-pb-40 rs-team style1 nav-style2 back2-color"  >
                <ModalVideo channel='youtube' isOpen={isOpen} videoId={viedoid} onClose={() => { openModal(); }} />
                <div className="container"  >
                    <div className="row y-middle mb-10 ">
                        <div className=" text-center">
                            <div className="sec-title  text-center mb-50 md-mb-30">
                                <h2 className="title family mb-14 sm-mb-6">
                                    WATCH LIGHTNING FAST MENTAL MATH CALCULATIONS AT <span className='title-change'>MASTERMIND ABACUS ACADEMY</span>
                                </h2>
                                <div className="desc ">
                                    At Mastermind <span className='font-bold'>Abacus Academy</span>, our students are trained to perform mental math with unparalleled speed and accuracy, often outpacing calculators. Witness the impressive skills of our students as they demonstrate their mental math prowess.
                                </div>
                            </div>

                        </div>
                    </div>
                   
                        <Slider {...slilderSettings}>
                            <div className="Image-part media-icon d-flex justify-content-center">

                                <div className='courses-item '>
                                    {/* <LazyLoad height={150} offset={125}> */}
                                        <Image
                                            src={image1}
                                            alt="Mastermind Abacus"
                                        />
                                    {/* </LazyLoad> */}

                                </div>
                                <button className="popup-videos" onClick={() => { openModal('mwL9vi4F9Tg'); }}>.</button>
                            </div>


                            <div className="Image-part media-icon d-flex justify-content-center">
                                <div className='courses-item'>
                                    {/* <LazyLoad height={150} offset={125}> */}

                                        <Image
                                            src={image2}
                                            alt="Mastermind Abacus"
                                        />
                                    {/* </LazyLoad> */}
                                </div>
                                <button className="popup-videos" onClick={() => { openModal('Y--QDTsdeyg'); }}>.</button>
                            </div>

                            <div className="Image-part media-icon d-flex justify-content-center">
                                <div className='courses-item'>
                                    {/* <LazyLoad height={150} offset={125}> */}

                                        <Image
                                            src={image3}
                                            alt="Mastermind Abacus"
                                        />
                                    {/* </LazyLoad> */}
                                </div>
                                <button className="popup-videos" onClick={() => { openModal('nyAYbO7aCIk'); }}>.</button>
                            </div>

                            <div className="Image-part media-icon d-flex justify-content-center">
                                <div className='courses-item'>
                                    {/* <LazyLoad height={150} offset={125}> */}

                                        <Image
                                            src={image1}
                                            alt="Mastermind Abacus"
                                        />
                                    {/* </LazyLoad> */}
                                </div>
                                <button className="popup-videos" onClick={() => { openModal('mwL9vi4F9Tg'); }}>.</button>
                            </div>

                            <div className="Image-part media-icon d-flex justify-content-center">
                                <div className='courses-item'>
                                    {/* <LazyLoad height={150} offset={125}> */}

                                        <Image
                                            src={image2}
                                            alt="Mastermind Abacus"
                                        />
                                    {/* </LazyLoad> */}
                                </div>
                                <button className="popup-videos" onClick={() => { openModal('Y--QDTsdeyg'); }}>.</button>
                            </div>

                            <div className="Image-part media-icon d-flex justify-content-center">
                                {/* <LazyLoad height={150} offset={125}> */}

                                    <Image
                                        src={image3}
                                        alt="Mastermind Abacus"
                                    />
                                {/* </LazyLoad> */}
                                <button className="popup-videos" onClick={() => { openModal('nyAYbO7aCIk'); }}>.</button>
                            </div>


                        </Slider>
                    
                </div>
            </div>
            {/* </Suspense> */}
        </React.Fragment>
    )
}

export default Courses;
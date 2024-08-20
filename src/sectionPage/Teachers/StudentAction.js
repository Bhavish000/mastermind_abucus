import React, { useState } from 'react';
import Slider from "react-slick";
import image1 from '@/styles/img/abacus/student_in_action_8.webp'
import image2 from '@/styles/img/abacus/student_in_action_5.webp'
import image3 from '@/styles/img/abacus/student_in_action_3.webp'
import ModalVideo from 'react-modal-video';
import SectionTitle from '@/component/Common/SectionTitle';
import CourseSingleTwo from '@/component/Courses/CourseSingleTwo';

const StudentAction = () => {
    const [videoId, setvideoId] = useState('')

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
        className: "active",
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
    const openModal = (value) => {
        setvideoId(value)
        setIsOpen(!isOpen)
    };

    return (
        <React.Fragment>
            <div id="rs-team" className="rs-popular-courses style4 pt-80 pb-30 md-pt-70 md-pb-0 rs-team style1 nav-style2 back2-color" >
                <ModalVideo channel='youtube' isOpen={isOpen} videoId={videoId} onClose={() => { openModal(); }} />
                <div className="container">


                    <div className="row y-middle mb-10 order-last ">
                        <div className=" text-center">
                        <SectionTitle
                        sectionClass="sec-title text-center mb-20 md-mb-30"
                        // bottomSubTitleClass="sub-title mb-0"
                        // bottomSubTitle="At Mastermind Abacus Academy, our students are trained to perform mental math with unparalleled speed and accuracy, often outpacing calculators. Witness the impressive skills of our students as they demonstrate their mental math prowess."
                        titleClass="title family mb-50 "
                        title={<>STUDENTS IN <span className='title-change'>ACTION</span></>}
                    />

                        </div>
                    </div>

                    <Slider {...slilderSettings}>
                        <div className="img-part media-icon">
                            <CourseSingleTwo
                                courseClass="courses-item"
                                courseImg={image1}
                            />
                            <a className="popup-videos" onClick={() => { openModal('mwL9vi4F9Tg'); }}>.</a>
                        </div>


                        <div className="img-part media-icon">
                            <CourseSingleTwo
                                courseClass="courses-item"
                                courseImg={image2}
                            />
                            <a className="popup-videos" onClick={() => { openModal('Y--QDTsdeyg'); }}>.</a>
                        </div>

                      

                        <div className="img-part media-icon">
                            <CourseSingleTwo
                                courseClass="courses-item"
                                courseImg={image1}
                            />
                            <a className="popup-videos" onClick={() => { openModal('mwL9vi4F9Tg'); }}>.</a>
                        </div>

                        <div className="img-part media-icon">
                            <CourseSingleTwo
                                courseClass="courses-item"
                                courseImg={image3}
                            />
                            <a className="popup-videos" onClick={() => { openModal('nyAYbO7aCIk'); }}>.</a>
                        </div>

                        <div className="img-part media-icon">
                            <CourseSingleTwo
                                courseClass="courses-item"
                                courseImg={image2}
                            />
                            <a className="popup-videos" onClick={() => { openModal('Y--QDTsdeyg'); }}>.</a>
                        </div>

                        <div className="img-part media-icon">
                            <CourseSingleTwo
                                courseClass="courses-item"
                                courseImg={image3}
                            />
                            <a className="popup-videos" onClick={() => { openModal('nyAYbO7aCIk'); }}>.</a>
                        </div>


                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default StudentAction;
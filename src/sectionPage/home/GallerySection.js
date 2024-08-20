import React, { useCallback, useState } from 'react';
import Slider from "react-slick";
// import SectionTitle from '../../components/Common/SectionTitle';
// import Carousel, { Modal, ModalGateway } from "react-images";

// Team Members
import image1 from '@/styles/img/abacus/1-small.jpg'
import image2 from '@/styles/img/abacus/2-small.jpg'
import image3 from '@/styles/img/abacus/3-small.jpg'
import image4 from '@/styles/img/abacus/4-small.jpg'
import image5 from '@/styles/img/abacus/5-small.jpg'
import image6 from '@/styles/img/abacus/6-small.jpg'
import image7 from '@/styles/img/abacus/8-small.jpg'
// import { Carousel, Modal } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import Carousel, { Modal, ModalGateway } from 'react-images';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'



function GallerySection () {
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const openLightbox = useCallback((index) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setViewerIsOpen(false);
    };

    // Inline styles for modal
    const modalStyles = {
        blanket: (base) => ({
            ...base,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }),
        positioner: (base) => ({
            ...base,
            alignItems: 'center',
        }),
        dialog: (base) => ({
            ...base,
            backgroundColor: '#fff',
            padding: '5px',
            borderRadius: '5px',
            maxWidth: '500px',
            // width: '100%',
        }),
    };

    // Inline styles for carousel images
    const customImageStyles = {
        border: '2px solid #ddd',
        borderRadius: '5px',
        width: '100%'
    };

    // Custom component for the carousel image view to apply styles
    const CustomView = ({ data }) => (
        <Image src={data.source} alt="Mastermind Abacus" style={customImageStyles} />
    );




    const photos = [
        {
            source: image1,
        },
        {
            source: image2,
        },
        {
            source: image3,
        },
        {
            source: image4,
        },
        {
            source: image5,
        },
        {
            source: image6,
        },
        {
            source: image7,
        },

    ];

    function NextArrow(props) {
        const { className, onClick } = props;
        return (
            <div className='position-absolute top-0 start-50 translate-middle-x'>
                <button type='button'  onClick={onClick} className={className} aria-label="rightArrow" ><i className="fa-solid fa-circle-chevron-right orange-color ml-30 "></i></button>
            </div>
        );
    }

    function PrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div className='position-absolute top-0 start-50 translate-middle-x'>
            <button type='button' onClick={onClick} className={className} aria-label="left-Arrow" > <i className="fa-solid fa-circle-chevron-left orange-color   "></i></button>
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

    return (
        <React.Fragment>
            <div id="rs-team" className="rs-team style1 nav-style2 gray-bg pt-50 pb-80 md-pt-64 md-pb-40 " style={{ backgroundColor: "#d6d6d6" }} >
                <div className="container">
                    <div className="row y-middle mb-0 md-mb-30">
                        <div className=" text-center">
                          
                            <div className="sec-title  ">
                                <h2 className="title fs-3 family mb-60">
                                PHOTO <span className='title-change'>GALLERY</span>
                                </h2>
                                <div className="desc ">

                                </div>
                            </div>

                        </div>
                    </div>
                    <Slider {...slilderSettings}>
                        {photos.map((image, index) => (
                            <Image
                                key={index}
                                src={image.source}
                                alt={`Slide ${index}`}
                                onClick={() => openLightbox(index)}
                                className='popup-video m-2'
                            />
                        ))}

                    </Slider>
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox} styles={modalStyles}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={photos}
                                    components={{ View: CustomView }}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                    <div className='d-flex justify-content-center w-full mt-30' >
                        <div className="banner-btn d-flex justify-content-between aling-items-center">
                            <Link href="/gallery" className="readon2 banner-style " >View All</Link>
                        </div></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GallerySection;
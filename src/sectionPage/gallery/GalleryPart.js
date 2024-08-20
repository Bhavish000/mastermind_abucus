import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Image from "next/image";

const GalleryPart = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

  
    const importImages = (r) => {
        let images = [];
        r.keys().forEach((item) => {
          images.push({
            src: r(item).default?.src || r(item).default,
            width: 1,
            height: 0.7,
          });
        });
        return images;
      };
    

const images2018 = importImages(require.context('@/styles/img/abacus/gallery/2018', false, /\.(png|jpe?g|svg|JPG)$/));
const images2017 = importImages(require.context('@/styles/img/abacus/gallery/2016-17', false, /\.(png|jpe?g|svg|JPG)$/));
const images2016 = importImages(require.context('@/styles/img/abacus/gallery/2015-16', false, /\.(png|jpe?g|svg|JPG)$/));

// Combine all images into a single array
const allImages = [...images2018, ...images2017, ...images2016];

    const openLightbox = useCallback((event, { photo, index }) => {
        // console.log(photo,index)
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
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
                maxWidth: '600px',
                width: '100%',
            }),
        };

        const customImageStyles = {
            border: '2px solid #ddd',
            borderRadius: '5px',
            width: '100%'
        };
    
        // Custom component for the carousel image view to apply styles
        const CustomView = ({ data }) => (
            <Image src={data.src} alt="Mastermind Abacus" style={customImageStyles} width={300} height={200}/>
        );

    return (
        <>
            <div className="rs-gallery pt-100 pb-70 md-pt-80 md-pb-50">
                <div className="container">
                    <Gallery 
                        direction={"column"} 
                        photos={allImages} 
                        onClick={openLightbox}
                    />                   

                    <ModalGateway> 
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}  styles={modalStyles}>

                                <Carousel
                                style={{disply:"flex", justifyContent:"center"}}
                                    currentIndex={currentImage}
                                    views={allImages.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                    components={{ View: CustomView }}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </div>
            </div>
        </>
    );
}


export default GalleryPart
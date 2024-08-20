import { useRef, useEffect } from 'react';
import { Videos } from './data/data'
// import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const Slider = (props) => {
  const { Heading } = props
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const sliderRef = useRef(null);
  const scrollAmount = 300;

  useEffect(() => {
    function handleSlider(direction) {
      const { current: slider } = sliderRef;

      if (direction === 'next') {
        slider.scrollLeft += scrollAmount;
      } else if (direction === 'prev') {
        slider.scrollLeft -= scrollAmount;
      }

    }

    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;

    if (prevButton && nextButton) {
      prevButton.addEventListener('click', () => handleSlider('prev'));
      nextButton.addEventListener('click', () => handleSlider('next'));
    }

    return () => {
      if (prevButton && nextButton) {
        prevButton.removeEventListener('click', () => handleSlider('prev'));
        nextButton.removeEventListener('click', () => handleSlider('next'));
      }
    };
  }, []);

  return (
    <>

      <div className="flex flex-col md:items-center md:justify-center text-black px-8 mt-90px"> 
        <div className=" text-center py-3 md:w-3/4 lh-base mt-100px text-lg md:text-3xl leading-9 family" >{!Heading ? <div> The Abacus Isn&apos;t Just About Math—It&apos;s A Secret Weapon for Boosting Academic Performance and Mastering Life Skills Like <span className='title-change' >Confidence, Focus, Memory, Recall, Visualization, And Listening</span> </div>: Heading} </div>

        <div className='flex w-full md:items-end items-center justify-center z-50'>
          <button id="prev-slide" className="slide-button " ref={prevButtonRef}>
          <i class="fa-solid fa-circle-chevron-left title-change mr-10 text-xl "></i>
          </button>
          <button id="next-slide" className="slide-button" ref={nextButtonRef}>
          <i class="fa-solid fa-circle-chevron-right title-change mr-10 text-xl "></i>
          </button>
        </div>

        <div className="slider_div slider-wrapper ">
          <div className="center_div " id="centerdiv" ref={sliderRef}>
            {
              Videos.map((data, index) => (
                <div key={index} className="flex md:gap-6 md:py-4 items-center gap-7 my-2 ">
                  <div className="category-slider small-category rounded-3xl shadow-lg md:p-5 p-0" >
                    <iframe className='rounded-3xl md:w-[600px] md:h-[370px] h-[200px] w-[280px]' src={data.vid} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider
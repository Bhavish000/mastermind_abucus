import { useState } from 'react';
import { Faq_Data } from './data/data';
// import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import sofarimg from "@/styles/img/abacus/images/image.png"
import Image from 'next/image';
import { Modal } from 'react-bootstrap';
import BookclassModal from './BookclassModal';

const FAQ = () => {


  const [show, setShow] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);


  const closeModal = () => {
    setShow(false);
    // setstatus('')
  };

  const [accordionOpen, setAccordionOpen] = useState(
    Faq_Data.map((item, index) => index === 0)
  );

  const toggleAccordion = (index) => {
    const newAccordionState = [...accordionOpen];
    newAccordionState[index] = !newAccordionState[index];
    setAccordionOpen(newAccordionState);
  };

  return (
    <>
      <div className="flex flex-col md:items-center md:justify-center text-black px-8 md:px-48 md:my-8 mb-4">
        <div className='flex flex-col items-center justify-center my-5'>
          <div className="text-lg md:text-3xl font-extrabold family text-center">Let your child experience the <span className='title-change' >fun of Maths</span> </div>
          <Image src={sofarimg} className='md:w-1/2 p-3 mb-30 ' alt="Mastermind Abacus" />

          <button onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }} className="btns btn-anim hidden md:block bg-orange-600  hover:text-black border-[1px] hover:border-orange-600 rounded-lg text-sm px-10 py-3 mt-50 md-mt-20 text-center font-semibold text-white ease-in-out duration-300 md:w-1/3 w-full hover:shadow-lg hover:shadow-orange-600/40">
          BOOK A FREE DEMO CLASS
        </button>

        <button onClick={() => setShow(true)} className="btns btn-anim block md:hidden  bg-orange-600  hover:text-black border-[1px] hover:border-orange-600 rounded-lg text-sm px-10 py-3 mt-50 md-mt-20 text-center font-semibold text-white ease-in-out duration-300 md:w-1/3 w-full hover:shadow-lg hover:shadow-orange-600/40">
          BOOK A FREE DEMO CLASS
        </button>

        </div>
        <div className="text-xl md:text-4xl font-bold my-4 text-center family">Frequently Asked Questions (FAQ)</div>
        <div className="text-gray-500 md:text-lg text-sm my-4 text-center">Our expert advisors can help you find the right workplace solution for you and your team</div>
        <div className="w-full md:w-3/4">
          {Faq_Data.map((accordionData, index) => (
            <div className="my-6 flex flex-col p-4 mb-4 rounded-xl lg:mx-4 md:mx-2 border-[0.5px] border-orange-600 bg-[#f6f6f6]" key={index}>
              <div className="flex justify-between cursor-pointer" onClick={() => toggleAccordion(index)}>
                <span className="md:text-lg font-bold text-sm">{accordionData.head}</span>
                <span className="duration-300 ease-in-out">{accordionOpen[index] ? <i  class="fa fa-chevron-up title-change" aria-hidden="true"></i>  : <i  class="fa fa-chevron-down title-change" aria-hidden="true"></i>}  </span>
              </div>
              <p className={`grid md:text-sm text-[10px] overflow-hidden transition-all duration-300 ease-out ${accordionOpen[index] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <span className="overflow-hidden py-2 md:text-[1rem] text-sm">{accordionData.data}</span>
              </p>
            </div>
          ))}
        </div>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >

          <BookclassModal onClose={closeModal} />
        </Modal>
      </div>
    </>
  );
};

export default FAQ;

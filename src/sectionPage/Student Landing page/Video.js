import Image from "next/image"
import { olcards } from "./data/data"
import traningimg from '@/styles/img/abacus/images/teacher-img.jpeg'
import ModalVideo from "react-modal-video"
import { useState } from "react"
import { Modal } from "react-bootstrap"
import BookclassModal from "./BookclassModal"

const Video = () => {

  const [show, setShow] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);


  const closeModal = () => {
    setShow(false);
    // setstatus('')
  };


  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="flex flex-col md:items-center md:justify-center text-black mt-70 md-mt-40 px-8 md:px-36 md:my-6">

        <ModalVideo
          channel='youtube'
          isOpen={isOpen}
          videoId='JwjiqMPtz-E'
          onClose={toggleModal}
        />
        <h1 className="text-lg md:text-3xl font-extrabold family text-center">  <span className="orange-color">Transform Your Child’s Math Abilities with  </span> Our Abacus Online Classes !</h1>
        <div className="text-center text-gray-500 py-3 mb-10 md:w-3/4 text-base" >Watch this video and discover how our <span className="font-bold">Abacus online classes</span> work using the ancient abacus to develop mental math skills, boost confidence, and make learning fun.</div>


        {/* <iframe className="rounded-3xl md:h-[550px] h-[250px] md:w-[1080px]" src="https://www.youtube.com/embed/WB6MiGg1dvA?si=3xP_ni5WBhB-wGI_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
        <div className="img-part" >
          <button onClick={toggleModal}>
            <Image
              className="rounded-3xl md:h-[550px] h-[250px] md:w-[1080px] popup-videos"
              src={traningimg}
              alt="MasterMind"
            />
          </button>


        </div>

        <div className="text-lg md:text-3xl font-extrabold text-center family mt-50 md-mt-30">BENEFITS OF <span className="title-change" >ABACUS</span></div>
        <div className="text-center text-gray-500 md:w-3/4 text-base" >Mastermind Abacus training develops dynamic number sense in children. The specific game-based technique keeps kids engaged. It removes the fear of math right from childhood.</div>

        <div className="w-full h-full md:flex mt-40 md-mt-0">
          <div className="md:w-1/2 md:h-full md:pr-16">
            <div className="flex md:hidden items-center justify-center w-full my-5">
              <iframe className="rounded-3xl md:h-[300px] h-[250px] md:w-[550px] w-[600px]" src="https://www.youtube.com/embed/Pcccj1L_oME" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className="md:text-sm pl-30 my-4 md-my-1 text-sm">
              Other than Mental Math, it also improves academic performance with the development of crucial life skills such as:
            </div>

            <ol className="olcards mt-5 pr-20">
              {
                olcards.map((data, index) => (
                  <>
                    <li key={index} className="my-2">
                      <div style={{ backgroundColor: data.color }} className="content">
                        <div className="title text-sm font-bold">
                          {data.text}
                        </div>
                      </div>
                    </li>
                  </>
                ))
              }
            </ol>

          </div>
          <div className="md:flex hidden items-center justify-center w-1/2 pl-20">
            <iframe className="rounded-3xl md:h-full h-[250px] md:w-[550px]" src="https://www.youtube.com/embed/Pcccj1L_oME" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>

        <button onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }} className="btns btn-anim hidden md:block bg-orange-600  hover:text-black border-[1px] hover:border-orange-600 rounded-lg text-sm px-10 py-3 mt-50 md-mt-20 text-center font-semibold text-white ease-in-out duration-300 md:w-1/3 w-full hover:shadow-lg hover:shadow-orange-600/40">
          BOOK A FREE DEMO CLASS
        </button>

        <button onClick={() => setShow(true)} className="btns btn-anim block md:hidden  bg-orange-600  hover:text-black border-[1px] hover:border-orange-600 rounded-lg text-sm px-10 py-3 mt-50 md-mt-20 text-center font-semibold text-white ease-in-out duration-300 md:w-1/3 w-full hover:shadow-lg hover:shadow-orange-600/40">
          BOOK A FREE DEMO CLASS
        </button>


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
  )
}

export default Video
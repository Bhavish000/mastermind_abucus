import React from 'react'

const Unleash_sec = (props) => {
  const { H1, h1dec ,H2,h2dec} = props
 

  return (
    <div className="flex flex-col md:items-center md:justify-center text-black mt-70 px-8 md:px-36 md:my-6">
      <div className="text-lg md:text-3xl font-extrabold text-orange-600 text-center"><span className="text-black">{H1}</span></div>
      <div className="text-center text-gray-500 py-3 mb-10 md:w-3/4 text-base" >{h1dec}</div>

      <iframe className="rounded-3xl md:h-[550px] h-[250px] md:w-[1080px]" src="https://www.youtube.com/embed/WB6MiGg1dvA?si=3xP_ni5WBhB-wGI_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


      <div className="text-lg md:text-3xl font-extrabold text-center mt-50">{H2}</div>
      <div className="text-center text-gray-500 py-2 md:w-3/4 text-base">{h2dec}</div>
      <button onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }} className="btns btn-anim bg-orange-600  hover:text-black border-[1px] hover:border-orange-600 rounded-lg text-sm px-10 py-3 mt-50 text-center font-semibold text-white ease-in-out duration-300 md:w-1/3 w-full hover:shadow-lg hover:shadow-orange-600/40">
          BOOK A FREE DEMO CLASS
        </button>
    </div>
  )
}

export default Unleash_sec
import React from 'react'
import sofarimg from "@/styles/img/abacus/images/image.png"
import Image from 'next/image';
const Child_exp_sec = () => {
  return (
    <div className="flex flex-col md:items-center md:justify-center text-black px-8 md:px-48 md:my-8 mb-4">
        <div className='flex flex-col items-center justify-center my-5'>
          <div className="text-lg md:text-3xl font-extrabold text-center">Let your child experience the fun of Maths</div>
          <Image src={sofarimg} className='md:w-1/2 p-5 mb-4 ' alt="Masster Maind" />

          <button onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} type="button" className="btns btn-anim bg-orange-600  hover:text-black border-[1px] hover:border-orange-600 rounded-lg text-sm px-10 py-3 mt-6 text-center font-semibold text-white ease-in-out duration-300 md:w-1/3 w-full hover:shadow-lg hover:shadow-orange-600/40">
            BOOK A FREE DEMO CLASS NOW</button>
        </div>
    </div>
  )
}

export default Child_exp_sec
import React from 'react'
import bannerbg from '@/styles/img/abacus/map.webp'
import Image from 'next/image'
// import SectionTitle from '../../components/Common/SectionTitle'

const MapSection = () => {
  return (
    <React.Fragment>


      <div className=' rs-newsletter mapSection mt-30'>
        <div className=" mb-30 sm-mb-20  text-center">
         

          <div className="sec-title ">
            <h2 className="title family mb-0">
            OUR TRAINING HAS BENEFITTED STUDENTS  <span className='title-change'> ACROSS 17 COUNTRIES </span>
            </h2>
            <div className="desc ">

            </div>
          </div>
        </div>
        <div className='mapImg text-center d-flex justify-content-center'>
          <Image className='imgcl' src={bannerbg} alt='Mastermind Abacus' />
        </div>

      </div>


      {/* <div className=''>
        <img />
      </div> */}
    </React.Fragment>
  )
}

export default MapSection
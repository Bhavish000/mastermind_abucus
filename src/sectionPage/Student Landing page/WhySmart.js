import kidImage from "@/styles/img/abacus/images/1.png";
import Image from "next/image";
import { cards } from "./data/data"

const WhySmart = () => {

  return (
    <div className="flex flex-col md:items-center md:justify-center text-black px-8 md:px-48 md:my-12 mb-4 mt-50 md-mt-30 ">
      <div className="text-lg md:text-3xl font-extrabold text-center family">Why We&apos;re The <span className="title-change" >Best In The Game?</span></div>
      <div className="text-gray-500 text-center py-4 text-base" >Live Classes. Interactive Games.</div>
 
      {/* container  */}
      <div className="md:flex md:flex-row flex-col items-center md:justify-around justify-center bg-[#feeedc] md:h-[600px] md:w-[1310px] md:rounded-tl-[10rem] rounded-3xl">
        <div className="md:w-1/2 w-11/12">
          <Image className="md:my-0 my-8" src={kidImage} alt="girl image" />
          <p className="pl-8 font-bold md:text-2xl text-lg text-center mt-30">You won&apos;t ever fear numbers!</p>
        </div>
        <div>
          
          {
            cards.map((data, index) => (
              <div key={index} className="flex md:gap-6 md:py-4 md:px-5 px-2 items-center gap-7 my-4">
                {
                  index == 0 ? (
                    <Image style={{width:"113px"}} className="ml-2 h-28 bg-red-500 rounded-2xl" src={data.img} alt="Image" />
                  ) : (
                    <Image className="w-26 h-26" src={data.img} alt="Image" />
                  )
                }
                <div className="flex flex-col text-sm max-w-[330px] md:gap-1">
                  <div className="md:text-xl text-sm font-bold">{data.title}</div>
                  <div className="md:text-xl text-sm">{
                    index == 1 ? (
                      <span><b>100,000+ </b>{data.desc}</span>
                    ) : index == 0 ? (
                      <span>
                        {data.desc} <b>(Since 2005)</b>
                      </span>
                    ) : (
                      <span>{data.desc}</span>
                    )}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default WhySmart
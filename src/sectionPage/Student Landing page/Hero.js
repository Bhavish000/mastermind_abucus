import img from "@/styles/img/abacus/images/Mastermind2.5ab5f0b7-min.png";
import img2 from '@/styles/img/abacus/images/Mastermind Group (3).png'
import 'react-phone-number-input/style.css';
import BookclassModal from './BookclassModal';
import Image from "next/image";
const Hero = ({Referrer}) => {

    return (
        <>
            <div className='flex items-center justify-center'>
                {/* {isExploding && <ConfettiExplosion force={0.8} duration={3000} particleCount={400} width={1600} />} */}
            </div>
            <div className="flex md:flex-row flex-col md:items-center md:justify-center pt-0 mt-150 pl-150 pr-150 md-pl-30 md-pr-30 mb-8">
                <div className="md:w-1/2 w-full">
                    <div>
                        <div className="hero-img">
                            <Image src={img2} className="" alt="Mastermind Group" />
                        </div>
                        <div className="pt-20 my-2 z-20 items-center text-center">
                            <div className="orange-color family font-extrabold md:text-5xl text-3xl"> LEARN ABACUS</div>
                            <span className='md:text-3xl text-xl'>
                                <div>Boost Mental Math Skills </div>
                                <div className='font-bold pt-2'>
                                    SPARK EARLY MATH GENIUS
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="md:w-full mt-8">  <Image src={img} className="w-full" alt="Mastermind Logo" /></div>

                </div>
                <div className="ml-40 md-ml-0">
                    <BookclassModal Referrer={Referrer}/>
                </div>
            </div>
        </>
    );
}

export default Hero;

import SectionTitle from '@/component/Common/SectionTitle';
import Link from 'next/link';
// import { Link } from 'react-router-dom';
// import SectionTitle from '../../components/Common/SectionTitle';


const Courses = () => {

    return (
        <div className="rs-services style2 servic1 style4 pt-100 md-pt-80">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title text-center mb-50 md-mb-30"
                   titleClass="title family mb-10"
                    title={<>ABACUS COURSE <span style={{color:"#fd6c24"}}>STRUCTURE</span></>}
                />
                <div className="row ">
                    <div className="col-lg-6 md-mb-30 service-item servic-boxes ">
                       

                        <div className='content-part'>
                            <div className='title'>
                                MASTERMIND ABACUS PROGRAM (AGE 7 TO 12 YEARS)
                            </div>
                            <div className='desc'>
                            An Abacus Math Program developed specially for the children of the age of 7 to 12 years for creating a child’s interest in Math and to expertise in doing mental math at exceptional speed.

                            </div>
                            <div className='Desc' >
                                Duration - 8 levels of 3 months each, with twice-in-a-week classes of one hour each.
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 md-mb-30 service-item">
                     


                        <div className='content-part'>
                            <div className='title'>
                            LINGO BINGO (AGE 4 TO 6 YEARS)
                            </div>
                            <div className='desc'>
                            An exclusive offline program to develop the number sense of the little ones from 5 to 6 years of age, through interesting games and activities. <Link href={"/lingo-bingo"} className='primary-color'>Click to know more</Link> about Lingo Bingo

                            </div>
                            <div className='Desc' >
                            Duration - 3 to 6 months, with twice-in-a-week classes of one hour each.
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    );
}

export default Courses;












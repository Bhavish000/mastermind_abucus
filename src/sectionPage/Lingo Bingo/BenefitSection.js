import SectionTitle from '@/component/Common/SectionTitle';
import React from 'react';
import img1 from '@/styles/img/abacus/lingo-bingo/img1.png'
import img2 from '@/styles/img/abacus/lingo-bingo/img2.png'
import img3 from '@/styles/img/abacus/lingo-bingo/img3.png'
import Image from 'next/image';
// import SectionTitle from '../../components/Common/SectionTitle';
// import CategoriesSingleThree from '../../components/Categories/CategoriesSingleThree';

const Benefit = () => {

    return (
        <div className="rs-subject style1 pt-94 pb-70 md-pt-64 md-pb-40">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title mb-60 text-center md-mb-30"
                    subtitleClass="sub-title primary"
                    // subtitle="The Language Of NUmbers"
                    titleClass="title family mb-0"
                    title={<>BENEFITS OF <span className='title-change' >LINGO BINGO</span></>}
                />
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-30">
                        {/* <CategoriesSingleThree
                            categoriesClass="subject-wrap bgc1"
                            title={<>Develops number <br/> sense</>}
                            // courseQuantity=""
                            iconImg={<i class="fa-solid fa-laptop-code"></i>}
                        /> */}
                        <div className='subject-wrap bgc1'>
                        {/* <i class="fa-solid fa-laptop-code"></i> */}
                        <Image src={img3} width={70} alt='matster mind'/>
                            <div className='title'>Develops number <br/> sense</div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        {/* <CategoriesSingleThree
                            categoriesClass="subject-wrap bgc2 "
                            title="Removes Math Phobias in the child"
                            // courseQuantity=""
                            iconImg={<i class="fa-brands fa-phoenix-squadron"></i>}
                        /> */}
                         <div className='subject-wrap bgc2'>
                        {/* <i class="fa-brands fa-phoenix-squadron" ></i> */}
                        <Image src={img2} width={70} alt='matster mind'/>

                            <div className='title'>Removes Math Phobias in the child</div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        {/* <CategoriesSingleThree
                            categoriesClass="subject-wrap bgc3"
                            title="Improves Eye-Hand co-ordination"
                            // courseQuantity=""
                            iconImg={<i class="fa-solid fa-arrow-up-right-dots"></i>}
                        /> */}
                         <div className='subject-wrap bgc3'>
                        {/* <i class="fa-solid fa-upload" ></i> */}
                        <Image src={img1} width={70} alt='matster mind'/>
                            <div className='title'>Improves Eye-Hand co-ordination</div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        {/* <CategoriesSingleThree
                            categoriesClass="subject-wrap bgc4"
                            title="Enhances Fine motor skills"
                            // courseQuantity=""
                            iconImg={<i class="fa-solid fa-screwdriver-wrench"></i>}
                        /> */}
                         <div className='subject-wrap bgc4'>
                        <i class="fa-solid fa-screwdriver-wrench" ></i>
                            <div className='title'>Enhances Fine motor skills</div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        {/* <CategoriesSingleThree
                            categoriesClass="subject-wrap bgc5"
                            title="Visualization"
                            // courseQuantity=""
                            iconImg={<i class="fa-regular fa-eye"></i>}
                        /> */}
                          <div className='subject-wrap bgc5'>
                        <i class="fa-solid fa-eye" ></i>
                            <div className='title'>Visualization</div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        {/* <CategoriesSingleThree
                            categoriesClass="subject-wrap bgc6"
                            title="Concentration"
                            // courseQuantity=""
                            iconImg={<i class="fa-solid fa-arrows-to-eye"></i>}
                        /> */}
                          <div className='subject-wrap bgc6'>
                        <i class="fa-solid fa-bullseye" ></i>
                            <div className='title'>Concentration</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefit;
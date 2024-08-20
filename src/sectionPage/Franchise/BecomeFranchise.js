import CategoriesSingleFour from '@/component/Categories/CategoriesSingleFour';
import SectionTitle from '@/component/Common/SectionTitle';
import React from 'react';


// Categories Image


const BecomeFranchise = () => {

    return (
        <div className="rs-categories becomeFranchise event-bg pt-150 pb-100 md-pt-70 md-pb-40" style={{backgroundColor:"#d6d6d6"}}>
            <div className="container">

                <SectionTitle
                    sectionClass="sec-title mb-60 text-center md-mb-60"
                    // subtitleClass="sub-title primary"
                    // subtitle="Subject Categories"
                    titleClass="title family mb-0 "
                    title={<>WHO CAN BECOME A <br/>
                           <span style={{color:"#fd6c24"}}> FRANCHISE OF MASTERMIND ABACUS?</span></>}
                />

                <div className="row">
                    <div className="col-md-4 md-mb-60">
                        <CategoriesSingleFour
                            categoriesClass="catetgories-items"
                            // categoriesImg={CatImg1}
                            categoriesIcon='fa-solid fa-graduation-cap'
                            categoriesTitle=" ANY GRADUATE"
                            categoriesDesc="  Any Graduate with a passion for teaching and who is regularly available."
                        // btnText="Join Program"
                        catNum='70'

                        />
                    </div>
                    <div className="col-md-4 md-mb-60">
                        <CategoriesSingleFour
                            categoriesClass="categories-items"
                            // categoriesImg={CatImg2}
                            categoriesIcon='fa fa-language icn_bg'
                            // <i class="fa-solid fa-language"></i>
                            categoriesTitle=" COMMUNICATION SKILLS"
                            categoriesDesc=" A person with good communication skills, having basic knowledge of computers."
                        // btnText="Join Program"
                        catNum='70'
                        />
                    </div>
                    <div className="col-md-4">
                        <CategoriesSingleFour
                            categoriesClass="categories-items"
                            // categoriesImg={CatImg3}
                            categoriesIcon='fa-solid fa-gear'
                            // <i class="fa-solid fa-gear"></i>
                            categoriesTitle="  REQUISITE HARDWARE"
                            categoriesDesc="You will require a laptop or pc with high speed broadband connection for efficient management of your Abacus Center."
                            catNum='50'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BecomeFranchise;












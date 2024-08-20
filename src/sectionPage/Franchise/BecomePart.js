import CategoriesSingleFour from '@/component/Categories/CategoriesSingleFour';
import SectionTitle from '@/component/Common/SectionTitle';
import React from 'react';

const BecomePart = () => {

    return (
        <div className="rs-categories home9-style event-bg pt-100 pb-100 md-pt-70 md-pb-0">
            <div className="container">

                <SectionTitle
                    sectionClass="sec-title mb-60 text-center md-mb-60"
                    // subtitleClass="sub-title primary"
                    // subtitle="Subject Categories"
                    titleClass="title family mb-0 text-white"
                    title="WHY BECOME MASTERMIND ABACUS FRANCHISE?"
                />

                <div className="row mb-100 md-mb-60">
                    <div className="col-md-4 md-mb-60">
                        <CategoriesSingleFour
                            categoriesClass="categories-items"
                            // categoriesImg={CatImg1}
                            categoriesIcon='fa-solid fa-money-bill-1'
                            // <i class="fa-solid fa-money-bill-1" ></i>
                            categoriesTitle=" EARN RS. 50,000+ PER MONTH"
                            categoriesDesc=" You can earn more than Rs. 50,000 per month with our 3-dimensional earning opportunities."
                            // btnText="Join Program"
                            // catNum='100'
                        />
                    </div>
                    <div className="col-md-4 md-mb-60">
                        <CategoriesSingleFour
                            categoriesClass="categories-items"
                            // categoriesImg={CatImg2}
                            categoriesIcon='fa-solid fa-money-bill-1'
                            categoriesTitle=" NO ROYALTY"
                            categoriesDesc="At Mastermind, we do not impose any royalty fees on the student fees you collect. We prioritize maximizing your profits and offer a no-royalty program, allowing you to enjoy greater financial benefits."
                            // btnText="Join Program"
                            catNum='130'
                        />
                    </div>
                    <div className="col-md-4  md-mb-0">
                        <CategoriesSingleFour
                            categoriesClass="categories-items"
                            // categoriesImg={CatImg3}
                            categoriesIcon='fa fa-laptop'
                            categoriesTitle=" UNMATCHED TRAINING SUPPORT"
                            categoriesDesc="Experience unparalleled training support with Mastermind. Access our cutting-edge live online Abacus training portal from the comfort of your home, ensuring interactive and effective learning. Our dedicated master trainers are always available to provide guidance and support, enhancing the quality of training while saving you time and travel expenses."
                            catNum='100'
                        />
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-4  md-mb-60">
                        <CategoriesSingleFour
                            categoriesClass="categories-items"
                            // categoriesImg={CatImg1}
                            categoriesIcon='fa-solid fa-circle-xmark'
                            // <i class="fa-solid fa-money-bill-1" ></i>
                            categoriesTitle=" NO EXPERIENCE REQUIRED"
                            categoriesDesc="At Mastermind, we offer exceptional training support to transform you into an expert Abacus Trainer. Our comprehensive training also equips you with the skills to effectively manage your business. Therefore, prior experience is not mandatory."
                            // btnText="Join Program"
                            catNum='100'
                        />
                    </div>
                    <div className="col-md-4  md-mb-60">
                        <CategoriesSingleFour
                            categoriesClass="categories-items"
                            // categoriesImg={CatImg2}
                            categoriesIcon='fa-solid fa-book'
                            categoriesTitle="  QUALITY CONTENT"
                            categoriesDesc=" Experience unparalleled child-friendly content meticulously crafted to yield optimal results, fostering visible development in children's mental math skills and overall academic performance."
                            // btnText="Join Program"
                            catNum='100'
                        />
                    </div>
                    <div className="col-md-4  md-mb-60">
                        <CategoriesSingleFour
                            categoriesClass="categories-items"
                            // categoriesImg={CatImg3}
                            categoriesIcon='fa-solid fa-building-columns'
                            categoriesTitle="  SEAMLESS INSTITUTE MANAGEMENT"
                            categoriesDesc="Our integrated ERP system eliminates hassles in managing your institute by automating essential tasks such as student management, online registration, and exams."
                            catNum='65'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BecomePart;




















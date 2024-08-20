import React from 'react';
import Slider from "react-slick";
import quote from '@/styles/img/testimonial/main-home/test-2.png';

import authImg from '@/styles/img/abacus/testimons/Kenny-Suresh.png';
import authImg2 from '@/styles/img/abacus/testimons/MUKESH-KUMAR-REKHA.png';
import authImg3 from '@/styles/img/abacus/testimons/Masarrat-Acharya.png';
import authImg4 from '@/styles/img/abacus/testimons/Mittal-chavda.png';
import authImg5 from '@/styles/img/abacus/testimons/Subeesh-Kumar.png';
import authImg6 from '@/styles/img/abacus/testimons/Ujjawal.png';
import authImg7 from '@/styles/img/abacus/testimons/harsha-joshi.png';
import authImg8 from '@/styles/img/abacus/testimons/vibhute.png';
import authImg9 from '@/styles/img/abacus/testimons/Hetal-Ben.png';
import SingleTestimonial from '@/component/Testimonial/SingleTestimonial';


function Testimonial () {
    

    const testimonialSettings = {
        dots: true,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        // autoplaySpeed: 2000,
        // speed: 2000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="rs-testimonial main-home pt-60 pb-200 md-pt-70 md-pb-40" id='parent_testimonial'>
                <div className="container">
                    <div className="sec-title mb-30 md-mb-30 text-center">
                        <h3 className="title fs-3 family ">
                        PARENT&apos;S TESTIMONIALS
                        </h3>
                        <div className="desc ">

                        </div>
                    </div>
                    <Slider {...testimonialSettings} >
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg}
                            Title="Subeesh Kumar"
                            Designation="Gopika KS"
                            Description="Ever since my daughter started Abacus Classes Online with Mastermind, I find she is more interested in it, mainly because of the math game videos."
                            disNum='100'
                        />  
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg2}
                            Title="Masarrat Acharya"
                            Designation="---"
                            Description="Jahaan's commendable performance in exams these days amazes me. Her confidence now is at par with the best students of her class. Amazing is the only word that I can say and I can give all credit for this to Mastermind Abacus."
                            disNum='80'
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg3}
                            Title="Hetal Ben Soni"
                            Designation="---"
                            Description="My daughter is an above average scoring student, but her casual attitude is an issue. My friend suggested me to enroll her in Abacus Classes.
                           I found Mastermind Abacus Classes near me. A visible change can now be seen in her. 
                           She started improving in all ways, not just in Math but also in other subjects & grasping concepts etc.
                           She is even comfortable with the online Abacus classes."
                           disNum='100'
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg4}
                            Title="Mittal Chavda"
                            Designation="---"
                            Description="I went to UCMAS and ALOHA center but got my child's admission done at Mastermind Abacus.
                           The results are fabulous! I am happy with his improvement after the course. He overcame his math phobia."
                           disNum='90'
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg5}
                            Title="Ujjawal Swaroop"
                            Designation="---"
                            Description="My child Aadi enrolled in Mastermind Abacus in the year 2015. Just not mental math skills but undergoing the program has 
                           improved his concentration and observation skills too and to a great 
                           extent has enhanced his overall academic performance and personality. Thanks, Team Mastermind Abacus."
                           disNum='100'
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg6}
                            Title="Mona Vibhute"
                            Designation="---"
                            Description="I am a Math Teacher, but surprised to see my daughter's Mathematical Calculations. 
                           I must admit she calculates faster than me. This has been possible with training from Mastermind Abacus."
                           disNum='100'
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg7}
                            Title="Kenny Suresh Bhansari"
                            Designation="---"
                            Description="My daughter never liked numbers and this always reflected in her school report card. But after taking admission in Mastermind Abacus, she overcame her Math fear in just 4 months and her performance in her class has improved dramatically."
                            disNum='90'
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg8}
                            Title="Harsha Joshi"
                            Designation="---"
                            Description="Due to Covid, I had to shift my son from regular to Online Abacus classes. I observed, he is learning well from home too."
                            disNum='100'
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg9}
                            Title="MUKESH KUMAR/REKHA"
                            Designation="---"
                            Description="I always wanted my son to do better in Mathematics. With the help of Mastermind Abacus, I can see Rudra doing wonders. This time he got School Mathematics Olympiad trophy too."
                            disNum='100'
                        />
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial
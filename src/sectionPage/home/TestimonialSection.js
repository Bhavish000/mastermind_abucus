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
                            Description="My daughter never liked numbers, and it showed in her grades. After just four months with Mastermind Abacus, she has overcome her math fear, and her class performance has improved dramatically."
                            disNum='100'
                        />  
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg2}
                            Title="Masarrat Acharya"
                            Designation="---"
                            Description="The structured approach at Mastermind Abacus has turned my son into a confident learner. His math skills have improved significantly, and he’s now more motivated than ever."
                            disNum='80'
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg3}
                            Title="Hetal Ben Soni"
                            Designation="---"
                            Description="I always wanted my son to excel in mathematics. Thanks to Mastermind Abacus, Rudra not only improved but also won the School Mathematics Olympiad trophy this year."
                           disNum='100'
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg4}
                            Title="Mittal Chavda"
                            Designation="---"
                            Description="My son’s enthusiasm for learning has soared since starting Mastermind Abacus. The structured lessons and interactive activities have made a noticeable difference in his academic performance."
                           disNum='90'
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg5}
                            Title="Ujjawal Swaroop"
                            Designation="---"
                            Description="Jahaan's recent exam performance has been extraordinary. Her newfound confidence is on par with the top students in her class. All credit goes to Mastermind Abacus for this transformation."
                           disNum='100'
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg6}
                            Title="Mona Vibhute"
                            Designation="---"
                            Description="My daughter was an average scorer, but her casual attitude was a concern. After enrolling her in Mastermind Abacus, she has shown remarkable improvement, not just in math but across all subjects. She is thriving even in online classes."
                           disNum='100'
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg7}
                            Title="Kenny Suresh Bhansari"
                            Designation="---"
                            Description="After considering other centers, I chose Mastermind Abacus for my child, and the results have been amazing. My child has overcome his math phobia and is now excelling.."
                            disNum='90'
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg8}
                            Title="Harsha Joshi"
                            Designation="---"
                            Description="Aadi has been with Mastermind Abacus since 2023. The program has not only improved his mental math skills but has also significantly enhanced his concentration, observation, and overall academic performance."
                            disNum='100'
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg9}
                            Title="MUKESH KUMAR/REKHA"
                            Designation="---"
                            Description="As a math teacher, I was surprised to see my daughter's rapid calculation skills surpass mine, thanks to Mastermind Abacus."
                            disNum='100'
                        />
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial
import React from "react";

const About = (props) => {

    const { ctaClass } = props; 

    return (
        <div className={ctaClass ? ctaClass : 'rs-cta'} >
            <div className="cta-content text-center">
                <div className="sec-title mb-46 mt-36 md-mb-30">
                    <h1 className="title family fs-2">
                        GET MOST <span className="title-change"> ADVANCED ABACUS TEACHER </span> TRAINING
                    </h1>
                    <div className="desc ">
                        If you are looking for <span className="font-bold">Abacus teacher training</span>, you are in the right place. Mastermind will give you the most advanced & the finest training through its live online portal; a company trained certified Master Trainer will be live with you during the training.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
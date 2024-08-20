import React from "react";
import mainImage from '@/styles/img/abacus/lingo-bingo/Lingo-Bingo1.webp';
import Image from "next/image";

function About() {


    return (
        <div id="rs-about" className="rs-about style1 pt-50 pb-100 md-pb-0 md-pt-70">
            <div className="container p-4 rounded section-shadow" >
                <div className="row align-items-center">


                    <div className="col-lg-6 order-last">
                     

                        <div className="sec-title marginup  mb-6 " >
                            <h1 className="title family fs-2">
                            A GAME BASED ABACUS PROGRAM <span className="title-change" >FOR 4 TO 6 YEARS KIDS</span>
                            </h1>
                            <div className="desc ">
                            Mastermind &apos;Lingo Bingo&apos; is an Abacus program for 4 to 6 year old kids. It is 100 % game based and fun. Children come across challenging opportunities while playing with numbers.
                                It is a program that adapts to engaging and fun methods for teaching about numbers. In addition, it develops children&apos;s skills in mental arithmetic.
                                The Lingo Bingo training connects the playfulness of children with competitive, challenging and interesting games. Playing these exciting games causes a &apos;Happy Stress&apos; leading to increased dopamine levels. This, in turn, improves their &apos;number sense&apos; along with their overall brain abilities.
                                In Lingo Bingo Classes, students learn simple addition & subtraction while playing. They also learn to calculate mentally with ease, accuracy, and speed.
                            </div>
                        </div>
                    </div>





                    <div className="col-lg-6 pr-10 mt-30  md-mb-20">
                        <div className="img-part">

                            <Image
                                src={mainImage}
                                alt="Mastermind Abacus"
                            />
                        </div>
                    </div>

                </div>



            </div>
        </div>
    );
}

export default About;
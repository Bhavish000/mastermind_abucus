import React from "react";
import mainImage from '@/styles/img/abacus/Research/research-on-abacus.jpg';
import Image from "next/image";
import SectionTitle from "@/component/Common/SectionTitle";

function About() {

    return (
        <div id="rs-about" className="rs-about style1 pt-50 pb-50 md-pt-70 md-pb-40">
            <div className="container p-3 rounded section-shadow" >
                <div className="row align-items-center">
                    <div className="col-lg-6 pr-30 md-pr-10 md-pl-14 ">
                        <div className="img-part">

                            <Image
                                src={mainImage}
                                alt="Main Image"
                            />

                        </div>
                    </div>
                    <div className="col-lg-6 order-last"  >
                        <div className="sec-title mb-46 md-mb-10" style={{marginTop:"40px"}}>
                            <h1 className="title family fs-2">
                                RESEARCH ON ABACUS <span className="title-change" >LEARNING & ITS IMPACT</span>
                            </h1>
                            <div className="desc ">
                                Years of ‘Abacus Research’ and the heaps of ‘Abacus Data’ thus generated attracted the educationists and scientists equally. Probably, the reason could be its advent almost 3000 years back and the simplicity it provided to calculate the complex numerical needs of that generation. The magical speed and accuracy that an Abacus user showed became a subject of research for the scientists of the 20th century. <br />

                                The Research on Abacus learning & its impact has shown that the abacus technology used for mental Abacus calculation has a positive effect on the development of the right brain. Initially, this idea was only a hypothesis.
                            </div>
                        </div>
                    </div>
                </div>

                <SectionTitle
                    sectionClass="sec-title mb-26"
                    subtitleClass="sub-title primary"
                    // subtitle="About Us"
                    titleClass="title"
                    //                             title="'ABACUS CLASSES NEAR ME'
                    // IS THIS WHAT YOU ARE SEARCHING FOR?"
                    descClass="desc pr-10"
                    description={<>The recent development of high-tech machinery has helped provide tangible research and support data to the above hypothesis. In this section, let us acquaint ourselves with the information available from the eminent researchers who studied the effects of abacus training on children. We can credit the study of the effects of Abacus training on the human brain to these 3 scholars and scientists, namely Dr. Toshio Hayashi, Prof. Shizuko Amaiwa and Ms. Kimiko Kawano. <br /><br />

                        <span className="font-bold"> Development of Human Brain </span><br />
                        This cerebral neocortex does not fully function at the time of birth. This is why children grow up well in many aspects if they receive appropriate stimuli that develop the nerve cells in the neocortex.
                        <br />
                        Nerve cells in the neocortex consist of 14 billion sets of motor nerves and sensory nerves.<br />

                        We can activate the nerve cells by providing “stimuli”.
                        <br />
                        Moving fingers and talking aloud lead to activation by providing appropriate stimuli in the large part of sensory to motor domains in the cerebral neocortex.<br />

                        In this sense, starting abacus learning as young as possible is useful in activating the brains of young children.
                        <br />
                        If they come to like learning the abacus and move the beads on the abacus with fun, they will receive benefits from this experience. There is a key in making abacus-learning fun for young children so that they will grow to like it…. Dr. Toshio Hayashi, Doctor of Engineering Professor, Osaka Prefecture University, Director, Research Institute for Advanced Science and Technology (RIAST)
                        <br />
                        <br />
                        <span className="font-bold">Development Of The Right Brain By The Abacus Method Of Mental Calculation</span> <br />
                        The human brain consists of the right brain and the left brain.
                        <br />
                        The Left Brain is also referred to as the digital brain. It controls reading and writing, calculation, and logical thinking. It controls three-dimensional sense, creativity, and artistic sense.
                        <br />
                        Right Brain & Dementia, we need to develop an education system that would train the students’ Right Brain first. In addition, it is also found that if one trains the right brain, it is less likely to get dementia.<br />

                        In the abacus method of mental calculation, the learners manipulate abacus beads in their heads to carry out a calculation. This had led us to speculate that this operation was effective in training the right brain. Nowadays, it is called a Mental Math.
                        <br />
                        The development of cerebral physiology and machines accurately measure the amount of blood flow in the brain, recent studies have proven that the abacus method of Mental Calculation is extremely effective in activating the right brain.
                        <br />
                        Completion of abacus learning ensures mastery of the Mental Calculation.
                        <br />
                        <br />
                        <span className="font-bold">Dr. Toshio Hayashi, Doctor of Engineering Professor, Osaka Prefecture University, Director, Research Institute for Advanced Science and Technology (RIAST)</span>
                        <br />
                        <span className="font-bold">The Improvement Of Numerical Memory</span><br />
                        Abacus students are found to be superior in the accuracy of their memory and the number of digits they are able to memorize when compared with non-abacus learners of the same age. This is because abacus students place numbers on the abacus image in their heads as they mentally calculate with the abacus method. The retention of the numbers is certain.
                        <br />
                        <span className="font-bold"> Ms. Shizuko Amaiwa, Professor, Shinshu University, Faculty of Education.</span>
                        <br />
                        To acquire the ability to calculate rapidly and accurately and to calculate mentally.
                        <br />
                        One of the advantages of the abacus training is that learners can calculate simple mathematical problems rapidly and accurately. In addition, they acquire the ability to do mental calculation utilizing the abacus image, which allows quick calculation without actually using the abacus.<br />

                        These characteristics show positive ripple effects on the solution of various mathematical problems. On the other hand, the Non-Abacus learners&apos; calculation methods become fixed, and the students tend to lack flexibility in thinking out innovative ways to solve problems…
                        <br />
                        …some measures must be taken to keep the learners from being bored since the repetition of simple procedures is often accompanied by boredom…
                        <br />
                        <span className="font-bold"> Ms. Shizuko Amaiwa, Professor, Shinshu University, Faculty of Education.</span>
                        <br />
                        <span className="font-bold">  Verbal Thinking And Image Processing (Visualization)</span><br />
                        Usually, ordinary people calculate in their mind using inner voice, as in one hundred minus 7 is 93…
                        <br />
                        What is important is that the ability to visualize can be put to use for other subjects and behaviors…<br />

                        The ability developed by abacas can be used effectively in different ways.<br />

                        ..for the beginners, abacus learning is useful to easily grasp images in addition and subtraction problems, because the beads are moving in front of their eyes. It also allows understanding the decimal system…
                        <br />
                        <span className="font-bold">Ms. Kimiko Kawano, Researcher, Nippon Medical School, Center for Informatics and Sciences</span>
                        <br />
                        Source: <a className="primary-color font-bold" href="http://www.shuzan.jp/english/brain/brain.html">http://www.shuzan.jp/english/brain/brain.html</a>
                        <br />
                        <br />
                        <span className="font-bold fs-5"> Why Did Mastermind Step Into Abacus Education?</span> <br />
                        Realizing the need of the hour, Mastermind soon stepped into providing abacus education solutions to children through its exclusive Abacus Training Programs.
                        <br />
                        Our team of experts during live research while conducting ‘Abacus Trials,’ concluded that the entire abacus training system had various flaws. To name a few:
                        <br />
                        1. Variant calculating systems in schools and abacus classes.
                        <br />
                        2. Monotonous methods of teaching.
                        <br />
                        3. Lack of interest among students beyond the third level etc.
                        <br />
                        The above only resulted in students opting out of the abacus training program mid-way. Hardly 10 % of students actually graduated through all 8 levels.
                        <br />
                        Mastermind through its vast network of Abacus franchisee across the world serves a large number of students, which is increasing every hour. For its quality services and educational solutions, the company has gained immense appreciation from the education fraternity.
                        <br />
                        <br />
                        <span className="font-bold fs-5"> A Glimpse Of Our Development</span> <br />
                        To ensure superior Abacus Learning programs for students, Mastermind Abacus has developed techniques syncing with the latest technology keeping intact the sanctity of the Abacus Method. Our developed techniques understand the child’s psychology, so as to give them a joyful experience through the 2 and a half years of Abacus training. Our program overcomes flaws that were encountered with the available Abacus Training Systems. Here is a brief description of our developments:<br />
                        <br />
                        <span className="font-bold">1. Mastermind Abacus School Curriculum Based Calculating Systems:</span> All Abacus programs widely follow the same pattern in which the calculations are done left to right whereas, the schools teach calculations from right to left. This creates a conflict, making it difficult for children to adapt to the varying patterns.
                        <br />
                        Our Abacus program (unlike the other abacus companies) has been developed in synchronization with the methods taught in schools. We do not believe in complicating the subject by confusing the child; rather make it simplified and friendly.
                        <br /><br />
                        <span className="font-bold">2. Mastermind Abacus Speed Building Software (Online Abacus Game): </span>
                        <br />Professor of Shinshu University has stated that certain measures should be taken while training kids on an abacus as the repetition of simple methods are accompanied by boredom.
                        <br />
                        The above finding seems to be true as the Abacus course is designed for the duration of 2 to 2.5 Years, during which the children have to keep practicing regularly that makes it repetitive, ultimately resulting in dropouts. Whereas, our Speed Building Software, a game based video program promotes the regular practice as it is perceived by the trainees more as a video game than study. This does not allow monotony to creep in. Hence, dropouts are rare with Mastermind Abacus.
                        <br />
                        <span className="font-bold"> Dr. Toshio Hayashi, Professor, Osaka Prefecture University, Director, Research Institute for Advanced Science and Technology (RIAST),</span> also suggests that if children come to like learning the abacus and move the beads on the abacus with fun, they will receive benefits from this experience.<br />

                        Our software has been designed specifically to promote practicing abacus. It creates an environment of playing a video game, without making the child realize that he/she is actually solving complex abacus problems.<br /><br />
                        <span className="font-bold">3. Mastermind Abacus Virtual Abacus:</span>
                        We found the need of a ready assistant which can be available as and when required to help the students as well as the teachers. A virtual assistant that can guide through the steps of solving the sums with step by step bead movement if the student or the teacher is stuck at some numerical. This led our development team in inventing a unique tool, The Virtual Abacus.
                        <br />
                        Virtual Abacus is a digital Abacus instrument in which you can put a sum and it guides you through step wise solution of the same showing bead movements of every step. This tool is very helpful for assisting both the students and teachers when no one is around to physically guide them.<br /><br />

                        <span className="font-bold">4. Mastermind Live Abacus E-Learning Platform:</span> Till the beginning of 2020, Abacus learning was considered as an offline program with teachers taking physical classes at their centers, requiring both the students and the teacher to move out of their homes. An additional investment towards infrastructure, furnishing and monthly overhead rental was a necessity for starting and conducting Abacus classes with student enrollment from a restricted surrounding area. Year 2020 brought with it the Covid 19 pandemic which anchored both students and teachers at home. This restriction actually gave birth to the idea of developing an abacus classroom which thrashed all the limitations and offering a global classroom in which both the teacher and students can join the class from the convenience of their homes.
                        <br />
                        Our IT team in coordination with the Training and Marketing team have successfully created the Hi-tech online Platform for Abacus teaching and learning. It is comprehensive Platform that enables an Abacus teacher to teach students from remote. This has given a flip to the volume of business that can be generated as there are no geographical limitations. It also gives multi lingual option in most popular languages of the world.
                        <br />
                        While a teacher teaches from his home, the students too can learn abacus from the confines and comfort of their home.
                        <br />
                        The system allows the teacher to assign Homework, conduct online exams, real time evaluation along with well planned lessons to teach mental math and oral math to the students.
                        <br />
                        The entire learning process is based on pre-recorded learning videos and game based video games for practice. The practice lessons are planned to give the feel of interesting video games where students have to solve sums to cross hurdles and earn points.
                        <br />
                        The system also allows a teacher to constantly keep a vigil on the students through the video conferencing option. This also allows the student to converse with the teacher if need be.
                        <br />
                        The system gives a complete ERP system to the teacher to manage the integrities of the business in terms of financial and marketing management.</>}

                />

            </div>
        </div>
    );
}

export default About;
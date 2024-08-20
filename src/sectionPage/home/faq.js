import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const FaqHome = () => {

    return (
        <React.Fragment>
            {/* Faq Part Start */}
            
            <div className="rs-faq-part style1 pt-80 pb-30 md-pt-70 md-pb-40" id='parent_faq'>
                <div className="container">
                    <div className="main-part innerpage">
                        <div className="faq-content mb-30 md-mb-30">
                            <div className="title family mb-30 md-mb-14">
                                <h2 className="text-part text-center" style={{fontWeight:"800"}}>Frequently Asked <span style={{color:"#fd6c24"}}>Questions</span></h2>
                            </div>
                            <Accordion className="accordion-style1" preExpanded={'a'}>
                                <AccordionItem className="accordion-item" uuid="a">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        What are the main benefits of enrolling my child in Mastermind Abacus training?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    Abacus training significantly enhances mental math skills. After 10 levels of training, your child will be able to calculate five times faster with accuracy. It also improves concentration, memory, and overall cognitive development, helping children excel in academics.
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="b">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        How does the abacus training program work, and what does it include?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    Initially, we teach students to calculate on the abacus using beads. Simultaneously, they are trained to visualize the abacus and calculate mentally, which improves their speed and accuracy. This process provides excellent brain exercise. The program is divided into multiple levels with weekly classes, covering everything from basic counting to complex calculations using the abacus tool.

                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="c">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        How often are classes held, and what is the structure of the levels in the program?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    The program is structured into 10 levels, with each level consisting of 24 hours of classes. Classes are typically held 1 or 2 times a week. Each level builds on the previous one, ensuring comprehensive learning and mastery of abacus skills. This progressive structure helps students develop their abilities methodically and effectively.
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="d">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        Can my child participate in both physical and online classes, and what are the differences?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    Both physical and online classes are available, and you can choose the one that suits your convenience.  Each format is designed to ensure effective learning and skill development in abacus.
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="e">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        How can I, as a parent, support my child&apos;s abacus learning and practice at home?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    We provide a Parent Handbook to guide you. Support your child by asking level-specific mental math questions for 5 to 10 minutes a day. Your encouragement and motivation play a crucial role in your child&apos;s learning and confidence. Regular practice and positive reinforcement will help your child master abacus skills effectively.
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="f">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        How long does it take for a child to complete the entire abacus program?

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    The duration varies, but typically it takes around 2 to 3 years to complete all levels, depending on the child&apos;s pace, consistency, and dedication to practice.

                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="g">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        What is the cost of enrolling in the abacus training, and are there any additional fees?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    The cost of enrolling in the abacus training varies based on the country and specific location. To get detailed information about the fees , please contact Mastermind Abacus directly or fill out the inquiry form on the website. They will provide you with all the necessary details and guide you through the enrollment process.

                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}


export default FaqHome;
import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const FaqSection = () => {

    return (
        <React.Fragment>
            <div className="rs-faq-part style1 pt-90 pb-30 md-pt-0 md-pb-40">
                <div className="container">
                    <div className="main-part innerpage">
                        <div className="faq-content mb-50 md-mb-30">
                            <div className="title mb-40 md-mb-14">
                                <h2 className="text-part text-center" style={{ fontSize: "18px" }}>In the Mastermind Abacus Franchise FAQs section, you will find the answer of all possible questions asked by prospective buyers. If you don&apos;t see an answer you are looking for, please fill the Franchisee Inquiry Form. Our team shall contact you to solve your queries.</h2>
                            </div>
                            <Accordion className="accordion-style1" preExpanded={'a'}>
                                <AccordionItem className="accordion-item" uuid="a">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            What are the franchise fee, initial costs, and royalty fees associated with a Mastermind Abacus franchise?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body"> The initial investment includes a franchise fee and setup costs. Mastermind Abacus does not charge royalty fees from their franchisees. The exact franchise fee varies based on the franchise model and the country.</AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="b">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            What kind of training and support does Mastermind Abacus provide to franchisees?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                        Mastermind Abacus offers comprehensive initial training, continuous support, marketing assistance, and access to teaching materials and an e-learning platform for teacher training.
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="c">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            What are the qualifications or background required to become a Mastermind Abacus franchisee?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body"> No specific qualifications are required. Any graduate with basic math skills and a passion for education can apply. Both individuals and existing educational centers are welcome to become franchisees.
                                        Here is the improved version:renewed. </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="d">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            How does the Mastermind Abacus program benefit children, and what age group is it designed for?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body"> The Mastermind Abacus program enhances children&apos;s mental math skills, concentration, and overall academic performance. It is designed for children aged 4 to 14 years.
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="e">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            What are the steps to apply for a Mastermind Abacus franchise, and how long does the process take?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">The application process involves filling out a form, an interview, and signing an agreement. The entire process typically takes a few weeks.</AccordionItemPanel>
                                </AccordionItem>
                               
                            </Accordion>
                        </div>


                    </div>
                </div>
            </div>
            {/* Faq Part End */}


        </React.Fragment>

    );
}


export default FaqSection;
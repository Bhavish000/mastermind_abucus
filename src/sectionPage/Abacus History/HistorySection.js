import React, { useState } from "react";
import mainImage from '@/styles/img/abacus/History/maxresdefault.jpg';
import ModalVideo from "react-modal-video";
import Image from "next/image";
import SectionTitle from "@/component/Common/SectionTitle";
import Link from "next/link";
import { HomeModal } from "@/component/Common/Modal/HomeModal";

function HistorySection() {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const HandleClickButton = () => {
        setIsModalOpen(!isModalOpen);
    }
    const openModal2 = () => setIsOpen(!isOpen);

    return (
        <div id="rs-about" className="rs-about style1 pt-50 pb-50 md-pt-70 md-pb-10">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='XhhZFrP_K2o' onClose={() => { openModal2(); }} />
            <div className="container p-4 rounded section-shadow">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-last">
                        <div className="sec-title md-mb-10">
                            <h1 className="title family fs-2">
                                HISTORY OF ABACUS ITS JOURNEY FROM A <span className="title-change" > MANUAL CALCULATOR TO A BRAIN DEVELOPMENT TOOL</span>
                            </h1>
                            <div className="desc ">
                                If we were to understand the modern Abacus, we have to understand the history of Abacus, its journey from a manual calculator to a brain development tool. The word Abacus comes from a Greek word <span className="orange-color">‘abax’</span> or <span className="orange-color">‘abakon’</span>  meaning <span className="orange-color">‘tabular form’</span>, possibly derived from a Semitic word <span className="orange-color"> ‘abq’</span> or <span className="orange-color"> ‘sand’</span>. It is the most primitive form of calculating or counting device. The Abacus origin is not exactly established. It probably was invented somewhere between 300 and 500 BC.
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 pr-30 md-pr-10 md-mt-20 md-mb-20">
                        <div className="img-part popup-videos">
                            <Image
                                src={mainImage}
                                alt="Mastermind Abacus"
                                onClick={openModal2}
                            />
                        </div>
                    </div>

                </div>

                <SectionTitle
                    sectionClass="sec-title mb-15"
                    subtitleClass="sub-title primary"
                    // subtitle="About Us"
                    titleClass="title"
                    descClass="desc pr-10"
                    description={<>
                        The ancient Abacus calculating devices or the Abacus Calculators have traveled a long way and have transitioned in the process of travel through different countries. The study of the <span className="font-bold">history of Abacus</span> indicates that <span className="font-bold">Suanpan the Chinese abacus</span> had 2/5 decks, but due to its complexity was replaced by<span className="font-bold">Soroban abacus, a Japanese abacus</span> , that was modified by a famous mathematician Seki Kowa. He removed one bead each from upper and lower decks to make it 1/4 decks, i.e., the abacus we use today, the Soroban abacus, this revolutionized <Link href={'/abacus-math'} className="primary-color font-bold">Abacus Math</Link> as it did help count large numbers.<br/><br/>

                        It gained popularity with the whole World competing on a common platform after Globalization. It had an impact on the education system of different nations. Today no one asks the question, <Link href={'/about-abacus/what-is-abacus'} className="primary-color font-bold">‘what is an Abacus?’</Link>
                        <br/>
                        Although Abacus is a simple counting tool it enhances the overall comprehension of Math and Boosts better and faster calculation skills and improves problem-solving abilities. It would be easy to say abacus training become an essential element of learning Mental Math. <br />
                        <div className="text-center mt-20">
                            <span className="bolding-fnt font-bold ">Experience Amalgamation Of Ancient Abacus With Latest Teaching Methodology.</span>
                            <div className="btn-part mt-20">
                                <button className="readon2" onClick={HandleClickButton}>Book A Free Demo Class</button>
                            </div>
                        </div>
                    </>}

                />
            </div>
            <HomeModal isOpen={isModalOpen} onClose={openModal} />
        </div>
    );
}

export default HistorySection;
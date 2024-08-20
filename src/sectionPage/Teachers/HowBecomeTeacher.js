import { HomeModal } from '@/component/Common/Modal/HomeModal';
import SectionTitle from '@/component/Common/SectionTitle';
import React, { useState } from 'react';

const HowBecomeTeacher = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);


	const closeModal = () => {
		setIsModalOpen(false);
	};

    return (
        <div className="rs-categories style1 pt-94 pb-70 md-pt-64 md-pb-0 back2-color" >
            <div className="container">
                <div className="row y-middle mb-50 md-mb-30">
                    <div className="col-md-12 text-center ">
                        <SectionTitle
                            sectionClass="sec-title"
                            titleClass="title family mb-0"
                            title={<>WHO CAN BECOME A <span className='title-change' > TEACHER WITH MASTERMIND ABACUS</span></>}
                            // subtitleClass="sub-title primary"
                            // subtitle=""
                        />
                    </div>
                </div>

                <div className="row">
                 
                     <div className="col-lg-4 col-md-6 mb-30">
                      
                      <div className='categories-item'>
                          <div className='icon-part'>
                          <i class="fa-solid fa-graduation-cap title-change" ></i>
                          </div>
                          <div className='content-part'>
                              <h4 className="title">ANY GRADUATE</h4>
                              <span className="courses">Any Graduate with a passion for teaching and can be regularly available</span>
                          </div>
                      </div>
                  </div>
                   
                    <div className="col-lg-4 col-md-6 mb-30">
                      
                      <div className='categories-item'>
                      <div className='icon-part'>
                      <i class="fa-solid fa-comments title-change"></i>
                          </div>
                          <div className='content-part'>
                              <h4 className="title">COMMUNICATION SKILLS</h4>
                              <span className="courses">A person with good communication skills having basic knowledge of computers.</span>
                          </div>
                      </div>
                  </div>
                   
                    <div className="col-lg-4 col-md-6 mb-30">
                      
                      <div className='categories-item'>
                      <div className='icon-part'>
                      <i class="fa-solid fa-chalkboard-user title-change" ></i>
                          </div>
                          <div className='content-part'>
                              <h4 className="title">REQUISITE HARDWARE</h4>
                              <span className="courses">A person with good communication skills having basic knowledge of computers.</span>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
            <HomeModal isOpen={isModalOpen} onClose={closeModal} status={'TeacherIn'}/>
        </div>
    );
}

export default HowBecomeTeacher;
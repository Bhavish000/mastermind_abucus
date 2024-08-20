import React from 'react';

// Team Members
import teamimg1 from '@/styles/img/abacus/about/01.jpg';
import teamimg2 from '@/styles/img/abacus/about/02.jpg';
import teamimg3 from '@/styles/img/abacus/about/03.jpg';
import teamimg4 from '@/styles/img/abacus/about/04.png';
import teamimg5 from '@/styles/img/abacus/about/06.png';
import teamimg6 from '@/styles/img/abacus/about/07.png';
import SectionTitle from '@/component/Common/SectionTitle';
import SingleTeam from '@/component/Team/SingleTeam';

const Team = () => {

    return (
        <React.Fragment>
            <div id="rs-team" className="rs-team style1 inner-style orange-style pt-102 pb-110 md-pt-64 md-pb-70 back2-color" >
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title mb-50 md-mb-30 text-center"
                        subtitleClass="sub-title orange"
                        // subtitle="Team"
                        titleClass="title family mb-0"
                        title={<>OUR <span className='title-change' >TEAM</span></>}
                    />
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-30">
                            <SingleTeam
                                itemClass="team-item"
                                image={teamimg1}
                                Title="NAVEEN CHOWDHARI"
                                Designation="DIRECTOR"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <SingleTeam
                                teamClass="team-item"
                                image={teamimg2}
                                Title="RAJESH JHA"
                                Designation="VICE PRESIDENT"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <SingleTeam
                                teamClass="team-item"
                                image={teamimg3}
                                Title="HIMANSHU SINGH"
                                Designation="NATIONAL HEAD"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 md-mb-30">
                            <SingleTeam
                                teamClass="team-item"
                                image={teamimg4}
                                Title="DILIP JANGID"
                                Designation="HEAD OF DEPT. IT"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-30">
                            <SingleTeam
                                teamClass="team-item"
                                image={teamimg5}
                                Title="AVINASH SHARMA"
                                Designation="CHIEF CONTENT DEVELOPER"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <SingleTeam
                                teamClass="team-item"
                                image={teamimg6}
                                Title="ZAHEER RAZA ANSARI"
                                Designation="HEAD OF DEPT. TRAINING"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Team;
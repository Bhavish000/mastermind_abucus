import { HomeModal } from '@/component/Common/Modal/HomeModal';
import Link from 'next/link';
import React, { useState } from 'react';

const FranchiseManu = () => {
    
	const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    return (
        <React.Fragment>

            <span className="btn-part rounded" style={{ backgroundColor:"#FD6C24", paddingBlock:"10px", paddingInline:"20px"}}>
                <Link href="#" onClick={openModal}   className="apply-btn white-color">FRANCHISE INQUIRY</Link>
            </span>
            <HomeModal  isOpen={isModalOpen} onClose={openModal} status={'FRANCHISE'}  mess={"FRANCHISE INQUIRY"}  id={'3'} />
        </React.Fragment>
    );
}

export default FranchiseManu;
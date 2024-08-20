import { HomeModal } from '@/component/Common/Modal/HomeModal';
import Link from 'next/link';
import React, { useState } from 'react';

const FranchiseMobile = ({ menuOpen, headerFullWidth }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className={headerFullWidth ? "container-fluid relative" : "container relative"}>
            <div className={menuOpen ? " current-psn mobile-menu-part  open" : "current-psn mobile-menu-part"}>
                <div className="mobile-menu">
                    <ul className="nav-menu" style={{width:"100%"}}>
                        <li className='home' ><Link href="/abacus-franchise">HOME </Link>

                        </li>
                        <span className="btn-part text-center" style={{ color: "white", backgroundColor: "#FD6C24", paddingBlock: "10px", paddingInline: "40px" , width:"100%"}}>
                            <button onClick={openModal} href="franchisee_inquiry/abacus" className="apply-btn">FRANCHISE INQUIRY</button>
                        </span>
                    </ul>
                </div>
            </div>
            <HomeModal  isOpen={isModalOpen} onClose={openModal} status={'FRANCHISE'}  mess={"FRANCHISE INQUIRY"}  id={'3'}  />
        </div>
    )
}

export default FranchiseMobile;
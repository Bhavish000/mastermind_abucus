import { HomeModal } from '@/component/Common/Modal/HomeModal';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const FranchiseManu = (props) => {
    // const { parentMenu, secondParentMenu } = props;

    const location = useRouter();
    
	const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    return (
        <React.Fragment>
            {/* <li className={location.pathname === '/abacus-franchise' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}><Link href="/abacus-franchise">HOME </Link>

            </li> */}
            {/* <li className={location.pathname === '/abacus-franchise/investment' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link href="/abacus-franchise/investment">Investment </Link>

            </li>
            <li className={location.pathname === '/abacus-franchise/faq' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link href="/abacus-franchise/faq" >FAQS </Link>
            </li> */}
            {/* <li>
                <Link href="/become-a-teacher">ABACUS WORKSHEET GENERATOR</Link>

            </li> */}

            <span className="btn-part rounded" style={{ backgroundColor:"#FD6C24", paddingBlock:"10px", paddingInline:"20px"}}>
                <Link href="#" onClick={openModal}   className="apply-btn white-color">FRANCHISE INQUIRY</Link>
            </span>
            <HomeModal  isOpen={isModalOpen} onClose={openModal} status={'FRANCHISE'}  mess={"FRANCHISE INQUIRY"}  id={'3'}  />
        </React.Fragment>
    );
}

export default FranchiseManu;
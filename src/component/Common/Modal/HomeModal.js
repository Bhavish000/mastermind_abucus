import BookclassModal from '@/sectionPage/Student Landing page/BookclassModal';
import React from 'react'
import { Modal } from 'react-bootstrap'
import Student_Inquiry_form from './Student_InquiryModal';
import Franchise_inquiry_form from '@/sectionPage/franchisee_inquiry_form/Franchise_inquiry_form';
import Teacher_inquiry_form from '@/sectionPage/Teachers/Teacher_inquiry_form';
// import BookclassModal from '../../../pages/Student Landing page/BookclassModal';
// import Student_Inquiry_form from './Student_InquiryModal';
// import Franchise_inquiry_form from '../../../pages/franchisee_inquiry_form/Franchise_inquiry_form';
// import Teacher_inquiry_form from '../../../pages/Teachers/Teacher_inquiry_form';

export const HomeModal = ({ isOpen, onClose, status, mess, Id }) => {
    if (!isOpen) return null;

    const renderContent = () => {
        switch (status) {
            case 'offline':
                return <Student_Inquiry_form onClose={onClose}/>;
            case 'bookclass':
                return <BookclassModal onClose={onClose} />;
            case 'FRANCHISE':
                return <Franchise_inquiry_form message={mess} id={Id} onClose={onClose}/>
            case 'TeacherIn':
                    return <Teacher_inquiry_form onClose={onClose}/>    
            default:
                return <BookclassModal onClose={onClose} />;
        }
    };

    return (
        <div>
            <Modal
                show={isOpen}
                onHide={onClose}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                {renderContent()}
                {/* <BookclassModal onClose={onClose}/> */}
            </Modal>
        </div>
    );
};
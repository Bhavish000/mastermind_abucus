import BookclassModal from '@/sectionPage/Student Landing page/BookclassModal';
import Link from 'next/link';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const BannerFranchiseFaq = () => {
    const [show, setShow] = useState(false);
    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner BannerFranchiseFaq">
                <div className="container relative">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 offset-lg-6 ">
                            <div className="banner-content text-center">
                                {/* <h1 className="banner-title" > GENIUS</h1>  */}
                                <div className="sub-title white-color " >WE WILL BE HAPPY TO ANSWER YOUR</div>
                                <div className="sub-title white-color">QUESTIONS</div>
                                <div className="sub-title white-color" >YOU CAN CONTACT US FOR MORE</div>
                                <div className="sub-title white-color"> DETAIL</div>


                                <div className="banner-btn">
                                    <Link href={'/contact'} className="readon2 banner-style banner-change" >Contact US</Link>
                                </div>
                                {/* <div className="sub-title" > Offline / Online Classes Available </div> */}

                                {/* <div className="left-shape hidden-md animated pulse infinite">
                                    <img src={leftShapeImg} alt="" />
                                </div> */}
                               
                                
                            </div>
                            
                       
                        {/* <div className="col-lg-6 col-md-12">
                            <div className="banner-img">
                                <img src={bannerImg}  alt="Banner Image" />
                            </div> */}
                           
                        </div>
                        
                    </div>

                    
                </div>
                {/* <div className="bottom-shape">
                    <img src={bottomShapeImg} alt="" />
                </div> */}
                   <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Body>
                      <BookclassModal/>
                    </Modal.Body>
                </Modal>
                
            </div>
        </React.Fragment>
    );
}

export default BannerFranchiseFaq;
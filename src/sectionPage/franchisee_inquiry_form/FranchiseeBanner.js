import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Franchise_inquiry_form from './Franchise_inquiry_form';
import childImg from '@/styles/images/mastermind_lady_teacher.png'
import BookclassModal from '../Student Landing page/BookclassModal';
import Image from 'next/image';
const FranchiseeBanner = () => {
    const [show, setShow] = useState(false);
    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner style5">
                <div className="container relative">
                    <div className="row">
                        <div className="col-lg-7 col-md-12" >
                            <div className="banner-content " style={{left:30}}>
                                <div className="sub-title" style={{color : "#F58634", fontSize:'30px',paddingBottom:10}}>START YOUR OWN</div>
                                <h1 className="banner-title" > <span style={{backgroundColor:"#ffffff", color: "#F58634", paddingInline: "5px"}}>ABACUS</span></h1>
                         
                                <div className="sub-title" style={{fontSize:30}}> LEARNING CENTER </div>
                            </div>
                            <div style={{bottom:0,position:'absolute'}}>
                            <Image src={childImg}  alt="Banner Image" />
                            </div>
                            
                        </div>
                        <div className="col-lg-5 col-md-12 " style={{padding:'10px'}}>
                            <Franchise_inquiry_form/>
                            {/* <div className="banner-img">
                            </div> */}
                            {/* <div className="right-shape hidden-md animated pulse infinite">
                                <img src={rightShapeImg} alt="" />
                            </div> */}
                        </div>
                        
                    </div>

                    
                </div>
                <div className="bottom-shape">
                    {/* <img src={bottomShapeImg} alt="" /> */}
                </div>
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
            {/* <!-- banner section end --> */}
        </React.Fragment>
    );
}

export default FranchiseeBanner;
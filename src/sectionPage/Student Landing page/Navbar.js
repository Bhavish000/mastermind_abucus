// import { useState, useEffect } from 'react';
// // import logo from '@/styles/images/Mastermind Image 29.png';
// import abacusLogo from '@/styles/img/mastermindabacus-logo.png'
// import Image from 'next/image';
// import Link from 'next/link';
// // import { PiPhoneCallFill } from "react-icons/pi";
// // import { FaPlus } from "react-icons/fa";

// function Navbar (props) {

//     const { headerClass, headerFullWidth, parentMenu, secondParentMenu, activeMenu, headerNormalLogo, headerStickyLogo, mobileNormalLogo, TopBar, TopBarClass, emailAddress, phoneNumber, Location } = props;

//     const [isVisible, setIsVisible] = useState(false);
//     const [showButton, setShowButton] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPosition = window.scrollY;
//             if (scrollPosition > window.innerHeight) {
//                 setShowButton(true);
//             } else {
//                 setShowButton(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <>
//             <div  className={headerClass ? headerClass : 'full-width-header home8-style4 main-home'}>
//                 <header id="rs-header" className='rs-header'>
//                     {
//                         TopBar ? <TopHeader topBarClass={TopBarClass} emailAddress={emailAddress} phoneNumber={phoneNumber} Location={Location} /> : ""
//                     }

//                     <div className={isVisible ? 'menu-area menu-sticky sticky' : 'menu-area menu-sticky'}>
//                         <div className={headerFullWidth ? 'container-fluid' : 'container'}>
//                             <div className="row y-middle">
//                                 <div className="col-lg-2">
//                                     <div className="logo-cat-wrap hidden-md">
//                                         <div className="logo-part pr-90">
//                                             <Link href="/">
//                                                 <Image className="normal-logo" src={headerNormalLogo ? abacusLogo : abacusLogo} alt="" />
//                                                 <Image className="sticky-logo" src={headerStickyLogo ? abacusLogo : abacusLogo} alt="" />
//                                             </Link>
//                                         </div>

//                                     </div>
//                                 </div>
//                                 <div className="col-lg-10 text-center">
//                                     <div className="rs-menu-area">
//                                         <div className="main-menu">
//                                             <div className="mobile-menu md-display-block">
//                                                 <Link href="/" className="mobile-normal-logo">
//                                                     <Image className="normal-logo" width={110} src={mobileNormalLogo ? abacusLogo : abacusLogo} alt="" />
//                                                 </Link>
//                                                 <Link href="/" className="mobile-sticky-logo">
//                                                     <Image src={abacusLogo} width={110} alt="logo" />
//                                                 </Link>
//                                                 <a href="#" className="rs-menu-toggle" onClick={() => {
//                                                     setMenuOpen(!menuOpen)
//                                                 }} aria-label="Go on home page">
//                                                     <i className="fa fa-bars"></i>
//                                                 </a>

//                                             </div>
//                                             <nav className="rs-menu hidden-md">
//                                                 <ul className="nav-menu mb-0">
//                                                     {/* <MenuItems
//                                                         parentMenu={parentMenu}
//                                                         secondParentMenu={secondParentMenu}
//                                                         activeMenu={activeMenu}
//                                                     /> */}
//                                                 </ul>
//                                             </nav>
//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* <RSMenuItem
//                         menuOpen={menuOpen}
//                         setMenuOpen={setMenuOpen}
//                         parentMenu={parentMenu}
//                         secondParentMenu={secondParentMenu}
//                     /> */}
//                     {/* <div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div> */}
//                 </header>
//                 {/* <CanvasMenu
// 					canvasClass={CanvasClass ? CanvasClass : "right_menu_togle orange_color hidden-md"}
// 					canvasLogo={CanvasLogo ? CanvasLogo : darkLogo}
// 				/> */}
//             </div>
//         </>

//     );
// }

// export default Navbar;














import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from 'react';
import abacusLogo from '@/styles/img/mastermindabacus-logo.png'
import Link from "next/link";
// import MenuItems from "./menuItems";
// import TopHeader from "./topHeader";
// import RSMenuItem from "./rsMenuItem";
const inter = Inter({ subsets: ["latin"] });

export default function Navbar (props) {

	

    const { headerClass, headerFullWidth, parentMenu, secondParentMenu, activeMenu, headerNormalLogo, headerStickyLogo, mobileNormalLogo, TopBar, TopBarClass, emailAddress, phoneNumber, Location } = props;

    const [menuOpen, setMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false);


     const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > window.innerHeight) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
            <div  className={headerClass ? headerClass : 'full-width-header home8-style4 main-home bg-white shadow'}>
                <header id="rs-header" className='rs-header'>
                

                    <div className={isVisible ? 'menu-area menu-sticky sticky' : 'menu-area menu-sticky'}>
                        <div className={headerFullWidth ? 'container-fluid' : 'container'}>
                            <div className="row y-middle">
                                <div className="col-lg-2">
                                    <div className="logo-cat-wrap hidden-md">
                                        <div className="logo-part pr-90">
                                            <Link href="/">
                                                <Image className="normal-logo" src={headerNormalLogo ? abacusLogo : abacusLogo} alt="Mastermind Abacus" />
                                                <Image className="sticky-logo" src={headerStickyLogo ? abacusLogo : abacusLogo} alt="Mastermind Abacus"  />
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-10 text-center">
                                    <div className="rs-menu-area">
                                        <div className="main-menu">
                                            <div className="mobile-menu md-display-block">
                                                <Link href="/" className="mobile-normal-logo">
                                                    <Image className="normal-logo" width={110} src={mobileNormalLogo ? abacusLogo : abacusLogo} alt="Mastermind Abacus"  />
                                                </Link>
                                                <Link href="/" className="mobile-sticky-logo">
                                                    <Image src={abacusLogo} width={110} alt="logo" />
                                                </Link>
                                                <a href="#" className="rs-menu-toggle" onClick={() => {
                                                    setMenuOpen(!menuOpen)
                                                }} aria-label="Go on home page">
                                                    <i className="fa fa-bars"></i>
                                                </a>

                                            </div>
                                          
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                  
                   
                </header>
             
            </div>
    );
}
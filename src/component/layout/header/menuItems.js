import Link from "next/link"
import { useRouter } from "next/router";

function MenuItems(props) {
    const { parentMenu, secondParentMenu } = props;

    const location = useRouter();
    return (
        <>
            <li className={parentMenu === 'home' ? 'rs-mega-menu menu-item-has-children current-menu-item plus' : 'rs-mega-menu menu-item-has-children plus'}><Link href="/">HOME </Link>

            </li>
            <li className={parentMenu === 'abacus-class' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link href="#" >ABACUS CLASSES <i className="fa fa-angle-down" style={{ color: "black" }}></i> </Link>
                <ul className="sub-menu">
                    <li>
                        <Link href="/abacus-online-classes" className={location === "/abacus-online-classes" ? "active-menu" : ""}>Abacus Online Classes</Link>
                    </li>
                    <li>
                        <Link href="/abacus-classes-near-me" className={location.pathname === "/new_react/abacus-classes-near-me" ? "active-menu" : ""}>Abacus Classes Near Me</Link>
                    </li>
                    <li>
                        <Link href="/lingo-bingo" className={location.pathname === "/lingo-bingo" ? "active-menu" : ""}>Lingo Bingo</Link>
                    </li>
                    <li>
                        <Link href="/abacus-for-schools" className={location.pathname === "/about-2" ? "active-menu" : ""}>Abacus Classes In Shcool</Link>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'resources' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link href="#" as="#">RESOURCES <i className="fa fa-angle-down" style={{ color: "black" }}></i> </Link>
                <ul className="sub-menu">
                    <li>
                        <Link href="/about-abacus/what-is-abacus" className={location.pathname === "/course" ? "active-menu" : ""}>What is Abacus </Link>
                    </li>
                    <li>
                        <Link href="/about-abacus/history-of-abacus" className={location.pathname === "/course-2" ? "active-menu" : ""}>History Of Abacus</Link>
                    </li>
                    <li>
                        <Link href="/about-abacus/research-on-abacus" className={location.pathname === "/course-3" ? "active-menu" : ""}>Reasearch On abacus</Link>
                    </li>
                    <li>
                        <Link href="/abacus-math" className={location.pathname === "/course-4" ? "active-menu" : ""}>Abacus Math</Link>
                    </li>
                    <li>
                        <Link href="/abacus-worksheet-generator" className={location.pathname === "/course-5" ? "active-menu" : ""}>Abacus WorkSheet Generator</Link>
                    </li>

                </ul>
            </li>
            <li>
                <Link href="/abacus-franchise">GET OUR FRANCHISE</Link>

            </li>

            <li className={parentMenu === 'teacher' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link href="/become-a-teacher">BECOME A TEACHER</Link>

            </li>

            <li className={parentMenu === 'blog' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link href="/blog">Blog</Link>

            </li>

            <li className={parentMenu === 'about' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link href="#">ABOUT US <i className="fa fa-angle-down" style={{ color: "black" }}></i> </Link>
                <ul className="sub-menu">
                    <li>
                        <Link href="/about-us" className={location.pathname === "/blog" ? "active-menu" : ""}>About Company</Link>
                    </li>
                    <li>
                        <Link href="/gallery" className={location.pathname === "/blog" ? "active-menu" : ""}>Gallery</Link>
                    </li>

                </ul>
            </li>
            <li className={parentMenu === 'contact' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link href="/contact">
                    Contact
                </Link>

            </li>
        </>
    )
}

export default MenuItems
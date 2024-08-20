import { useEffect, useState } from "react";
import { HomeModal } from "../Modal/HomeModal";

const ScrollToTop = (props) => {
	const { status,name,message,id} = props;

	const [isVisible, setIsVisible] = useState(false);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};


	useEffect(() => {
		// Button is displayed after scrolling for 500 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 200) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<div className='scrollup'>
			{isVisible && (
				<div className="btn-part">
					<button onClick={openModal} className="readon2 scrollbtn" style={{ backgroundColor: "#F58634" }}>{name ? name : 'Book A Free Demo Class'}</button>
				</div>
			)}
			<HomeModal isOpen={isModalOpen} onClose={closeModal} status={status} mess={message} Id={id}/>
		</div>
	);
}

export default ScrollToTop
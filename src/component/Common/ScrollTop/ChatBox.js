import { useEffect, useState } from "react";
// import { HomeModal } from "../Modal/HomeModal";

const ChatBox = (props) => {
	const { status, name, message, id } = props;

	const [isVisible, setIsVisible] = useState(false);
	const [chat, setChat] = useState(false)



	const handleClick = () => {
		setChat(true)
		if (window.loadBotsonic) {
			window.loadBotsonic();
		} else {
			console.error("loadBotsonic function is not available");
		}
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
		<div className='chatOpen'>
			{isVisible && (
				<div className="btn-part">
					{!chat ? <button onClick={handleClick}>
						<i class="fa-solid fa-comment-dots chatBox"></i>
					</button> : null}
					{/* <button onClick={openModal} className="readon2 scrollbtn" style={{ backgroundColor: "#F58634" }}>{name ? name : 'Book A Free Demo Class'}</button> */}
				</div>
			)}
		</div>
	);
}

export default ChatBox
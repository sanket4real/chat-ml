import React from "react";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import notification from "../assets/notification.png";
import toggle from "../assets/toggle.png";

const Header = ({ navLinks }) => (
	<header className=" text-[#616161] shadow-md p-4">
		<nav className="flex justify-between items-center">
			<div className="flex gap-2 font-bold text-lg">
				<img src={logo} alt="logo" />
				mAI
			</div>
			<ul className="flex space-x-6">
				{navLinks.map((link, index) => (
					<li
						key={index}
						className="text-[#616161] font-semibold hover:text-gray-300 cursor-pointer">
						{link}
					</li>
				))}
			</ul>
			<div className="flex gap-3 font-bold text-lg">
				<button>
					<img src={toggle} alt="toggle" />
				</button>
				<button>
					<img src={notification} alt="notification" />
				</button>
				<button>
					<img src={profile} alt="profile" />
				</button>
			</div>
		</nav>
	</header>
);

export default Header;

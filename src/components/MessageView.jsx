import { useState } from "react";

const MessageView = ({ selectedProject, selectedCandidate }) => {
	const [activeTab, setActiveTab] = useState("messages");

	return (
		<div className="w-full p-4 ml-2 bg-white border-[1px] border-[#EBEBEB] rounded-md">
			{selectedProject && selectedCandidate ? (
				<div>
					<h2 className="text-xl font-bold">{selectedCandidate.name}</h2>
					<div className="border-b">
						<nav className="flex space-x-4">
							<button
								onClick={() => setActiveTab("messages")}
								className={`px-4 py-2 border-b-2 ${
									activeTab === "messages"
										? "border-black text-black"
										: "border-transparent hover:text-black"
								}`}>
								Messages
							</button>
							<button
								onClick={() => setActiveTab("email")}
								className={`px-4 py-2 border-b-2 ${
									activeTab === "email"
										? "border-black text-black"
										: "border-transparent hover:text-black"
								}`}>
								Email
							</button>
							<button
								onClick={() => setActiveTab("text")}
								className={`px-4 py-2 border-b-2 ${
									activeTab === "text"
										? "border-black text-black"
										: "border-transparent hover:text-black"
								}`}>
								Text
							</button>
						</nav>
					</div>
					<div className="mt-4">
						{activeTab === "messages" && <div>Messages content</div>}
						{activeTab === "email" && <div>Email content</div>}
						{activeTab === "text" && <div>Text content</div>}
					</div>
				</div>
			) : (
				<p className="flex items-center justify-center h-full text-[#D2D2D2] text-center text-3xl mt-20">
					Please select project name and candidate
				</p>
			)}
		</div>
	);
};

export default MessageView;

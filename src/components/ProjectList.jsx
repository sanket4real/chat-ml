import React from "react";

const ProjectList = ({
	projects,
	onSelectProject,
	selectedProject = { selectedProject },
}) => (
	<div className="p-4 bg-white border-[1px] border-[#EBEBEB] rounded-md">
		<details className="dropdown w-full">
			<summary className="text-lg font-bold  cursor-pointer flex items-center justify-between">
				Project Name
				<svg
					className="w-4 h-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</summary>
			<div className="dropdown-content w-full mt-4">
				<input
					type="text"
					placeholder="Search"
					className="w-full p-2 mb-4 border rounded-md"
				/>
				<ul className="space-y-4">
					{projects.map((project) => (
						<li
							key={project.id}
							onClick={() => onSelectProject(project)}
							className={`flex items-center justify-between p-4 border rounded-md hover:bg-gray-100 cursor-pointer ${
								selectedProject?.id === project.id ? "bg-[#E5F0FA]" : ""
							}`}>
							<div className="font-semibold">{project.name}</div>
							<div className="flex items-center pr-2">
								{project.members.map((member, index) => (
									<span
										key={index}
										className={`flex items-center justify-center h-9 w-9 text-sm p-2 rounded-full font-semibold -mr-3 ${
											member.text.startsWith("+")
												? "bg-white text-black border-[1px] border-dashed"
												: member.bgColor === "light-pink"
												? "bg-light-pink"
												: member.bgColor === "light-grey"
												? "bg-light-grey"
												: member.bgColor === "light-green"
												? "bg-light-green"
												: "bg-white"
										}`}>
										{member.text}
									</span>
								))}
							</div>
						</li>
					))}
				</ul>
			</div>
		</details>
	</div>
);

export default ProjectList;

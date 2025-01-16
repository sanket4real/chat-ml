import React from "react";

const CandidateList = ({ candidates, onSelectCandidate }) => (
	<div className="p-4 bg-white border-[1px] border-[#EBEBEB] mt-2 rounded-md">
		<details className="dropdown w-full">
			<summary className="text-lg font-bold cursor-pointer flex items-center justify-between">
				Candidates
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
				<ul className="gap-2 flex md:flex-row flex-col items-center">
					{candidates.map((candidate) => (
						<li
							key={candidate.id}
							onClick={() => onSelectCandidate(candidate)}
							className="relative w-full md:w-1/2 p-4 border rounded-md hover:bg-gray-100 cursor-pointer flex flex-col justify-start items-start">
							<span className="absolute -top-2 -right-2 flex justify-center items-center text-sm bg-[#0D77D4] text-white p-4 w-2 h-4 rounded-full font-medium">
								{candidate.notifications}
							</span>
							<div className="flex items-center justify-start gap-2">
								<span
									className={`flex items-center justify-center h-9 w-9 text-sm p-2 rounded-full font-semibold bg-light-grey `}>
									{candidate.initials}
								</span>
								<div className="font-semibold">{candidate.name}</div>
							</div>
							<p className="text-sm text-black  line-clamp-2 mt-2">
								{candidate.description}
							</p>
							<span className="text-xs text-[#898989] ml-auto mt-2">3 min ago</span>
						</li>
					))}
				</ul>
			</div>
		</details>
	</div>
);
export default CandidateList;

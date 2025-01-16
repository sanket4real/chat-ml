import React, { useState } from "react";
import { navLinks, candidates, projects } from "./utils/data";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import CandidateList from "./components/CandidateList";
import MessageView from "./components/MessageView";

const App = () => {
	const [selectedProject, setSelectedProject] = useState(null);
	const [selectedCandidate, setSelectedCandidate] = useState(null);

	return (
		<div className="h-screen flex flex-col">
			<Header navLinks={navLinks} />
			<div className="flex flex-grow bg-light-blue-bg p-2">
				<div className="flex flex-col w-5/12 max-w-[476px] ">
					<ProjectList projects={projects} onSelectProject={setSelectedProject} />
					<CandidateList
						candidates={candidates}
						onSelectCandidate={setSelectedCandidate}
					/>
				</div>
				{selectedProject && selectedCandidate && (
					<MessageView
						selectedProject={selectedProject}
						selectedCandidate={selectedCandidate}
					/>
				)}
			</div>
		</div>
	);
};

export default App;

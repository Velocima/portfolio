import React from 'react';
import Project from './Project';
import { projects } from '../jsInfo/projectsInfo';

export default function Projects() {
	return (
		<main>
			{projects.map((project, index) => {
				return (
					<Project
						image={project.image}
						imageAlt={project.imageAlt}
						codeLink={project.codeLink}
						websiteLink={project.websiteLink}
					/>
				);
			})}
		</main>
	);
}

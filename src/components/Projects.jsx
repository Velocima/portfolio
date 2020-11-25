import React from 'react';
import Project from './Project';
import { projects } from '../jsInfo/projectsInfo';
import { IconContext } from 'react-icons';
import { BiHome } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import '../css/projects.css';

export default function Projects() {
	return (
		<main className='projects'>
			<Link to='/' className='home-button-a'>
				<IconContext.Provider value={{ className: 'home-button' }}>
					<BiHome />
				</IconContext.Provider>
			</Link>
			{projects.map((project, index) => {
				return (
					<Project
						image={project.image}
						imageAlt={project.imageAlt}
						codeLink={project.codeLink}
						websiteLink={project.websiteLink}
						key={index}
					/>
				);
			})}
		</main>
	);
}

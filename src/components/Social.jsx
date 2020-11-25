import React from 'react';
import '../css/social.css';
import githubLogo from '../images/GitHub-Mark-32px.png';
import { IconContext } from 'react-icons';
import { BiEnvelope } from 'react-icons/bi';

export default function Social() {
	return (
		<nav>
			<a href='https://github.com/Velocima' target='_blank'>
				<img src={githubLogo} alt='' />
			</a>
			<a href='mailto:'>
				<IconContext.Provider value={{ className: 'react-icons' }}>
					<BiEnvelope />
				</IconContext.Provider>
			</a>
		</nav>
	);
}

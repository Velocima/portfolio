import React from 'react';
import '../css/social.css';
import githubLogo from '../images/GitHub-Mark-32px.png';

export default function Social() {
	return (
		<nav>
			<a href='https://github.com/Velocima'>
				<img src={githubLogo} alt='' />
			</a>
			<a href='mailto:'>mail</a>
		</nav>
	);
}

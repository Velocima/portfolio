import React from 'react';
import { IconContext } from 'react-icons';
import { BiLink } from 'react-icons/bi';
import maxLandingImg from '../images/max-landing-page.png';
import millicentLandingImg from '../images/millicent-landing-page.png';

export default function Projects() {
	return (
		<main>
			<article>
				<img src={maxLandingImg} alt='The landing page for my portfolio website' />
				<a href='https://github.com/Velocima/portfolio' target='_blank'>
					<IconContext.Provider value={{ className: 'react-icons' }}>
						Code <BiLink />
					</IconContext.Provider>
				</a>
				<a href='https://maxhartley.com/' target='_blank'>
					Live version <BiLink />
				</a>
			</article>
			<article>
				<img src={millicentLandingImg} alt='The landing page for Millicent Mehndi henna' />
				<a href='https://github.com/Velocima/Millicent' target='_blank'>
					<IconContext.Provider value={{ className: 'react-icons' }}>
						Code <BiLink />
					</IconContext.Provider>
				</a>
				<a href='http://www.millicent-mehndi.co.uk/' target='_blank'>
					Live version <BiLink />
				</a>
			</article>
		</main>
	);
}

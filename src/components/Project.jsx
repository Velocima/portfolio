import React from 'react';
import { IconContext } from 'react-icons';
import { BiLink } from 'react-icons/bi';

export default function Project(props) {
	return (
		<main>
			<article>
				<img src={props.image} alt={props.imageAlt} />
				<a href={props.codeLink} target='_blank'>
					<IconContext.Provider value={{ className: 'react-icons' }}>
						Code <BiLink />
					</IconContext.Provider>
				</a>
				<a href={props.websiteLink} target='_blank'>
					Live version <BiLink />
				</a>
			</article>
		</main>
	);
}

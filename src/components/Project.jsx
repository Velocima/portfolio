import React from 'react';
import { IconContext } from 'react-icons';
import { BiLink } from 'react-icons/bi';

export default function Project(props) {
	return (
		<article>
			<img src={props.image} alt={props.imageAlt} />
			<div className='links'>
				<a href={props.codeLink} target='_blank'>
					<IconContext.Provider value={{ className: 'react-icons' }}>
						Code <BiLink />
					</IconContext.Provider>
				</a>
				<a href={props.websiteLink} target='_blank'>
					Live <BiLink />
				</a>
			</div>
		</article>
	);
}

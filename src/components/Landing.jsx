import React from 'react';
import { Link } from 'react-router-dom';
import '../css/landing.css';

export default function Landing() {
	return (
		<main className='landing'>
			<h1>
				Hi, I'm <span>Max Hartley</span>
			</h1>
			<h2>A Full Stack Developer</h2>
			<p>
				Checkout <Link to='/projects'>My Projects</Link>
			</p>
		</main>
	);
}

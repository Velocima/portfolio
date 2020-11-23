import React from 'react';
import { Link } from 'react-router-dom';
import '../css/landing.css';

export default function Landing() {
	return (
		<main>
			<h1>Hi, I'm Max.</h1>
			<h2>A Full Stack Developer</h2>
			<p>
				Checkout <Link to='/projects'>My Projects</Link>
			</p>
		</main>
	);
}

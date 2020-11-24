import '../css/app.css';
import Landing from './Landing';
import Social from './Social';
import Projects from './Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='app'>
				<Social />
				<Switch>
					<Route path='/projects'>
						<Projects />
					</Route>
					<Route path='/'>
						<Landing />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;

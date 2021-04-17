import React from 'react'
import {Route, Switch } from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home';
import SignIn from './pages/SingIn'

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="signin" component={SignIn}/>
				<Route path="/" component={Home}/>
			</Switch>
		</div>
	);
}

export default App

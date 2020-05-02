import React from 'react';
import { NavLink } from 'react-router-dom';

export default class PrimaryNav extends React.Component {
	render() {
		return(
			<nav className="PrimaryNav" aria-label="Primary Navigation">
				<div className="PrimaryNav__wrapper">
					<NavLink to="/home"><div className="PrimaryNav__logo"></div></NavLink>
					<ul className="PrimaryNav__listItems">
						<li className="PrimaryNav__listItem"><NavLink to="/about" activeStyle={{ color: '#0799df'}}>About</NavLink></li>
						<li className="PrimaryNav__listItem"><NavLink to="/codepens" activeStyle={{ color: '#0799df'}}>Codepens</NavLink></li>
					</ul>
				</div>
			</nav>
		);
	}
}
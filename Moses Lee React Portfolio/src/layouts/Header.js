import React from 'react';
import classNames from 'classnames';

import PrimaryNav from '../components/PrimaryNav';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			active: false
		};
		
		this.handleScroll = this.handleScroll.bind(this);
	}
	
	componentDidMount() {
		const { active } = this.state;
		
		if (!active) {
			window.addEventListener('scroll', this.handleScroll);
		}
	}
	
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	
	handleScroll() {
		this.setState({
			active: window.scrollY > 0
		});
	}
	
	render() {
		const headerClasses = classNames(
			'Header',
			{'sticky' : this.state.active}
		);
		return(
			<header className={headerClasses}>
				<PrimaryNav />
			</header>
		);
	}
}
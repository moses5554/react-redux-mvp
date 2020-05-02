import React from 'react';

import LoadingModal from '../components/LoadingModal'

import Header from './Header';
import Footer from './Footer';

export default class AppWrapper extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			loaded: false,
		}
	}
		
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				loaded: true
			});
		}, 2000);
	}
	
	render() {
		if (!this.state.loaded) {
			return <LoadingModal loadingText="Loading App..." />;
		}

		return(
			<main className="AppWrapper">
				<Header />
				<div className="AppWrapper__wrapper content">
					{this.props.children}
				</div>
				<Footer />
			</main>
		);
	}
}
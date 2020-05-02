import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ParticleCanvas from '../components/ParticleCanvas';
import OnVisible from '../components/OnVisible';
import Button from '../components/Button';
import PenCard from '../components/PenCard';
import LoadingModal from '../components/LoadingModal';

import * as penActions from '../actions/pens';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		
		console.log(this.props);
		
		this.state = {
			pens: {
				loading: true
			}
		}
	}
	
	componentDidMount() {
		this.props.actions.fetchAllPens();
	}
	
	render() {
		const { data, loading } = this.props.pens;
		
		let popPens;
		if (loading) {
			popPens = <LoadingModal 
						  loadingText="Loading Popular Pens..."
					  />
		} else {		
			popPens = Object.values(data).slice(0,3).map(pen => {
				return(
				
					<PenCard
						title={pen.title}
						bgImg={pen.images.small}
						link={pen.link}
						details={pen.details}
					/>
				)
			});
		}
	
		return(
			<div className="HomePage">
				<ParticleCanvas />
				<div className="HomePage__content">
					<OnVisible
						offset={-375}
						className={["About", "masked--top"]}
					>
						<h1>About Me</h1>
						<p>I have always loved to push the boundaries of what I am capable of when it comes to coding. I am passionate about creating unique and stunning websites that don't follow your typical ruberic. I strive to learn more about the ever-evolving internet to better myself through experience.</p>
						<Button to="/about">Learn More</Button>
					</OnVisible>
					<OnVisible
						offset={-1175}
						className={["PopularPens"]}
					>
						<div className="PopularPens__content">
							<div className="PopularPens__wrapper">
								<h1>Recent Pens</h1>
								<div className="PopularPens__pens">
									{popPens}
								</div>
								<Button to="/codepens">View All</Button>
							</div>
						</div>
					</OnVisible>
				</div>
			</div>
		);
	}	
}

function mapStateToProps(state) {
	console.log('state', state);
	return {
		pens: {
			loading: state.pens.loading,
			data: state.pens.pens
		}
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(penActions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePage);


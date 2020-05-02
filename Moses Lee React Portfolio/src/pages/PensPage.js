import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

import Banner from '../components/Banner';
import LoadingModal from '../components/LoadingModal';
import PenCard from '../components/PenCard';
import Paginator from '../components/Paginator';

import * as penActions from '../actions/pens';

class PensPage extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			allLoaded: false,
			currentPage: 1
		}
	}
	
	componentDidMount() {
		// TODO: Make the call only if needed
		this.props.actions.fetchAllPens();
	}
	
	paginationHandler(e) {
		e.preventDefault();

		const el = e.target;
		const val = el.dataset.val;
		const next = this.state.currentPage + parseInt(val);
		
		if (next <= 0) {
			this.props.actions.fetchAllPens(1);
			this.setState({
				currentPage: 1
			});
		} else {
			this.props.actions.fetchAllPens(next);
			
			this.setState({
				currentPage: next
			});
		}
		
		
	}
	
	render() {
		const { loading, data } = this.props.pens;
		
		const contClasses = classNames(
			'PensPage',
			{
				'loading' : loading
			}
		);
		
		const innerContent = Object.values(data).map(pen => {
			console.log(pen)
			return(
				<PenCard
					title={pen.title}
					bgImg={pen.images.small}
					link={pen.link}
					details={pen.details}
				/>
			);
		});
		
		let modal;
		if (loading) {
			modal = <LoadingModal 
							   loadingText="Fetching Pens..."
							/>;
		}
		
	
		
		return(
			<div className={contClasses}>
				<Banner bgImg='https://s3-us-west-2.amazonaws.com/s.cdpn.io/280549/mountain-top.jpg' />
				<div className="PensPage__content masked--top">
					<div className="PensPage__wrapper">
						<h1>My Pens</h1>
						<div className="PensPage__pens">
							{innerContent}
							{modal}
						</div>
						<Paginator 
							onClickHandler={this.paginationHandler.bind(this)}	
						/>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	
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
)(PensPage);
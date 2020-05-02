import React from 'react';
import PropTypes from 'prop-types';

export default class LoadingModal extends React.PureComponent {
	render() {
		return(
			<div className="LoadingModal">
				<span className="LoadingModal__text">{this.props.loadingText || 'Loading...'}</span>
				{this.props.children}
			</div>
		);
	}
}

LoadingModal.defaultProps = {
	loadingText: ''
}

LoadingModal.propTypes = {
	loadingText: PropTypes.String
}


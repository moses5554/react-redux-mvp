import React from 'react';
import PropTypes from 'prop-types';

export default class Banner extends React.Component {
	render() {
		const { bgImg } = this.props;
		const styles = {
			'background-image': (bgImg) ? `url(${bgImg})` : ''
		}
		const childrenCont = (this.props.children) ? `<div className="Banner__content">${this.props.children}</div>`: '';
		
		return (
			<div className="Banner" style={styles}>
				<div className="Banner__wrapper">
					{childrenCont}
				</div>
			</div>
		);
	}	
}

Banner.PropTypes = {
	bgImg: React.PropTypes.String
}
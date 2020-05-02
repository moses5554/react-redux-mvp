import React from 'react';
import PropTypes from 'prop-types';

export default class PenCard extends React.PureComponent {
	render() {
		const { details, bgImg, title, link } = this.props;
		const cardStyles = {
			'background-image': (bgImg) ? `url(${bgImg})` : ''
		}
		
		return(
			<div className="PenCard">
				<div className="PenCard__wrapper">
					<div className="PenCard__img" style={cardStyles}></div>

					<div className="PenCard__meta">
						<h3>{title}</h3>
						<p dangerouslySetInnerHTML={{__html: details}}></p>
					</div>

				</div>
				<a href={link} className="PenCard__mask"></a>
			</div>
		);
	}
}

PenCard.defaultProps = {
	bgImg: '',
	title: '',
	details: '',
	link: ''
}

PenCard.propTypes = {
	bgImg: PropTypes.String,
	title: PropTypes.String,
	details: PropTypes.String,
	link: PropTypes.String
}


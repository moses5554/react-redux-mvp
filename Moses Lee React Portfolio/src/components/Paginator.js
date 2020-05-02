import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Paginator extends React.PureComponent {
	render() {
		return(
			<div className="Paginator">
				<div className="Paginator__wrapper">
					<nav className="Paginator__controls">
						<li className="Paginator__next Paginator__button"><a href="#" onClick={this.props.onClickHandler} data-val="1">Load More Pens</a></li>
					</nav>
				</div>
			</div>
		);
	}
}

Paginator.propTypes = {
	onClickHandler: PropTypes.func.isRequired
}
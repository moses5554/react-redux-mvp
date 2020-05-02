import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Button extends React.PureComponent {
	render() {
		return(
			<button className="Button">
				<NavLink to={this.props.to || ''}>{this.props.children}</NavLink>
			</button>
		);
	}
}
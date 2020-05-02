import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

export default class OnVisible extends React.Component {
	__rootEl;

	constructor(props) {
		super(props);

		this.handleScroll = debounce(this.handleScroll.bind(this), 100);

		this.state = {
			isVisible: false
		};
	}

	componentDidMount() {
		this.handleScroll();

		window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('resize', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
		window.removeEventListener('resize', this.handleScroll);
	}

	handleScroll() {
		const elTop = this.__rootEl.offsetTop;
		console.log(elTop)
		const isVisible = window.scrollY > (elTop + (this.props.offset || 0));

		if (isVisible) {
			this.setState({
				isVisible
			});
		}
	}

	render() {
		const { children } = this.props;
		const outClasses = classNames(
			'OnVisible',
			{
				visible: this.state.isVisible
			},
			[...this.props.className]
		);

		return (
			<section className={ outClasses } ref={ el => this.__rootEl = el }>
				<div className="OnVisible__wrapper">
					{ children }
				</div>
			</section>
		);
	}
};

OnVisible.defaultProps = {
	className: '',
	children: [],
	offset: 0,
	changeHandle: () => {}
};

OnVisible.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
	offset: PropTypes.number,
	changeHandle: PropTypes.func
};

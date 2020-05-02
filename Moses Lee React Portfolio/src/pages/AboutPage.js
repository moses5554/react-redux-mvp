import React from 'react';
import { NavLink } from 'react-router-dom';

import Banner from '../components/Banner';
import Button from '../components/Button';

export default class AboutPage extends React.PureComponent {
	render() {
		return(
			<div className="AboutPage">
				<Banner bgImg='https://s3-us-west-2.amazonaws.com/s.cdpn.io/280549/trees.jpg' />
				<div className="AboutPage__content  masked--top">
					<div className="AboutPage__wrapper">
						<h1>About Me</h1>
						<p>I am passionate about creating stunning and functional websites using various tools and methods commonly used in the industry today. I have created this project to challenge myself to create something different and showcase some of my skills. I am currently happily employed at <a href="http://www.GeckoDesigns.com">Gecko Designs</a> in Missoula, MT working as a fullstack web-dev creating Wordpress and React sites. Feel free to <a href="mailto:howlingwolfweb@gmail.com">shoot me a message</a>, or visit <a href="https://github.com/arkine" target="__blank">my Github page</a> if you have any questions or comments!</p>
						<Button to="/codepens">View My CodePens</Button>
					</div>
				</div>
			</div>
		);
	}
}
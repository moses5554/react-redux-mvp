import React from 'react';

export default class Footer extends React.PureComponent {
	render() {
		return(
			<footer className="Footer">
				<div class="copyright">&copy; {(new Date()).getFullYear()} Kevan Slyngstad <a href="http://www.howlingwolfweb.com">Howling Wolf Web</a></div>
			</footer>
		);
	}
}